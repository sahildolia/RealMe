import ImmigrationHeader from "@/src/components/layout/ImmigrationHeader";

export default function ImmigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ImmigrationHeader />
    <div className="w-[65%] mx-auto">
        {children}
      </div>
    </>
  );
}
