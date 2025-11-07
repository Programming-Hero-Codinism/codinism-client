import Adventure from "@/components/ui/sections/Adventure";
import Banner from "@/components/ui/sections/Banner";
import GenyoraSection from "@/components/ui/sections/Genoyara";
import Grow from "@/components/ui/sections/Grow";
import Industry from "@/components/ui/sections/Industry";
import TechStack from "@/components/ui/sections/TechStack";
import WeKnow from "@/components/ui/sections/Weknow";

export default function HomePage() {
  return (
    <>
      <div className="">
        <Banner />
        <Industry />
        <GenyoraSection />
        <WeKnow />
        <Adventure />
        <Grow />
        <TechStack />
      </div>
    </>
  );
}
