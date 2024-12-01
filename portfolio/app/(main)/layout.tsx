import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="">
      
        {/* <div className="relative"> */}
            {/* <Header /> */}
            <Navbar />
        {/* </div> */}
        <div className="min-h-screen">
        {children}
        </div>
        <Footer />

    </div>
  );
}
