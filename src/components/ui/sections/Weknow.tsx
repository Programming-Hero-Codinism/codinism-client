import { SectionTitle } from "@/components/custom";
import Image from "next/image";

const weKnowData = [
  {
    title: "Web3",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-1.png",
  },
  {
    title: "Shopify , Wordpress",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-2.png",
  },
  {
    title: "Blockchain",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-3.png",
  },
  {
    title: "Big data",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-4.png",
  },
  {
    title: "Mobile Apps",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-5.png",
  },
  {
    title: "Fullstack web application",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-6.png",
  },
];

export default function WeKnow() {
  return (
    <>
      <div className="mt-16">
        <SectionTitle size="2xl" className="text-center">
          Trails we know well
        </SectionTitle>
      </div>
      <div className="flex flex-wrap gap-4 mt-16">
        {weKnowData.map((item, index) => (
          <div key={index} className="w-[424px] h-[288px] border border-secondary p-8">
            <Image src={item.image} width={48} height={48} alt={`${item.title} icon`} />
            <div className="mt-12">
              <SectionTitle>{item.title}</SectionTitle>
              <p className="text-[16px] mt-6">
                <span className="font-bold">{item.subtitle} </span>
                <span>{item.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
