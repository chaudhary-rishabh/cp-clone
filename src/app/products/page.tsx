'use client'
import PageTemplate from "@/components/PageTemplate";
import DeliveryCard from "@/components/DeliveryCard";

export default function ProductsPage() {
  return (
    <>
    <PageTemplate
      headerTitle="Our Products"
      breadcrumb="Home - Products"
      hero={{
        image: "/cpbig2.jpeg", // Place image in public/images/
        title: "Discover the Perfect Invitation to Announce Your Special Day",
        description: "Arabella Papers offers a bespoke collection of wedding invitations, meticulously crafted to reflect your unique story and style. Each piece is a blend of traditional craftsmanship and modern aesthetics, designed not just to invite but to impress.",
        cta: { label: "BOOK A CALL", href: "/contact-us" },
      }}
      highlight="Signature Collections: Handcrafted with Heart and Precision"
      cards={[
        {
          image: "/cp3.jpg",
          title: "Wedding Invitations",
          description: "We create custom wedding invitations that reflect each couple’s unique love story. Using techniques like foil, blind embossing, letterpress, and engraving, foil stamping, and laser cutting, and offering premium papers such as linen, cotton, and metallics, every invitation is a timeless work of art.",
          cta: { label: "EXPLORE NOW", href: "/collection" },
        },
        {
          image: "/cp1.jpeg",
          title: "Bar/ Bat Mitzvah",
          description: "At Arabella Papers, we understand the significance of each child's Bar or Bat Mitzvah. This collection is designed to capture the essence of this important rite of passage with elegance and personal touch.",
          cta: { label: "EXPLORE NOW", href: "/collection" },
        },
      ]}
      />
       <DeliveryCard
      leftImage="/cpbig1.jpeg"   // e.g. "/images/main.png"
      rightImage="/cp6.png" // e.g. "/images/overlap.png"
      title={
        <>
          <span className="text-[#bda86d] font-bold">
            Delivery and Fulfilment:
          </span>{" "}
          Bringing Your Dream Wedding Invitations to Life with Care and Precision.
        </>
      }
      description="Experience flawless execution from print to delivery with Arabella Papers. We understand the importance of timely and accurate delivery of your wedding stationery. Our commitment is to ensure that every invitation suite arrives in perfect condition and exactly when you need it."
      bullets={[
        {
          label: "Precision Handling",
          text: "Each order is carefully packaged to prevent any damage during transit, ensuring that your invitations are as immaculate upon arrival as they were when they left our warehouse.",
        },
        {
          label: "Tracking and Updates",
          text: "Receive real-time updates as your package makes its way to you. Our transparent tracking system allows you to plan accordingly, ensuring you're fully prepared for your upcoming events.",
        },
      ]}
      buttonText="BOOK A CALL"
      onButtonClick={() => window.open("https://your-booking-link.com", "_blank")}
    />
      </>
  );
}
