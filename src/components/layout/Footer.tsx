export default function Footer() {
  return (
    <footer className="bg-[#cf4a21] px-4 md:px-8 mt-10 h-[5cm] shrink-0">
      <div className="max-w-6xl mx-auto w-full pt-8 md:pt-10 h-full flex flex-col">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 gap-4 md:gap-0">

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <a href="#" className="text-white text-xs md:text-sm font-semibold hover:underline">
              Help & contact us
            </a>
            <a href="#" className="text-white text-xs md:text-sm font-semibold hover:underline">
              Terms of use
            </a>
            <a href="#" className="text-white text-xs md:text-sm font-semibold hover:underline">
              Privacy
            </a>
            <a href="#" className="text-white text-xs md:text-sm font-semibold hover:underline">
              About this site
            </a>
          </div>

          {/* Language Switch */}
          <div className="flex gap-6 text-white text-xs md:text-sm">
            <span className="font-semibold cursor-pointer">English</span>
            <span className="font-semibold cursor-pointer">中文</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/40 pt-6">
          <span className="text-white text-xs md:text-sm">
            © New Zealand Government.
          </span>
        </div>

      </div>
    </footer>
  );
}
