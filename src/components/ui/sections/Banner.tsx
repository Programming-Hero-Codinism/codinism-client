import { SectionTitle } from "@/components/custom";

export default function Banner() {
  return (
    <section
      className="relative w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: "url('/layer/banner_layer.png')",
        backgroundPosition: "center top 160px",
      }}
    >
      <div className="relative max-w-3xl w-full text-center px-6 text-white">
        <SectionTitle
          size="2xl"
          variant="centered"
          className="leading-tight text-[56px] md:text-[80px]"
        >
          From idea to reality fast with AI.
        </SectionTitle>

        <p className="text-[20px] mt-6">
          We don’t just write code — we become your product partner, shaping your vision into a
          real, scalable solution. Every project we take on is crafted with care, precision, and
          pride, so your success is our shared mission.
        </p>
      </div>
    </section>
  );
}
