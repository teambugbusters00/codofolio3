import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { FloatingImageCards } from "@/components/3d/FloatingImageCards";

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function MainLayout({ children, showFooter = true }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <FloatingImageCards />
      <main className="flex-1 pt-16 relative z-10">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
