import React from "react";
import Button from "./Button";

type CardData = {
  image: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export default function CardGrid({ cards }: { cards: CardData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <img src={card.image} alt={card.title} className="object-cover w-full h-48" />
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="font-serif text-gray-600 font-semibold text-lg mb-2">{card.title}</h4>
            <p className="text-gray-700 mb-4 flex-1">{card.description}</p>
            {card.cta && <Button href={card.cta.href} variant="secondary">{card.cta.label}</Button>}
          </div>
        </div>
      ))}
    </div>
  );
}
