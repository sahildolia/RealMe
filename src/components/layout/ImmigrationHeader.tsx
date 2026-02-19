import Image from "next/image";

export default function ImmigrationHeader() {
  return (
    <header className="bg-[#2999CC] text-white h-28 sm:h-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto h-full flex justify-between items-end pb-2 w-[65%] mx-auto">
        
        <div className="flex items-end gap-4 h-full pb-2">
          <Image
            src="/Screenshot_2026-02-10_222634.png"
            alt="Immigration New Zealand"
            width={300}
            height={100}
            className="h-20 sm:h-24 w-auto object-contain"
            priority
          />
        </div>

        <button className="text-white text-xs sm:text-sm hover:underline font-medium">
          Contact us
        </button>
      </div>
    </header>
  );
}
