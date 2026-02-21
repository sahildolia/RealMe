export default function BackLinkBar() {
  return (
    <div className="bg-[#e8e8e8]">
      <div className="max-w-6xl mx-auto px-8 py-3">
        <a
          href="#"
          className="text-sm text-gray-700 hover:underline flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-circle text-gray-500 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="M16 12H8"></path><path d="m12 8-4 4 4 4"></path></svg>
          Go back to the Ministry of Business, Innovation and Employment
        </a>
      </div>
    </div>
  );
}
