import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/layout/header/header";
import { Footer } from "@/layout/footer/footer";
import { Main } from "@/layout/main/main";
import { ToastContainer } from "react-toastify";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap", // Recommended for performance
});

const montserrat = Montserrat({
  subsets: ["latin"], // Specify the character subsets you need
  variable: "--font-montserrat", // Optional: Define a CSS variable for Tailwind CSS or custom CSS
  display: "swap", // Recommended for better performance
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Africima | African Creative and Intellectual Minds Arena ",
  description:
    "Africima is a business development firm leveraging creativity and innovation to deliver sustainable, efficient solutions across sectors in Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ minWidth: "320px" }}
        className={` ${geistMono.variable} ${geistSans.variable} ${montserrat.variable} ${roboto.variable}`}
      >
        {/* <SpeedInsights /> */}
        <Header />
        <Main>{children}</Main>
        <ToastContainer position="top-right" autoClose={3000} />

        <Footer />
      </body>
    </html>
  );
}
