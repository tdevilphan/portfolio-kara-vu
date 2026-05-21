import type { Metadata } from "next";
import { ClarityScript } from "@/components/clarity-script";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vu Thi Bich Ngoc - Marketing Specialist",
  description:
    "Portfolio of Vu Thi Bich Ngoc, a Marketing Specialist focused on brand, content, performance marketing, CRM/email, and strategy.",
  openGraph: {
    title: "Vu Thi Bich Ngoc - Marketing Specialist",
    description:
      "Portfolio of Vu Thi Bich Ngoc, a Marketing Specialist focused on brand, content, performance marketing, CRM/email, and strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
        <ClarityScript />
      </body>
    </html>
  );
}
