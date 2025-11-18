import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

const data = [
  {
    title:
      "Boost up your engineering team without paying extra visa fee. ( It will take less than 2 weeks to connect up )",
    img: "/layer/contribution-1.png",
  },
  {
    title: "Get introduced with the top 4% Software Engineers.",
    img: "/layer/contribution-2.png",
  },
  {
    title: "Meet Top 4% of pure Talented Engineers.",
    img: "/layer/contribution-3.png",
  },
  {
    title: "Meet Top 4% of pure Talented Engineers.",
    img: "/layer/contribution-4.png",
  },
];

export default function Contribution() {
  return (
    // Section Container
    <section className="mt-32 flex flex-col lg:flex-row gap-10  justify-center items-center  md:mx-12 ">
      {/* Left Column */}

      <div className="lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-tight ">
          How We <br className="hidden lg:inline" /> Contributed build{" "}
          <br className="hidden lg:inline" /> a dream team
        </h1>

        {/* Description Paragraph */}
        <p className="mt-8 text-gray-500 max-w-md">
          Boost up your engineering team without paying extra visa fee. ( It will take less than 2
          weeks to connect up )
        </p>

        {/* Button Container */}
        <div className="mt-8 lg:mt-16">
          <Button
            className="
            flex items-center gap-2 bg-primary text-white
            px-6 py-3 rounded-full shadow-lg
            h-[46px] w-[245px] 
            mt-8 lg:mt-32 transition-colors duration-200 hover:bg-primary/90
          "
          >
            Send a message <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>

      {/* --- Right Column
       */}

      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10 lg:mt-0">
        {data.map((item, index) => (
          // Individual Card Item
          <div key={index} className={`w-[330px] min-h-[222px] p-4 border-l-2 border-primary`}>
            <Image
              width={127}
              height={127}
              src={item.img}
              alt={`Contribution image ${index + 1}`}
              className="mb-4"
            />
            {/* Title/Description */}
            <p className="mt-2 text-base font-medium text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
