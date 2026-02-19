import Image from "next/image";

export default function Navbar() {
return (
  <div className="bg-black text-white">
    <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

      <Image
        src="/RealMe_logo.png"
        alt="Logo"
        width={500}
        height={200}
        className="h-[110px] w-auto"
        priority
      />

      <div className="flex items-center gap-2 sm:gap-3">
        <Image
          src="/silver_fern_flag.svg-removebg-preview.png"
          alt="Silver Fern"
          width={48}
          height={48}
          className="h-8 sm:h-12 w-auto brightness-0 invert"
        />

        <div className="text-white text-right leading-tight">
          <div className="font-bold text-[10px] sm:text-sm tracking-wider">
            NEW ZEALAND
          </div>
          <div className="text-[8px] sm:text-xs tracking-wider">
            IMMIGRATION
          </div>
        </div>
      </div>

    </div>
  </div>
);

}
