import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import { siteContent } from "./content";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${siteContent.brand.studio} | 반영구 시술 전문 스튜디오`,
  description: siteContent.brand.description,
  keywords: "오드브 뷰티, 반영구, 눈썹문신, 아이라인, 입술문신, 속눈썹펌",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
