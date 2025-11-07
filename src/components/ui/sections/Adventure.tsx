import { SectionTitle } from "@/components/custom";
import Image from "next/image";

const adventureLogo = [
  { logo: "/icon/logoipsum-354.png" },
  { logo: "/icon/logoipsum-367.png" },
  { logo: "/icon/logoipsum-354.png" },
  { logo: "/icon/logoipsum-393.png" },
  { logo: "/icon/logoipsum-367.png" },
];

export default function Adventure() {
  // Duplicate the list for seamless looping
  const repeatedLogos = [...adventureLogo, ...adventureLogo];

  return (
    <>
      <div className="mt-32">
        <SectionTitle size="2xl" className="text-center">
          Past adventures we conquered together
        </SectionTitle>
      </div>

      {/* Left moving marquee */}
      <div className="relative overflow-hidden mt-16 border-t border-b border-secondary">
        <div className="flex animate-marquee-left">
          {repeatedLogos.map((item, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 w-[275px] h-[286px] flex items-center justify-center border-r border-secondary"
            >
              <Image
                src={item.logo}
                width={160}
                height={46}
                alt={`adventure logo left ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right moving marquee */}
      <div className="relative overflow-hidden  border-b border-secondary">
        <div className="flex animate-marquee-right">
          {repeatedLogos.map((item, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 w-[275px] h-[286px] flex items-center justify-center border-r border-secondary"
            >
              <Image
                src={item.logo}
                width={160}
                height={46}
                alt={`adventure logo right ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
