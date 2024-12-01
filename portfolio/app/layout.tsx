import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaleb Asratemedhin | Fullstack Developer",
  icons: {
    icon: '/logo-2-lines.ico'

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

      </body>
    </html>
  );
}
