import { SectionTitle } from "@/components/custom";
import { ArrowUpRight } from "lucide-react";
import BinaryBackground from "../BinaryBackground";
import { Button } from "../button";

const Banner2 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <BinaryBackground w={0.48} h={0.45} />
      {/* Centered content */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-white
          px-4
          top-0
        "
      >
        {/* Main Heading */}
        <SectionTitle
          size="2xl"
          variant="centered"
          className="
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          From idea to <br /> reality fast with AI.
        </SectionTitle>

        {/* Subtitle */}
        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            mt-6
            font-normal
            text-gray-200
            max-w-2xl
            text-center
          "
        >
          We don’t just write code — we become your product partner, shaping your vision into a
          real, scalable solution. Every project we take on is crafted with care, precision, and
          pride, so your success is our shared mission.
        </p>

        {/* Buttons */}
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
          <Button
            className="
              rounded-full
              h-12
              w-[160px]
              shadow-lg
              flex
              items-center
              justify-center
              gap-2
              text-base
              font-medium
              bg-primary
              text-white
              hover:bg-primary/90
              transition-all
              duration-300
            "
          >
            Let’s Talk <ArrowUpRight size={18} />
          </Button>

          <Button
            className="
              rounded-full
              h-12
              w-[160px]
              bg-secondary
              hover:bg-secondary/90
              text-white
              font-medium
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
            "
          >
            See Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
