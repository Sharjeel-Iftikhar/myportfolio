import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharjeel Ahmad | Portfolio",
  description: "Portfolio",
  icons: {
    icon: {
      url: "/assets/logo2.png",
    },
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}  >
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
