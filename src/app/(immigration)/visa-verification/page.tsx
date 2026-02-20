import Breadcrumbs from "@/src/components/layout/Breadcrumbs";
import VisaVerification from "@/src/components/visa-verification/VisaVerification";

export default function VisaPage() {
  return (
    <>
     <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "VisaView", href: "#" },
          { label: "Visa Verification Result" },
        ]}
      />

    <VisaVerification />
    </>
  );
}
