import Breadcrumbs from "@/src/components/layout/Breadcrumbs";
import VisaContent from "@/src/components/visa/VisaContent";

export default function VisaPage() {
  return (
    <>
     <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "VisaView", href: "#" },
          { label: "Visa Verification Enquiry" },
        ]}
      />

    <VisaContent />
    </>
  );
}
