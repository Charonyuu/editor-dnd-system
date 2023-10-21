import HomeNavbar from "@/app/home/Navbar";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <HomeNavbar />

      <div className="min-h-screen min-w-screen pt-[50px] flex flex-col">{children}</div>
    </section>
  );
}
