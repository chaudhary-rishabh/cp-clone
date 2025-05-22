import HeroSlider from "@/components/HeroSlider";
import FancyCard from "@/components/FancyCard";
import FancyCardTwo from "@/components/FancyCard";

export default function Home() {
  return (
    <div>
      <HeroSlider />
       <FancyCard
        bgImageSrc="/cp6.png"
        focusImageSrc="/cp1.jpeg"
        focusImageAlt="Smiling woman holding a coffee"
        title="A Large Heading"
        description={`Quam sed mus sed gravida at quis maecenas duis. 
          Id nunc, et cras pretium nullam nunc nec, massa accumsan.`}
      />
       <FancyCardTwo
        bgImageSrc="/cp3.jpg"
        focusImageSrc="/cp2.jpg"
        focusImageAlt="Smiling woman holding a coffee"
        title="A Large Heading"
        description={`Quam sed mus sed gravida at quis maecenas duis. 
          Id nunc, et cras pretium nullam nunc nec, massa accumsan.`}
      />
    </div>
  );
}
