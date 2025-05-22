import React from "react";

export default function SectionHighlight({ text }: { text: string }) {
  return (
    <div className="w-full py-10 bg-[#F5F2EC] text-center">
      <h2 className="font-serif text-xl md:text-2xl font-semibold text-gray-700 tracking-wide">{text}</h2>
    </div>
  );
}
