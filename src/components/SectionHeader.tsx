import React from "react";

export default function SectionHeader({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string;
}) {
  return (
    <div className="w-full flex flex-col items-center py-8 bg-[#F5F2EC]">
      <div className="border-4 border-[#ddd] bg-white px-8 py-4 rounded-xl shadow-md text-center">
        <h1 className="font-serif text-2xl md:text-3xl text-gray-800 font-semibold tracking-wide mb-2">{title}</h1>
        <span className="text-xs text-gray-700 tracking-wider">{breadcrumb}</span>
      </div>
    </div>
  );
}
