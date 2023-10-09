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
  title: "카우카우 - 게임하며 배우는 즐거운 영어 회화",
  description: "게임하며 배우는 즐거운 영어 회화",
  openGraph: {
    title: "카우카우 - 게임하며 배우는 즐거운 영어 회화",
    description: "게임하며 배우는 즐거운 영어 회화",
    url: "https://cowcow.farm/",
    siteName: "카우카우 - 게임하며 배우는 즐거운 영어 회화",
    images: ["https://cowcow.farm/images/og.png"],
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
