// import VisaPageOne from "./VisaPageOne";
// import VisaPageTwo from "./VisaPageTwo";

// export default function VisaApprovalPdf({ visaData }: any) {
//   if (!visaData) return null;

//   return (
//     <>
//       <VisaPageOne visaData={visaData} />
//       <VisaPageTwo visaData={visaData} />
//     </>
//   );
// }
import VisaPageOne from "./VisaPageOne";
import VisaPageTwo from "./VisaPageTwo";

export default function VisaApprovalPdf({ visaData }: any) {
  return (  <>
  <VisaPageOne visaData={visaData} />;
  <VisaPageTwo visaData={visaData} />;
  
  </>
  )
}