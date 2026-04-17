import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fortuna Insights: Case Study | Nayaab Anwar",
  description: "Product website design and visual direction for Fortuna Insights, an AI-powered legal research platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
