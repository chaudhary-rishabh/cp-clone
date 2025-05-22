import PageTemplate from "@/components/PageTemplate";

export default function ServicesPage() {
  return (
    <PageTemplate
      headerTitle="Our Services"
      breadcrumb="Home - Services"
      hero={{
        image: "/cp5.jpeg",
        title: "Comprehensive Invitation & Stationery Services",
        description:
          "From initial design consultation to final delivery, Arabella Papers provides end-to-end service for all your invitation and stationery needs.",
        cta: { label: "GET STARTED", href: "/contact-us" },
      }}
      highlight="Personalized Attention: Every Detail Matters"
      cards={[
        {
          image: "/cp5.jpeg",
          title: "Design Consultation",
          description:
            "Work closely with our designers to bring your vision to life. We offer personalized guidance on style, material, and finishing touches.",
          cta: { label: "BOOK NOW", href: "/contact-us" },
        },
        {
          image: "/cp5.jpeg",
          title: "Printing & Delivery",
          description:
            "We use the highest quality materials and techniques, ensuring timely and safe delivery right to your doorstep.",
          cta: { label: "LEARN MORE", href: "/contact-us" },
        },
      ]}
    />
  );
}
