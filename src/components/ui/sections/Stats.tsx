"use client";

interface StatsProps {
  value: string | number;
  text: string;
}

const StatsBlock = ({ value, text }: StatsProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[300px] text-center text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
        <div className="w-64 h-px bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
      </div>

      {/* Main Content */}
      <div className="mt-16">
        <h2 className="text-6xl font-bold text-blue-500">{value}</h2>
        <p className="mt-2 text-sm text-gray-300">{text}</p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-10 flex items-center justify-center w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />

        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
        <div className="w-64 h-px bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />

        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-500/40 to-blue-500 shadow-[0_0_10px_#3b82f6]/40" />
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <>
      <StatsBlock value="100K" text="of dreams that come true in reality." />
    </>
  );
};

export default Stats;
