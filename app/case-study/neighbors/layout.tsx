import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neighbors Immigration Clinic: Case Study | Nayaab Anwar",
  description: "Brand identity and visual system for Neighbors Immigration Clinic, making legal support clearer and more accessible for immigrant communities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
