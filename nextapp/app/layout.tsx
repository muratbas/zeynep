import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeynep'i Çoook Seviyorum ♡",
  description:
    "26 Mart'tan bu yana yaşadığımız her anı, melodiyi ve gülüşü sakladığım yer. Seni çok seviyorum Zeynep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`scroll-smooth ${notoSerif.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        {/* Material Symbols — next/font desteklemediği için <link> ile yüklüyoruz */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`bg-[#fff9f0] text-[#1d1b16] overflow-x-hidden ${plusJakartaSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
