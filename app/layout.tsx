import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import Head from "next/head";
import ThemeProvider from "./ThemeProvider";
import { EdgeStoreProvider } from "./edgestore";
import NextAuthProvider from "./NextAuthProvider";

const inter = localFont({ src: "../public/fonts/Gandom-FD.woff2" });

export const metadata: Metadata = {
  title: "موزیک اوشن",
  description: "وب اپلیکیشن دانلود موزیک های ایرانی و خارجی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula" dir="rtl" className=" max-w-full ">
      <body className={inter.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <EdgeStoreProvider>
              <Navbar />
              <main className="container my-5 px-4">{children}</main>
            </EdgeStoreProvider>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
