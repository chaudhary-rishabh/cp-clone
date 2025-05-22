import React from "react";
import SectionHeader from "./SectionHeader";
import SectionHighlight from "./SectionHighlight";
import InfoCard from "./InfoCard";
import CardGrid from "./CardGrid";
import HeroBanner from './HeroBanner';

type CardData = {
  image: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

type PageTemplateProps = {
  headerTitle: string;
  breadcrumb: string;
  hero: {
    image: string;
    title: string;
    description: string;
    cta?: { label: string; href: string };
  };
  highlight: string;
  cards: CardData[];
};

export default function PageTemplate({
  headerTitle,
  breadcrumb,
  hero,
  highlight,
  cards,
}: PageTemplateProps) {
  return (
    <main className="bg-[#F5F2EC]">
      <HeroBanner
  bgImageSrc="/cpwide.jpg"
  title={headerTitle}
  breadcrumbs={["Home", "Products"]}
/>

      <div className="container mx-auto px-4 py-8">
        <InfoCard {...hero} />
        <SectionHighlight text={highlight} />
        <CardGrid cards={cards} />
      </div>
    </main>
  );
}
