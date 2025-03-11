"use client";

import { useState } from "react";
import axios from "axios";
import { apiServices } from "@/services/apiServices";

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiServices.fetchMyProduct();
      setData(JSON.stringify(response?.data.products[0]));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={fetchData}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch API"}
      </button>
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      {data && (
        <pre className="mt-4 p-4 bg-gray-200 rounded-lg text-sm w-96 overflow-auto">
          {data}
        </pre>
      )}
    </div>
  );
}
