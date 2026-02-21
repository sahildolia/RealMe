"use client";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { countryList } from "@/src/lib/countries";
import { useRouter } from "next/navigation";


export default function VisaContent() {
  const dateRef = useRef<HTMLInputElement>(null);
  const visaStartRef = useRef<HTMLInputElement>(null);


  const [user, setUser] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [nationality, setNationality] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [visaStartDate, setVisaStartDate] = useState("");


  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(storedUser.toUpperCase());
    }
  }, []);
  const router = useRouter();

const handleCheckVisa = (e: React.FormEvent) => {
  e.preventDefault();

  const visaData = {
    familyName,
    nationality,
    passportNumber,
    dob,
    gender,
    visaStartDate,
  };

  localStorage.setItem("visaFormData", JSON.stringify(visaData));

  router.push("/visa-verification");
};
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-52 shrink-0 bg-[#E6F5FA] border-r border-gray-200 pt-6 pb-8 px-5">
          <h2 className="text-[#2999CC] font-bold text-sm mb-5">
            VisaView
          </h2>

          <nav className="space-y-3 text-xs">
            {[
              "Register Organisation",
              "Verify Visa Record",
              "My Visa Verification Service Account",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-gray-900 cursor-pointer hover:underline"
              >
                <span>›</span>
                <span>{item}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN FORM AREA */}
        <main className="flex-1 bg-white pt-6 pb-10 px-4 md:px-8">

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
            Visa Verification Enquiry
          </h1>

          <p className="text-gray-700 text-sm mb-1">
            Enter the details of the visa to be verified.
          </p>

          <p className="text-gray-500 text-sm mb-5">
            Please enter these details exactly as they appear in the visa holder's current passport.
          </p>

          <div className="mb-5 text-right">
            <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">
              Can't find your visa?
            </a>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleCheckVisa}>

            <div className="grid grid-cols-1 sm:grid-cols-[180px_auto] items-start sm:items-center gap-y-2 gap-x-4">

              {/* Family Name */}
              <label className="text-sm font-semibold text-gray-800">
                Family Name <span className="text-red-600">*</span>
              </label>
              <input
              value={familyName}
  onChange={(e) => setFamilyName(e.target.value)}
                type="text" required
                className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full sm:w-60"
              />

              {/* Passport Nationality */}
              <label className="text-sm font-semibold text-gray-800">
                Passport Nationality <span className="text-red-600">*</span>
              </label>

              <select required
               value={nationality}
  onChange={(e) => setNationality(e.target.value)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white w-full sm:w-60"
              >
                <option value="">Select Nationality</option>

                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {/* Passport Number */}
              <label className="text-sm font-semibold text-gray-800">
                Passport Number <span className="text-red-600">*</span>
              </label>
              <input required
                value={passportNumber}
  onChange={(e) => setPassportNumber(e.target.value)}
                type="text"
                className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full sm:w-32"
              />

              {/* Date of Birth */}
              <label className="text-sm font-semibold text-gray-800">
                Date of Birth
                <br />
                <span className="text-xs font-normal text-gray-500" >
                  dd/mm/yyyy
                </span>
                <span className="text-red-600">*</span>
              </label>

              {/* <div className="flex gap-1">
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-32"
      />
      <button
        type="button"
        className="px-2 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 text-gray-500"
      >
        📅
      </button>
    </div> */}
              <div className="flex gap-1">
                <input
                  ref={dateRef}
                    value={dob}
  onChange={(e) => setDob(e.target.value)}
                  required
                  type="date"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-40"
                />

                <button
                  type="button"
                  onClick={() => dateRef.current?.showPicker()}
                  className="px-2 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 text-gray-500"
                >
                  📅
                </button>
              </div>

              {/* Gender */}
              <label className="text-sm font-semibold text-gray-800">
                Gender <span className="text-red-600">*</span>
              </label>
              <select required 
                value={gender}
  onChange={(e) => setGender(e.target.value)}className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white w-full sm:w-32">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>

              {/* Visa Start Date */}
              <label className="text-sm font-semibold text-gray-800">
                Visa Start Date
                <br />
                <span className="text-xs font-normal text-gray-500" >
                  dd/mm/yy
                </span>
                <span className="text-red-600">*</span>
              </label>

              <div className="flex gap-1">
                <input
                  value={visaStartDate}
  onChange={(e) => setVisaStartDate(e.target.value)}
                  required
                  ref={visaStartRef}
                  type="date"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-32"
                />

                <button
                  type="button"
                  onClick={() => visaStartRef.current?.showPicker()}
                  className="px-2 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 text-gray-500"
                >
                  📅
                </button>
              </div>

            </div>

            {/* Consent */}
            <div className="flex items-center gap-2 mt-6">
              <input type="checkbox" className="rounded border-gray-300" />
              <label className="text-sm text-gray-700">
                The visa holder has consented to this check.
              </label>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#2999CC] hover:bg-[#1a80b3] text-white px-6 py-2 rounded font-medium text-sm"
              >
                Check Visa
              </button>
            </div>

          </form>

          {/* Bottom Links Section */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
              <span className="font-semibold">newzealand.govt.nz</span>

              <span className="text-gray-400">|</span>
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

        </main>
      </div>
    </div>
  );
}
