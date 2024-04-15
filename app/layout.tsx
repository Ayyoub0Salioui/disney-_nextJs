"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import LoginNavbar from "./components/LoginNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {path !== "/login" ? <Navbar /> : <LoginNavbar />}
        {children}
      </body>
    </html>
  );
}
