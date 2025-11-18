import Adventure from "@/components/ui/sections/Adventure";
import Banner2 from "@/components/ui/sections/Banner2";
import Contribution from "@/components/ui/sections/Contribution";
import GenyoraSection from "@/components/ui/sections/Genoyara";
import Grow from "@/components/ui/sections/Grow";
import Industry from "@/components/ui/sections/Industry";
import TechStack from "@/components/ui/sections/TechStack";
import WeKnow from "@/components/ui/sections/Weknow";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" />

          <Image
            src="/layer/angel.png"
            alt="Blue angled glow"
            width={1400}
            height={700}
            className="
      absolute 
      -top-40
      left-[80%] 
      -rotate-16
      -translate-x-1/2 
      w-[2000px]
      h-[580px]
      md:-top-52
      lg:-top-60
    "
          />
        </div>

        {/* Hero + Sections */}
        {/* <Banner /> */}
        <Banner2 />
      </div>

      <Industry />
      <GenyoraSection />
      <WeKnow />
      <Contribution />
      <Adventure />
      <Grow />

      <TechStack />
    </>
  );
}
