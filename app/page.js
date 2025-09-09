"use client";
import { useState } from "react";
import Image from "next/image";
import InputBox from "./components/InputBox";
import ResultCard from "./components/ResultCard";

export default function Home() {
  const [result, setResult] = useState(null);

  const analyzeText = async (text) => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }), // ✅ FIXED
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <>
      {/* header */}
      <header>
        <div className="header flex justify-center items-center gap-4 my-15 text-white">
          <div>
            <Image src="/security.png" alt="Logo" width={42} height={42} />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl font-bold">FinShield</h2>
            <p className="text-sm text-gray-400">Your Fraud Protection Partner</p>
          </div>
        </div>
      </header>

      {/* components */}
      <InputBox onAnalyze={analyzeText} />
      {result && <ResultCard result={result} />}
    </>
  );
}
