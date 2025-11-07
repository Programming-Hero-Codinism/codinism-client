import { SectionTitle } from "@/components/custom";
import Image from "next/image";

const stackData = [
  {
    logo: "/icon/fi_721671.png",
  },
  {
    logo: "/icon/fi_3393920.png",
  },
  {
    logo: "/icon/fi_358980.png",
  },
];

export default function TechStack() {
  return (
    <>
      <div className="w-[450px] mx-auto text-center mt-16">
        <SectionTitle className="text-center" size="2xl">
          What tech stack we work with
        </SectionTitle>
      </div>

      <div className="bg-[#001636]  flex justify-center gap-2 flex-wra w-[345px] mx-auto py-2 rounded-2xl mt-10">
        {stackData.map((item, index) => (
          <div
            key={index}
            className="bg-secondary w-[104px] h-[104px] rounded-xl flex items-center justify-center"
          >
            <Image src={item.logo} width={56} height={56} alt={`tech-logo-${index}`} />
          </div>
        ))}
      </div>
    </>
  );
}
