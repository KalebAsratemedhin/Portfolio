'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionIndicator from "../components/SectionIndicator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="relative">
      <Navbar />
      <SectionIndicator />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
