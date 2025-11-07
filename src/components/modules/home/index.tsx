import Adventure from "@/components/ui/sections/Adventure";
import Banner from "@/components/ui/sections/Banner";
import Industry from "@/components/ui/sections/Industry";
import WeKnow from "@/components/ui/sections/Weknow";

export default function HomePage() {
  return (
    <>
      <div className="">
        <Banner />
        <Industry />
        <WeKnow />
        <Adventure />
      </div>
    </>
  );
}
