import type { Metadata } from "next";
import { Inter, Noto_Serif_Myanmar } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="h-[calc(100vh-70px)] md:h-[calc(100vh-80px)] main-box">
            {children}
          </main>
          <ToastContainer position="bottom-left" autoClose={2000} />
        </body>
      </html>
    </ClerkProvider>
  );
}
