import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import BackLinkBar from "../components/layout/BackLinkBar";
import Footer from "../components/layout/Footer";
export const metadata: Metadata = {
  title: "RealMe",
  description: "RealMe Login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

