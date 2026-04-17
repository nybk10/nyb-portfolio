import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sriram Emani: Case Study | Nayaab Anwar",
  description: "Portfolio website design for Sriram Emani, actor, singer, and dancer based in Hollywood.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
