import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./api/auth/[...nextauth]/auth-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codaiq",
  description: "Codaiq is an advanced AI-powered website builder designed to simplify the process of creating, customizing, and publishing websites.",
  keywords: ["website builder", "AI", "no-code", "website creation", "Codaiq"],
  authors: [{ name: "Codaiq Team" }],
  openGraph: {
    title: "Codaiq - AI-Powered Website Builder",
    description: "Build beautiful websites effortlessly with Codaiq's AI-powered builder.",
    url: "https://codaiq.com",
    siteName: "Codaiq",
    images: [
      {
        url: "https://codaiq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codaiq website builder preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider session={session}>
          <Navbar />
          <Toaster richColors position="top-right" />
            {children}
             <Footer />
        </AuthProvider>

      </body>
    </html>
  );
}