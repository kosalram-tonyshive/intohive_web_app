import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntoHive — Transform Your Space",
  description: "Architecture & interior design studio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
