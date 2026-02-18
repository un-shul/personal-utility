import { NextRequest, NextResponse } from 'next/server';
import { PythonShell } from 'python-shell';
import path from 'path';

export async function GET(request: NextRequest) {
  // Get the date from the URL (e.g., /api/day-type?date=2026-02-18)
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

  try {
    const scriptPath = path.join(process.cwd(), 'python/day_logic.py');
    
    // Pass the date as an argument to the Python script
    const results = await PythonShell.run(scriptPath, { args: [date] });
    
    return NextResponse.json({ result: results[0] });
  } catch (error) {
    return NextResponse.json({ error: "Calculation failed" }, { status: 500 });
  }
}