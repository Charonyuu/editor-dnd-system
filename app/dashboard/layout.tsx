import DashboardNavbar from "./Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <DashboardNavbar />

      <div className="pt-[50px]">{children}</div>
    </section>
  );
}
