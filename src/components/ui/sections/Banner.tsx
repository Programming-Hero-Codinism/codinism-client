import { SectionTitle } from "@/components/custom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../button";

/**
 * Banner (Hero Section)
 * --------------------------------------------------------
 * - Full-screen responsive hero with fixed text color (same in dark/light).
 * - Centers content both vertically & horizontally.
 * - Background image positioned from the top.
 * - Includes a main heading, description, and CTA buttons.
 * - Clean, maintainable, and production-level structure.
 */

export default function Banner() {
  return (
    <section
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
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/layer/banner_layer.png')",
        backgroundPosition: "center top 160px",
        filter: "brightness(115%)",
      }}
    >
      {/* Content Wrapper */}
      <div
        className="
          relative
          max-w-4xl
          w-full
          text-center
          text-white
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

        {/* Subtitle / Description */}
        <p
          className="
            text-base
            sm:text-lg
            md:text-xl
            mt-6
            font-normal
            text-gray-200
            max-w-2xl
            mx-auto
          "
        >
          We don’t just write code — we become your product partner, shaping your vision into a
          real, scalable solution. Every project we take on is crafted with care, precision, and
          pride, so your success is our shared mission.
        </p>

        {/* CTA Buttons */}
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

          {/* Secondary Button */}
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
    </section>
  );
}
