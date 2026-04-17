import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bully No More!: Case Study | Nayaab Anwar",
  description: "Website design and UX for Bully No More! The Musical, an arts-based programme helping children understand and respond to bullying.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
