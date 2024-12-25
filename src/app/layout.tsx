import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/Navbar";
import Footer from "./Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Zucchero Mania Shop",
    absolute: "Zucchero Mania Shop"
  },
  description: "Zucchero Mania Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lora.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
