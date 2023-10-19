import Navbar from "@/app/home/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />

      <div className="pt-[50px]">{children}</div>
    </section>
  );
}