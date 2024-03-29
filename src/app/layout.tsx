import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = VT323({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Data Doodle by Chrismo",
  description: "A collection of small data doodles by Chrismo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <ToastContainer position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
