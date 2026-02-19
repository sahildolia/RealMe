export default function LoginSection() {
  return (
    <main className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="flex-1 md:pr-12 border-b md:border-b-0 md:border-r border-gray-300 pb-10 md:pb-0">

          <h1 className="text-2xl md:text-[32px] font-light mb-3 text-gray-900">
            Log in with{" "}
            <span className="text-[#cf4a21] font-bold">
              RealMe
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-[15px] mb-8">
            You've been redirected here so you can log in with RealMe
          </p>

          <form className="space-y-4 max-w-[480px]">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3.5 bg-[#f0f0f0] border border-[#d0d0d0] rounded-full text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3.5 bg-[#f0f0f0] border border-[#d0d0d0] rounded-full text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#cf4a21] hover:bg-[#b8401c] text-white font-semibold pl-5 pr-10 py-3.5 rounded-full transition-colors text-[15px] min-w-[200px]"
            >
              Log in
            </button>
          </form>

          <div className="mt-5 text-sm">
            <a href="#" className="text-[#cf4a21] hover:underline">
              Forgot Username
            </a>
            <span className="text-gray-500 mx-2">or</span>
            <a href="#" className="text-[#cf4a21] hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 md:pl-12 pt-10 md:pt-0">

          <h2 className="text-2xl md:text-[32px] font-light mb-3 text-gray-900">
            Create a{" "}
            <span className="text-[#cf4a21] font-bold">
              RealMe
            </span>{" "}
            login
          </h2>

          <p className="text-gray-600 text-[15px] mb-3">
            To access this service you need a RealMe login.
          </p>

          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-[480px]">
            You'll be able to access a range of services with a single username and password. RealMe is designed to protect your privacy and security.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#cf4a21] hover:bg-[#b8401c] text-white font-semibold pl-5 pr-10 py-3.5 rounded-full transition-colors text-[15px] min-w-[260px]">
            Create a RealMe login
          </button>
        </div>

      </div>
    </main>
  );
}
