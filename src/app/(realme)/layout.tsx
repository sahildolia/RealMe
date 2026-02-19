import Navbar from "@/src/components/layout/Navbar";
import BackLinkBar from "@/src/components/layout/BackLinkBar";
import Footer from "@/src/components/layout/Footer";

export default function RealMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <BackLinkBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
