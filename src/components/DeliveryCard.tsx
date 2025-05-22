'use client'
// app/components/DeliveryCard.tsx
import Image from "next/image";

interface DeliveryCardProps {
  leftImage: string;
  rightImage: string;
  title: React.ReactNode;
  description: string;
  bullets: { label: string; text: string }[];
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function DeliveryCard({
  leftImage,
  rightImage,
  title,
  description,
  bullets,
  buttonText,
  onButtonClick,
  className = "",
}: DeliveryCardProps) {
  return (
    <section
      className={`w-full bg-[#ecebe5] px-2 md:px-8 py-10 md:py-16 flex items-center justify-center ${className}`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: Overlapping Images */}
        <div className="relative flex justify-center md:justify-end items-center h-[340px] md:h-[430px] lg:h-[500px]">
          {/* Large Main Image */}
          <div className="relative z-10 w-[300px] sm:w-[350px] md:w-[350px] lg:w-[430px] rounded shadow-xl overflow-hidden border border-gray-300 bg-white">
            <Image
              src={leftImage}
              alt="Main invitation"
              width={430}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Small Overlapping Image */}
          <div className="absolute z-20 left-[60%] bottom-[-40px] md:left-[58%] md:bottom-[-32px] w-[170px] sm:w-[200px] md:w-[210px] lg:w-[240px] rounded shadow-lg overflow-hidden border border-gray-300 bg-white
              hidden md:block"
          >
            <Image
              src={rightImage}
              alt="Secondary invitation"
              width={240}
              height={170}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Show overlap image on mobile, below main image */}
          <div className="block md:hidden mt-3 ml-8 w-[150px] sm:w-[180px] rounded shadow-lg overflow-hidden border border-gray-300 bg-white">
            <Image
              src={rightImage}
              alt="Secondary invitation"
              width={180}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="pt-3 md:pt-0 flex flex-col h-full justify-center">
          {/* Title */}
          <h2 className="text-[2.2rem] md:text-4xl lg:text-5xl font-serif font-extrabold leading-tight mb-4">
            {title}
          </h2>
          {/* Description */}
          <p className="text-lg md:text-xl text-[#232221] font-medium mb-6">{description}</p>
          {/* Bullet points */}
          <div className="flex flex-col gap-4 mb-4">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-1 text-[#bda86d] text-2xl">✓</span>
                <div>
                  <span className="font-bold text-lg">{b.label}</span>
                  <span className="text-lg">: {b.text}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Button */}
          <div className="mt-2">
            <button
              className="px-10 py-3 bg-[#bda86d] hover:bg-[#9c8957] text-white text-lg font-bold rounded-none shadow transition uppercase tracking-wide"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
