import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MMPP | Mascot Mellow Power Project",
    template: "%s | Mascot Mellow Power Project",
  },
  description:
    "Engineering, infrastructure and technology solutions spanning electrical works, civil construction, and Industry 4.0 innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
