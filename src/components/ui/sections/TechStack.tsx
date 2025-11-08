import { SectionTitle } from "@/components/custom";
import Image from "next/image";

// List of technology stack logos
const stackData = [
  { logo: "/icon/fi_721671.png" },
  { logo: "/icon/fi_3393920.png" },
  { logo: "/icon/fi_358980.png" },
];

export default function TechStack() {
  return (
    <>
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <div className="w-[450px] mx-auto text-center mt-16 max-w-full">
        <SectionTitle className="text-center text-white" size="2xl">
          What tech stack we work with
        </SectionTitle>
      </div>

      {/* ---------------------------- STACK LOGOS ---------------------------- */}
      {/* Responsive block:
          - `flex-wrap` ensures logos wrap naturally on smaller screens
          - fixed width center-aligned container for consistency
      */}
      <div className="bg-[#001636] flex justify-center flex-wrap gap-2 w-[345px] mx-auto py-2 rounded-2xl mt-10">
        {stackData.map((item, index) => (
          <div
            key={index}
            className="
              bg-secondary w-[104px] h-[104px]
              rounded-xl flex items-center justify-center
            "
          >
            <Image
              src={item.logo}
              width={56}
              height={56}
              alt={`tech-logo-${index}`}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}
