import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}