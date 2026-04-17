import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style AI: Case Study | Nayaab Anwar",
  description: "UX/UI design for Style AI, an AI-driven mobile app for personalised outfit planning and wardrobe management.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
