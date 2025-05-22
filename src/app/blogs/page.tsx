import PageTemplate from "@/components/PageTemplate";

export default function BlogsPage() {
  return (
    <PageTemplate
      headerTitle="Our Blog"
      breadcrumb="Home - Blog"
      hero={{
        image: "/cp3.jpg",
        title: "Inspiration, Trends & Tips",
        description:
          "Stay up to date with the latest in invitation design, wedding trends, and expert tips for your special event.",
        cta: { label: "READ ARTICLES", href: "/blogs" },
      }}
      highlight="Featured Stories: Inspiration for Your Next Event"
      cards={[
        {
          image: "/cp3.jpg",
          title: "Invitation Trends 2025",
          description:
            "Discover the hottest styles, materials, and techniques shaping the invitation world this year.",
          cta: { label: "READ NOW", href: "/blogs/trends-2025" },
        },
        {
          image: "/cp3.jpg",
          title: "DIY Design Tips",
          description:
            "Simple, creative ideas for personalizing your invitations and stationery at home.",
          cta: { label: "READ NOW", href: "/blogs/diy-tips" },
        },
      ]}
    />
  );
}
