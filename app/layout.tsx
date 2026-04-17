import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Nayaab Anwar",
  description: "Portfolio of Nayaab Anwar, a designer and creative based focusing on meaningful, purpose-driven work.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Nayaab Anwar",
    description: "Portfolio of Nayaab Anwar, a designer and creative focusing on meaningful, purpose-driven work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
