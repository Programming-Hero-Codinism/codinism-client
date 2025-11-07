import { SectionTitle } from "@/components/custom";

// List of industries with background colors
const industries = [
  { title: "Hospital", bg: "rgba(0, 16, 38, 1)" },
  { title: "Finance", bg: "#001026" },
  { title: "Retail", bg: "rgba(0, 16, 38, 1)" },
  { title: "Real Estate", bg: "#001026" },
  { title: "Energy", bg: "rgba(0, 16, 38, 1)" },
  { title: "Legal", bg: "#001026" },
];

export default function Industry() {
  return (
    <section className="py-10 ">
      {/* Section Title */}
      <SectionTitle
        weight="normal"
        size="2xl"
        className="text-center text-[36px] md:text-[40px] lg:text-[48px]"
      >
        Industries We Serve
      </SectionTitle>

      {/* Industry List */}
      <div className="flex flex-wrap border border-secondary mt-10  overflow-hidden">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`
              flex-1
              min-w-[150px] sm:min-w-[200px] 
              h-[100px] sm:h-[120px] 
              flex justify-center items-center 
              text-white text-[20px] sm:text-[24px] 
              ${index !== industries.length - 1 ? "border-r border-secondary sm:border-r" : ""}
              `}
            style={{ backgroundColor: index % 2 === 0 ? industry.bg : "" }}
          >
            <p>{industry.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
