"use client"; // Required for interactive buttons and state
import { useState } from 'react';

export default function DayTypePage() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkDay = async () => {
    setLoading(true);
    const res = await fetch(`/api/day-type?date=${date}`);
    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Day Type</h1>
        
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
        />

        <button 
          onClick={checkDay}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {loading ? "Calculating..." : "Check Day Type"}
        </button>

        {result && (
          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-center">
            <p className="text-sm text-blue-600 uppercase font-bold tracking-widest">Result</p>
            <p className="text-xl font-black text-blue-900 mt-1">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}