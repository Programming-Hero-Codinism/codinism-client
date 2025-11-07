import Image from "next/image";

export default function GenyoraSection() {
  return (
    <>
      <section className="relative w-full py-24 flex flex-col items-center justify-center text-white z-[1] bg-black ">
        {/* Main image */}
        <div className="relative rounded-3xl border-8 border-secondary p-2 shadow-[0_0_30px_rgba(0,122,255,0.3)] bg-gradient-to-b from-[#c8f1d3] to-white w-[80%] max-w-5xl overflow-hidden">
          <Image
            src="/layer/zenoyra.png"
            alt="Genyora UI"
            width={1920}
            height={1080}
            className="rounded-2xl"
          />
        </div>
        <div className="relative">
          {/* Centered Responsive Text */}
          <div className="absolute w-full flex justify-center">
            <p className="text-center text-xl mt-6 leading-relaxed md:text-2xl">
              With codinism, Genyora <br /> just brought to life
            </p>
          </div>

          <div
            className="relative max-w-5xl h-40 mt-2 pointer-events-none select-none overflow-hidden"
            style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)" }}
          >
            <Image
              src="/layer/zenoyra.png"
              alt="Reflection"
              width={1920}
              height={1080}
              className="scale-y-[-1] object-cover opacity-50 rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center min-h-[300px] text-center text-white overflow-hidden">
        {/* Top border & Dots  */}
        <div className="absolute top-10 flex items-center justify-center ">
          {/* Left dot */}
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          {/* Center line */}
          <div className="w-64 h-px bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
          {/* Right dot */}
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
        </div>

        {/*  Text */}
        <div className="mt-16">
          <h2 className="text-6xl font-bold text-blue-500">100K</h2>
          <p className="mt-2 text-sm text-gray-300">
            of dreams that come true <br /> in reality.
          </p>
        </div>

        {/* Bottom border & dots */}
        <div className="absolute bottom-10 flex items-center justify-center w-full">
          {/* Left gradient */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />
          {/* Left dot */}
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          {/* Center line */}
          <div className="w-64 h-px bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
          {/* Right dot */}
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          {/* Right gradient */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />
        </div>
      </section>
    </>
  );
}
