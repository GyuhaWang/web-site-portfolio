'use client'
import type { Metadata } from "next";
import "./globals.css";
import { RecoilRoot } from "recoil";



// export const metadata: Metadata = {
//   title: "gyuha protfolio",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body >   <RecoilRoot>{children}</RecoilRoot></body>
    </html>
  );
}
