import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "EventWave",
  description: "EventWave is an event management application",
  // icons: {
  //   icon: '/assets/images/logo.svg'
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={rubik.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
