import PageTemplate from "@/components/PageTemplate";

export default function AboutUsPage() {
  return (
    <PageTemplate
      headerTitle="About Us"
      breadcrumb="Home - About Us"
      hero={{
        image: "/cp2.jpg",
        title: "Our Story & Vision",
        description:
          "Arabella Papers began with a passion for timeless design and quality craftsmanship. Our mission is to make every special event unforgettable through exceptional invitations and stationery.",
        cta: { label: "MEET OUR TEAM", href: "/contact-us" },
      }}
      highlight="Where Passion Meets Paper: Meet the Artists & Craftsmen"
      cards={[
        {
          image: "/cp2.jpg",
          title: "Our Journey",
          description:
            "From humble beginnings to a renowned name in bespoke invitations, Arabella Papers has grown with every love story and celebration we’re privileged to be part of.",
          cta: { label: "READ MORE", href: "/blogs" },
        },
        {
          image: "/cp2.jpg",
          title: "Our Team",
          description:
            "Meet the passionate designers, artisans, and coordinators dedicated to making your vision a reality.",
          cta: { label: "JOIN US", href: "/contact-us" },
        },
      ]}
    />
  );
}
