import { ReactNode } from "react";

export default function LpLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen bg-primary-300">
      {children}
    </main>
  );
}


