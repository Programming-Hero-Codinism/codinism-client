import { SectionTitle } from "@/components/custom";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

const weKnowData = [
  {
    title: "Web3",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-1.png",
  },
  {
    title: "Shopify, Wordpress",
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
    title: "Big Data",
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
    title: "Fullstack Web Application",
    subtitle: "No cookie-cutter plans here.",
    description: "We tailor every strategy to fit your unique goals and budget for maximum impact.",
    image: "/icon/Feature-icon-6.png",
  },
];

export default function WeKnow() {
  return (
    <section className="mt-16">
      <SectionTitle size="2xl" className="text-center">
        Trails we know well
      </SectionTitle>

      <div className="flex flex-wrap gap-4 mt-16 justify-center">
        {weKnowData.map((item, index) => (
          <div
            key={index}
            className="w-[424px] h-[288px] border border-secondary p-8 flex flex-col"
          >
            <Image src={item.image} width={48} height={48} alt={`${item.title} icon`} />

            <div className="mt-12 flex flex-col justify-between flex-1">
              <SectionTitle size="lg">{item.title}</SectionTitle>
              <p className="text-[16px] mt-6">
                <span className="font-bold">{item.subtitle} </span>
                <span>{item.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <Button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg h-[30px] w-[190px] mt-6">
          Send a message <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  );
}
