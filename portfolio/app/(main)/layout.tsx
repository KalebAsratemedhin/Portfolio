import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="">
      
        <div className="relative">
            <Header />
        </div>
        {children}
        <Footer />

    </div>
  );
}
