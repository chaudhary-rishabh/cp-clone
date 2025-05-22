import React from "react";
import Button from "./Button";

type InfoCardProps = {
  image: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  reverse?: boolean;
};

export default function InfoCard({ image, title, description, cta, reverse = false }: InfoCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} bg-white rounded-lg shadow-md overflow-hidden mb-8`}>
      <div className="md:w-1/2">
        <img src={image} alt={title} className="object-cover w-full h-52 md:h-full" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="font-serif text-lg text-gray-700 md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {cta && <Button href={cta.href}>{cta.label}</Button>}
      </div>
    </div>
  );
}
