import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "odéve beauty | 반영구 시술 전문 스튜디오",
  description: "눈썹문신, 아이라인, 입술문신, 속눈썹 펌 전문 스튜디오 odéve beauty. 자연스럽고 세련된 반영구 시술.",
  keywords: "반영구, 눈썹문신, 아이라인, 입술문신, 속눈썹펌, odeve beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
