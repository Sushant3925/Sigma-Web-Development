import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Camponent/Navbar";
import Application from "@/Camponent/Application";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Share Your thoughts by Blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className='flex gap-3 p-3 bg-slate-300 text-black '/>
        {children}
        <Application className=' gap-3 p-3 bg-slate-300 text-black '/>
        </body>
    </html>
  );
}
