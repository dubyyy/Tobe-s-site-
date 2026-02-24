import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";


export default function LayoutPublic({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
