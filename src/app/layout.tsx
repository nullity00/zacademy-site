import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electisec (previously yAcademy & yAudit)",
  description: "ZK & Smart Contract Security",
  keywords:
    "Electisec, Zero Knowledge, Smart Contract Security, Blockchain Security, Ethereum, Cryptography",
  referrer: "origin",
  creator: "Electisec Team",
  robots: "follow, index",
  openGraph: {
    type: "website",
    url: "https://electisec.tech",
    title: "Electisec (previously yAcademy & yAudit)",
    description: "ZK & Smart Contract Security",
    siteName: "Electisec",
    images: [
      {
        url: "https://electisec.tech/logo.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@electisec",
    creator: "@electisec",
    images: "https://electisec.tech/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <GoogleTagManager gtmId="G-NZNG2YQNTY" />
      <body className={""}>{children}</body>
    </html>
  );
}
