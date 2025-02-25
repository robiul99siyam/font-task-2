import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "tour buddy",
  description: "Generated by create next app",
};

export const lnter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lnter.className}>
        <Navbar />
        <div className="flex flex-col px-5 py-5 lg:px-20 lg:py-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
