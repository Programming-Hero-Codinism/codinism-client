import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import Codinism from "../sections/Codinism";

export default function Footer() {
  return (
    <section className="overflow-hidden  md:mx-auto max-w-[1400px] mt-16 relative">
      <footer className="bg-[#000814] text-white border border-secondary ">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 border-b border-secondary">
          {/* Left Column */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-secondary">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logos/Logo.png" alt="Codinism Logo" width={259} height={48} />
              <h2 className="text-2xl font-semibold">Codinism™</h2>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We build extra-ordinary software solutions with state-of-the-art security and
              efficiency.
            </p>

            <p className="text-white font-semibold mb-3">
              Certified IT experts delivering solutions fast
            </p>

            <div className="flex items-center gap-3">
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
            </div>
          </div>

          {/* Middle Column */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-secondary grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Features</li>
                <li>How it works</li>
                <li>Services</li>
              </ul>

              <h3 className="text-gray-300 font-semibold mt-8 mb-4">Location</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                940 Goldendale Dr,
                <br />
                Wasilla, Alaska 99654,
                <br />
                USA
              </p>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Insights</li>
                <li>Careers</li>
                <li>FAQs</li>
              </ul>

              <h3 className="text-gray-300 font-semibold mt-8 mb-4">Location</h3>
              <p className="text-gray-400 text-sm">+921 3784 9812</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-10 flex flex-col justify-center items-start md:items-center">
            <h3 className="text-2xl font-semibold mb-2">Schedule a call</h3>
            <p className="text-gray-400 text-sm mb-6">Let’s work together!</p>
            <Button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg w-[70%]">
              Send a message <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 items-center text-gray-500 text-sm border-t border-gray-800 p-6">
          <p className="text-center md:text-left">All Right Reserved © Codinism - 2025</p>
          <div></div>
          <div className="flex justify-center md:justify-end gap-6">
            <span className="hover:text-gray-300 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>
        </div>
      </footer>
      {/* <div className="bg-[url('/layer/fotter-bg.png')] bg-cover bg-center   p-10">
        <Image
          src="/layer/fotter_codinism.png"
          width={1400}
          height={244}
          alt="Footer image"
          className="mx-auto"
        />
      </div> */}

      {/* bottom section */}

      <div className="relative">
        {/* Binary Animation */}
        <Codinism />

        {/* Centered on top of animation */}
        <div className="absolute top-0">
          {" "}
          <Image
            src="/layer/fotter_codinism.png"
            width={1400}
            height={244}
            alt="Footer image"
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
}
