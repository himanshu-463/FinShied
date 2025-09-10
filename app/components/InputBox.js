"use client";
import { useState } from "react";

export default function InputBox({ onAnalyze }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      await onAnalyze(text);
      // setText("");
    }
  };

  return (
    <main className="flex-grow">
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleSubmit}
          className="text-white rounded-3xl border-2 p-8 border-blue-900 h-[62vh] sm:h-[61vh] md:h-[54vh] lg:h-[31vh] w-[70vw]"
        >
          <h3>Enter SMS Text</h3>

          <textarea
            className="w-full resize-y h-55 p-4 mt-4 rounded-3xl bg-gray-900 placeholder-gray-400 align-top "
            placeholder="Type your message here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-700 text-white font-bold rounded-3xl p-4"
            >
              Analyze
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <div className="w-[80vw] h-[2px] bg-slate-500"></div>
      </div>
    </main>
  );
}
