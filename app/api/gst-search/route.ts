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

    // ✅ EXEMPT TABLE (all 0%)
    // Change 'Exempt Table' to the real key in your gstdata.json for exempt items
    { key: 'Exempt Table', cgst: 0, sgst: 0, schedule: 'Exempt (0%)' },
  ];

  for (const table of tables) {
    const jsonDataTable = data[table.key];

    if (Array.isArray(jsonDataTable)) {
      jsonDataTable.forEach((row: RawRow) => {
        const hsnCode = getTrimmedString(row, 'Column2');   // HSN column
        const description = getTrimmedString(row, 'Column3'); // Description column

        // Skip invalid / header rows
        if (!hsnCode || hsnCode.length < 2 || hsnCode.startsWith('[')) {
          return;
        }

        allItems.push({
          hsn: hsnCode,
          description,
          sgst: table.sgst,
          cgst: table.cgst,
          igst: table.cgst + table.sgst,
          schedule: table.schedule,
        });
      });
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
    const isHsnSearch = /^\d+$/.test(normalizedTerm);

    let results: GstItem[] = [];

    if (isHsnSearch) {
      // 🔍 HSN search: match any HSN containing those digits
      results = searchableItems.filter((item) => {
        const itemHsn = normalize(String(item.hsn));
        return itemHsn.includes(normalizedTerm);
      });
    } else {
      // 🔍 Keyword search with simple scoring
      const words = tokenize(normalizedTerm);

      results = searchableItems
        .map((item) => {
          const haystack = normalize(
            `${item.description || ''} ${item.schedule || ''}`,
          );

          let score = 0;
          for (const w of words) {
            if (!w) continue;
            if (haystack.includes(w)) {
              score += 1;
            }
          }

          return { item, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ item }) => item);
    }

    // ✅ Return ALL matches (no .slice(0, 5))
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
