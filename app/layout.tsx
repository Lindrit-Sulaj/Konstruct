import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const monaSans = localFont({ src: './Mona-Sans.woff2' })

export const metadata: Metadata = {
  title: "Konstruction",
  description: "Consstruction company template by Lindrit Sulaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monaSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
