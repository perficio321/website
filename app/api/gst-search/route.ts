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
    key: string;
    cgst: number;
    sgst: number;
    schedule: string;
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

const parseGstData = (data: RawGstData): GstItem[] => {
    let allItems: GstItem[] = [];

    const tables: GstTable[] = [
        { key: "Table 1", cgst: 2.5, sgst: 2.5, schedule: "Schedule I" },
        { key: "Table 2", cgst: 9, sgst: 9, schedule: "Schedule II" },
        // Add more if needed
    ];

    for (const table of tables) {
        const jsonDataTable = data[table.key];

        if (Array.isArray(jsonDataTable)) {
            jsonDataTable.forEach((row: RawRow) => {
                const hsnCode = getTrimmedString(row, 'Column2');
                const description = getTrimmedString(row, 'Column3');

                if (!hsnCode || hsnCode.length < 2 || hsnCode.startsWith('[')) {
                    return;
                }

                allItems.push({
                    hsn: hsnCode,
                    description,
                    sgst: table.sgst,
                    cgst: table.cgst,
                    igst: table.cgst + table.sgst,
                    schedule: table.schedule
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
        return cachedSearchableItems;
    } catch (error: any) {
        console.error("🔴 Failed to read GST data:", error.message);
        return [];
    }
}

// --- API Route Handler ---

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const query: string = reqBody.query;

        if (!query || query.length < 2) {
            return NextResponse.json({ results: [] });
        }

        const searchableItems = await getSearchableItems();
        console.log('Total items loaded:', searchableItems.length);

        const searchTerm = query.trim().toLowerCase();
        const isHsnSearch = /^\d+$/.test(searchTerm);

        const results = searchableItems.filter(item => {
            const itemHsn = String(item.hsn).trim().toLowerCase();

            if (isHsnSearch) {
                return itemHsn.includes(searchTerm);
            } else {
                const itemDescription = item.description ? item.description.toLowerCase() : '';
                return itemDescription.includes(searchTerm);
            }
        });

        return NextResponse.json({ results: results.slice(0, 5) });

    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({
            error: 'Internal server error while searching for GST rates.',
            details: error.message
        }, { status: 500 });
    }
}
