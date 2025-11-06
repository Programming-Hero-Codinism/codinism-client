import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="px-12 border-t-4 border-primary py-4 border-b-[#003570] border-b-1">
        {/* section logo */}
        <section>
          <Image src="/logos/Logo.png" width={200} height={96} alt="Company logo" />
        </section>
        {/* section menu */}
        <section></section>
        {/* section button */}
        <section></section>
      </nav>
    </>
  );
}
