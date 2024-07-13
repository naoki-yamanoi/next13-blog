"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 rounded shadow-md mx-auto p-2">
      <h3>エラー発生しました</h3>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200"
        onClick={() => reset()}
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
