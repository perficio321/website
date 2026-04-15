import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// --- Type Definitions ---

interface GstItem {
  hsn: string;
  description: string;
  sgst: number;
  cgst: number;
  igst: number;
  schedule: string;
}

interface GstTable {
  key: string;      // key in gstdata.json (e.g. "Table 1", "Exempt Table")
  cgst: number;
  sgst: number;
  schedule: string; // label to show in UI
}

interface RawRow {
  [key: string]: any;
}

interface RawGstData {
  [key: string]: RawRow[];
}

// --- Utility Functions ---

const getTrimmedString = (row: RawRow, columnKey: string): string => {
  const value = row[columnKey];
  return value !== undefined && value !== null ? String(value).trim() : '';
};

const normalize = (str: string): string =>
  str.toLowerCase().replace(/\s+/g, ' ').trim();

const tokenize = (str: string): string[] =>
  normalize(str)
    .split(/\s+/)
    .filter(Boolean);

const parseGstData = (data: RawGstData): GstItem[] => {
  let allItems: GstItem[] = [];

  // 🔴 IMPORTANT: Update `key` strings to EXACTLY match the keys in gstdata.json
  const tables: GstTable[] = [
    { key: 'Table 1', cgst: 2.5, sgst: 2.5, schedule: 'Schedule I (5%)' },
    { key: 'Table 2', cgst: 9, sgst: 9, schedule: 'Schedule II (18%)' },
    { key: 'Table 3', cgst: 14, sgst: 14, schedule: 'Schedule III (28%)' },
    { key: 'Table 4', cgst: 6, sgst: 6, schedule: 'Schedule IV (12%)' },
    { key: 'Table 5', cgst: 1.5, sgst: 1.5, schedule: 'Schedule V (3%)' },
    { key: 'Exempt', cgst: 0, sgst: 0, schedule: 'Exempt' },
    { key: 'Ann-I (113)', cgst: 6, sgst: 6, schedule: 'Schedule IV (12%)' },
    { key: 'Ann -II (161)', cgst: 0, sgst: 0, schedule: 'Exempt' },
  ];

  for (const table of tables) {
    const jsonDataTable = data[table.key];

    if (Array.isArray(jsonDataTable)) {
      let count = 0;
      jsonDataTable.forEach((row: RawRow) => {
        if (!row) return;

        // More robust HSN/Description detection across various column mappings
        const hsnCode = getTrimmedString(row, 'Column2') || getTrimmedString(row, 'Column3') || getTrimmedString(row, 'Column7') || '';
        const description = (
          getTrimmedString(row, 'Column3') ||
          getTrimmedString(row, 'Column4') ||
          getTrimmedString(row, 'Column5') ||
          getTrimmedString(row, 'Column8') ||
          ''
        );

        // Skip obvious header or invalid rows. Allow single digit numeric HSNs (like Annexures)
        if (!hsnCode || (hsnCode.length < 2 && !/^\d+$/.test(hsnCode)) || hsnCode.startsWith('[') || hsnCode === 'Column2' || hsnCode.toLowerCase().includes('chapter')) {
          return;
        }


        // Avoid adding the same text twice if detection fell back to same column
        if (hsnCode === description) return;

        allItems.push({
          hsn: hsnCode,
          description,
          sgst: table.sgst,
          cgst: table.cgst,
          igst: table.cgst + table.sgst,
          schedule: table.schedule,
        });
        count++;
      });
      console.log(`✅ Table "${table.key}" loaded: ${count} items`);
    }
  }


  return allItems;
};

// --- Cache & File Read ---

let cachedSearchableItems: GstItem[] | null = null;

async function getSearchableItems(): Promise<GstItem[]> {
  if (cachedSearchableItems) {
    return cachedSearchableItems;
  }

  const dataFilePath = path.join(process.cwd(), 'public', 'gstdata.json');

  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf-8');
    const rawGstData = JSON.parse(fileContents) as RawGstData;
    cachedSearchableItems = parseGstData(rawGstData);
    console.log('✅ GST data loaded:', cachedSearchableItems.length, 'items');
    return cachedSearchableItems;
  } catch (error: any) {
    console.error('🔴 Failed to read GST data:', error.message);
    return [];
  }
}

// --- API Route Handler ---

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const query: string = reqBody.query;

    if (typeof query !== 'string' || query.trim().length < 2) {
      return NextResponse.json({ results: [] });
    }

    const searchableItems = await getSearchableItems();

    const rawSearchTerm = query.trim();
    const normalizedTerm = normalize(rawSearchTerm);
    const tokenizedTerms = tokenize(normalizedTerm);
    const isNumeric = /^\d+$/.test(normalizedTerm);

    const matches = searchableItems
      .map((item) => {
        const itemHsn = normalize(String(item.hsn));
        const itemDesc = normalize(item.description || '');
        const haystack = `${itemHsn} ${itemDesc} ${normalize(item.schedule || '')}`;

        let score = 0;

        // 1. Check for exact HSN match (high priority)
        if (isNumeric && itemHsn === normalizedTerm) {
          score += 10;
        } else if (isNumeric && itemHsn.includes(normalizedTerm)) {
          score += 5;
        }

        // 2. Keyword matching score
        for (const word of tokenizedTerms) {
          if (!word) continue;
          
          if (itemDesc === word) {
            score += 5; // Perfect match on a single word
          } else if (itemDesc.startsWith(word + ' ') || itemDesc.endsWith(' ' + word)) {
            score += 3; // Word boundary match
          } else if (haystack.includes(word)) {
            score += 1; // Generic substring match
          }
        }

        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);

    const results = matches.map(({ item }) => item);

    // ✅ Return ALL matches
    return NextResponse.json({ results });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error while searching for GST rates.',
        details: error.message,
      },
      { status: 500 },
    );
  }
}
