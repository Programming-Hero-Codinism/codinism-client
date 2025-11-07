import { SectionTitle } from "@/components/custom";
import { Button } from "../button";

export default function Banner() {
  return (
    <>
      <div
        className="relative w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: "url('/layer/banner_layer.png')",
          backgroundPosition: "center top 160px",
          filter: "brightness(120%)",
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

          <p className="text-[20px] mt-6 font-normal">
            We don’t just write code — we become your product partner, shaping your vision into a
            real, scalable solution. Every project we take on is crafted with care, precision, and
            pride, so your success is our shared mission.
          </p>
          <div className="mt-12">
            <Button className="rounded-full h-12 font-normal w-[140px] shadow-[inset_0_0_4px_1px_rgba(176,209,254,0.6)]">
              Lets Talk
            </Button>

            <Button className="rounded-full h-12 w-[140px] bg-secondary hover:bg-secondary font-normal ml-4">
              See Service
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
