import { SectionTitle } from "@/components/custom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../button";

export default function Banner() {
  return (
    <>
      {/* 
        Hero / Banner Section 
        - Full-screen section with centered content
        - Background image positioned from the top
        - Uses responsive padding and layout adjustments
      */}
      <div
        className="
          relative 
          w-full 
          h-screen 
          flex 
          justify-center 
          items-center 
          bg-no-repeat 
          bg-center 
          bg-contain 
          px-4 sm:px-6 lg:px-8
        "
        style={{
          backgroundImage: "url('/layer/banner_layer.png')",
          backgroundPosition: "center top 160px",
          filter: "brightness(120%)",
        }}
      >
        {/* Content Container */}
        <div className="relative max-w-3xl w-full text-center text-white">
          {/* Main Heading */}
          <SectionTitle
            size="2xl"
            variant="centered"
            className="
              leading-tight 
              text-[36px] 
              sm:text-[48px] 
              md:text-[64px] 
              lg:text-[80px]
              font-semibold
            "
          >
            From idea to <br /> reality fast with AI.
          </SectionTitle>

          {/* Subtitle / Description */}
          <p
            className="
              text-base 
              sm:text-lg 
              md:text-xl 
              mt-6 
              font-normal 
              text-gray-200
            "
          >
            We don’t just write code — we become your product partner, shaping your vision into a
            real, scalable solution. Every project we take on is crafted with care, precision, and
            pride, so your success is our shared mission.
          </p>

          {/* Call-to-Action Buttons */}
          <div
            className="
              mt-10 
              flex 
              flex-col 
              sm:flex-row 
              justify-center 
              items-center 
              gap-4
            "
          >
            {/* Primary Button */}
            <Button className="rounded-full h-12 font-normal w-[160px] shadow-lg flex items-center justify-center gap-2">
              Let’s Talk <ArrowUpRight size={18} />
            </Button>

            {/* Secondary Button */}
            <Button className="rounded-full h-12 w-[160px] bg-secondary hover:bg-secondary/90 font-normal shadow-lg flex items-center justify-center">
              See Service
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
