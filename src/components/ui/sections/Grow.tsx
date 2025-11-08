import { SectionTitle } from "@/components/custom";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

/**
 * Timeline data: Each item represents a step in the growth process
 * isBorder = draws the dotted separator before the last item
 */
const growData = [
  {
    title: "Discovery & Consultation",
    description: "",
    isBorder: false,
  },
  {
    title: "Strategy & Planning",
    description: "",
    isBorder: false,
  },
  {
    title: "Execution & Growth",
    description: "",
    isBorder: false,
  },
  {
    title: "Monitoring & Optimization",
    description: "",
    isBorder: true,
  },
];

export default function Grow() {
  return (
    <section className="mt-16">
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <SectionTitle size="2xl" className="text-center text-white">
        How we can grow together
      </SectionTitle>

      {/* ---------------------------- MAIN GRID ---------------------------- */}
      {/* Responsive layout:
        - Single column on mobile
        - Image left + content right on medium & above
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-10">
        {/* ---------------------------- LEFT IMAGE ---------------------------- */}
        <div className="flex justify-center">
          <Image
            src="/layer/men-working-web.png"
            width={560}
            height={560}
            alt="men-working-image"
            className="max-w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ---------------------------- RIGHT CONTENT ---------------------------- */}
        <div className="flex flex-col">
          {/* Growth Steps */}
          {growData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 pt-4 ${
                item.isBorder ? "border-t border-dotted border-primary mt-16 pt-16" : "mt-4"
              }`}
            >
              {/* Step number circle */}
              <div className="bg-[#001636] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <p className="text-primary font-semibold">{String(index + 1).padStart(2, "0")}</p>
              </div>

              {/* Step text */}
              <div>
                <p className="text-lg font-medium text-white">{item.title}</p>
              </div>
            </div>
          ))}

          {/* ---------------------------- FINAL NOTES + BUTTON ---------------------------- */}
          {/* 
            `ml-[65px]` aligns this block visually with step text
            (10 + 6 + 40 px accounted from: circle width + gap + alignment spacing)
          */}
          <div className="ml-[65px]">
            <p className="text-sm text-gray-300">
              Ongoing monitoring, strategic advice, and proactive improvements as your business
              evolves. We track performance metrics, identify optimization opportunities, and adapt
              solutions to changing needs.
            </p>

            <Button
              className="
                flex items-center gap-2 bg-primary text-white
                px-6 py-3 rounded-full shadow-lg
                h-[30px] w-[170px] mt-6
              "
            >
              Send a message <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
