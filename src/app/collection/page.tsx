import PageTemplate from "@/components/PageTemplate";

export default function CollectionPage() {
  return (
    <PageTemplate
      headerTitle="Our Collection"
      breadcrumb="Home - Collection"
      hero={{
        image: "/cpbig2.jpeg",
        title: "Explore Our Signature Invitation Collections",
        description:
          "Discover a curated selection of invitations and stationery, each crafted to suit a unique aesthetic and occasion. Find the perfect fit for your event.",
        cta: { label: "BROWSE PRODUCTS", href: "/products" },
      }}
      highlight="Curated Themes: Timeless, Elegant, Modern"
      cards={[
        {
          image: "/cpbig2.jpeg",
          title: "Classic Elegance",
          description:
            "A collection featuring traditional designs, premium papers, and timeless details—perfect for formal events.",
          cta: { label: "VIEW COLLECTION", href: "/products" },
        },
        {
          image: "/cpbig2.jpeg",
          title: "Modern Chic",
          description:
            "Bold colors, unique shapes, and contemporary finishes for those seeking a modern twist.",
          cta: { label: "VIEW COLLECTION", href: "/products" },
        },
      ]}
    />
  );
}
