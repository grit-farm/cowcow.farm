import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";

import Headers from "@/components/Headers";
import Footer from "@/components/Footer";

const IBMPlexSansKr = IBM_Plex_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COWCOW",
  description: "억지 영어 공부는 그만 신나게 게임하면서 배우는 진짜 영어",
  openGraph: {
    title: "COWCOW",
    description: "억지 영어 공부는 그만 신나게 게임하면서 배우는 진짜 영어",
    url: "http://cowcow.farm/",
    siteName: "COWCOW",
    images: [],
    locale: "ko-KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${IBMPlexSansKr.className}`}>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
