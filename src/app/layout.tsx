import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/app/Navbar";
import Footer from "./Footer";
import ReactQueryProvider from "./ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

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
      <link rel="icon" href="/favicon.ico" />
      <body>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="default"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Navbar/>
            <div className="min-h-[50vh]">{children}</div>
            <Footer/>
          </ThemeProvider>
        </ReactQueryProvider>
        <Toaster/>
      </body>
    </html>
  );
}
