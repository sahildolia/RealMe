"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import VisaApprovalPdf from "../visa/visa-approval/VisaApprovalPdf";
export default function VisaVerification() {
  const [user, setUser] = useState("");
  const [visaData, setVisaData] = useState<any>(null);

const { toPDF, targetRef } = usePDF({
  filename: "visa-approval.pdf",
  page: {
    margin: 10,
    format: "a4",
    orientation: "portrait",
  },
});
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const storedData = localStorage.getItem("visaFormData");
    if (storedData) {
      setVisaData(JSON.parse(storedData));
    }
    if (storedUser) {
      setUser(storedUser.toUpperCase());
    }
  }, []);
  const router = useRouter();
const handleDownload = () => {
  window.print();
};
  return (
    <div className="shadow-2xl">

      <div className="flex justify-center ">
        <div className="max-w-6xl w-full flex flex-col md:flex-row">

          {/* SIDEBAR */}
          <aside className="hidden md:block w-52 shrink-0 border-r border-gray-200 pt-6 pb-8 px-5 " style={{backgroundColor: "rgb(230 245 250)"}}>
            <h2 className="text-[#2999CC] font-bold text-sm mb-5">
              VisaView
            </h2>

            <nav className="space-y-3 text-xs gry_clr">
              {[
                "Register Organisation",
                "Verify Visa Record",
                "My Visa Verification Service Account",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-900 cursor-pointer hover:underline"
                >
                  <span>

                    <svg
                      className="w-3 h-3 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 5l6 5-6 5V5z" />
                    </svg>

                  </span>
                  <span className="gry_clr">{item}</span>
                </div>
              ))}
            </nav>
          </aside>

          {/* MAIN FORM AREA */}
          <main className="flex-1 bg-white pt-6 pb-10 px-4 md:px-8 shadow-xl">

            {/* Acting / Logged In */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="border border-gray-300 px-4 py-3 bg-gray-50 flex-1 text-xs">
                Acting for:
                <span className="font-semibold text-gray-800">
                  Visa Verification Service
                </span>
              </div>

              <div className="border border-gray-300 px-4 py-3 bg-gray-50 flex-1 text-xs sm:text-right">
                Logged in as:
                <span className="font-semibold text-gray-800">
                  {user}
                </span>
                <button className="ml-2 text-blue-600 hover:underline"
                  onClick={() => {
                    localStorage.removeItem("loggedInUser");
                    router.push("/");
                  }}>
                  logout
                </button>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-[#2999CC] text-xl md:text-2xl font-bold mb-3">
              Visa Verification Result
            </h1>



            {/* <div className="mb-5 text-right">
            <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">
              Can't find your visa?
            </a>
          </div> */}

            {/* RESULT SECTION */}
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">

              {/* Result Intro */}
              <h2 className="font-semibold text-gray-800 mb-2">
                Result
              </h2>

              <p className="mb-3">
                The visa has been verified successfully using the details you provided.
                See below for the full conditions of the visa.
              </p>

              <p className="mb-3">
                Visa Verification Service checks are valid for the date stated on the enquiry result.
                Visa information may change.
              </p>

              <p className="mb-6">
                All dates given are in New Zealand time. Where a person is not yet in New Zealand,
                any visa they hold may be subject to the grant of entry permission.
              </p>

<div id="visa-result" className="mt-5">
              {/* Visa Details */}
              <h3 className="font-semibold text-gray-800 mb-3">
                Visa Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 gap-x-6 text-sm mb-1">

                <div className="text-gray-600">Family, First Name</div>
                <div className="text-gray-900 blue_txt_clr">{visaData?.familyName}</div>
                <div className="text-gray-600">Visa Type</div>
                <div className="text-gray-900 blue_txt_clr">Work</div>

                <div className="text-gray-600">Date of Birth</div>
                <div className="text-gray-900 blue_txt_clr">{visaData?.dob}</div>
                <div className="text-gray-600">Visa Start Date</div>
                <div className="text-gray-900 blue_txt_clr">{visaData?.visaStartDate}</div>

                <div className="text-gray-600">Gender</div>
                <div className="text-gray-900 blue_txt_clr">{visaData?.gender}</div>
                <div className="text-gray-600">First Entry Before</div>
                <div className="text-gray-900 blue_txt_clr">Not applicable</div>

                <div className="text-gray-600">Passport Nationality</div>
                <div className="text-gray-900 blue_txt_clr">{visaData?.nationality}</div>
                <div className="text-gray-600">Number of Entries</div>
                <div className="text-gray-900 blue_txt_clr">Multiple</div>

                <div className="text-gray-600">Passport Number</div>
                <div className="text-gray-900 blue_txt_clr">{visaData?.passportNumber}</div>
                <div className="text-gray-600">Expiry Date Travel</div>
                <div className="text-gray-900 blue_txt_clr">2026-02-10</div>

                <div className="text-gray-600">INZ Client Number</div>
                <div className="text-gray-900 blue_txt_clr">79965248</div>
                <div className="text-gray-600">Visa Expiry</div>
                <div className="text-gray-900 blue_txt_clr">2026-02-10</div>

                <div>

                  <div className="text-gray-600 sm:col-span-1">
                    Visa Conditions
                  </div>

                  <div className="text-gray-900 col-span-3 leading-relaxed blue_txt_clr" style={{ width: "450%", maxWidth: "500%" }}>
                    Financial support evidence not required. May not be placed in a triangular employment arrangement with a controlling third party. Must be paid at or above $32.00 per hour. Must provide evidence of remuneration if requested. Return/onward ticket not required. Stay subject to grant of entry permission. The holder may only work as Farm Hand in Tokoroa for CAMIA FARMING. The holder of this visa must comply with any instruction from a Medical Officer of Health which relates to a notifiable or quarantinable disease. The holder of this visa must comply with any order made under section 11 of the COVID-19 Public Health Response Act 2020. The holder of this visa must comply with any order made under section 70 of the Health Act 1956 and listed in schedule 2 of the COVID-19 Public Health Response Act 2020.
                  </div>
                </div>

              </div>
              </div>


              {/* Enquiry Date */}
              <div className="mb-2">
                <div className="text-gray-600">Enquiry Date</div>
                <div className="text-gray-900">23/10/2024</div>

                <div className="text-gray-600 mt-2">Valid as at</div>
                <div className="text-gray-900">23/10/2024</div>
              </div>

              {/* Warning */}
              <p className="text-xs text-gray-600 mb-6">
                <span className="font-semibold">Warning:</span> If you download this visa information,
                you must ensure that you treat the personal information it contains in accordance
                with the Privacy Act 2020, including with respect to storage, access, disclosure
                to third parties, retention and disposal.
              </p>

              {/* Download Button */}
              {/* <button  onClick={handleDownload} className="bg-[#2999CC] hover:bg-[#1a80b3] text-white px-5 py-2 rounded text-sm font-medium">
                Download Result
              </button> */}

{/* <button
  onClick={() =>
    
  { 
    console.log("visaData", visaData);
    toPDF()}
  
  }
  className="bg-[#2999CC] hover:bg-[#1a80b3] text-white px-5 py-2 rounded text-sm font-medium"
>
  Download Result
</button> */}
<button
  onClick={async () => {
    try {
      console.log("targetRef", targetRef.current);

      await toPDF();

      console.log("PDF SUCCESS");
    } catch (error) {
      console.error("PDF ERROR", error);
    }
  }}
  className="bg-[#2999CC] hover:bg-[#1a80b3] text-white px-5 py-2 rounded text-sm font-medium"
>
  Download Result
</button>

              {/* Questions Link */}
              <div className="mt-4">
                <a href="#" className="text-sm text-black-600 underline">
                  Questions about this result?
                </a>
              </div>

            </div>
          </main>
        </div>
      </div>
      {/* Bottom Links Section */}
{/* Bottom Links Section */}
<div className="pt-4 pb-4 border-t border-gray-200">
  <div className="flex flex-wrap items-center  text-xs text-gray-600">

    {/* Left Side */}
    <span className="font-bold text-sm w-52 text-center">
      newzealand.govt.nz
    </span>

    {/* Right Side */}
    <div className="flex flex-wrap items-center gap-2">
      <a href="#" className="hover:underline">
        About us
      </a>

      <span className="text-gray-400">|</span>

      <a href="#" className="hover:underline">
        Legal
      </a>

      <span className="text-gray-400">|</span>

      <a href="#" className="hover:underline">
        Complaints
      </a>

      <span className="text-gray-400">|</span>

      <a href="#" className="hover:underline">
        Terms & Conditions
      </a>
    </div>

  </div>
</div>

<div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: -1,
    pointerEvents: "none",
  }}
>
<div ref={targetRef}>
  <VisaApprovalPdf visaData={visaData} />
</div>
</div>

    </div>
  );
}
