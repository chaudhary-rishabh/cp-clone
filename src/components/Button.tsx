import React from "react";

export default function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded px-5 py-2 font-semibold tracking-wide transition 
        ${variant === "primary" 
          ? "bg-[#CF9E41] text-white hover:bg-[#b88831]" 
          : "bg-gray-800 text-white hover:bg-gray-600"
        }`}
    >
      {children}
    </a>
  );
}
