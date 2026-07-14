import { ReactNode } from "react";
import { SideNavigation } from "@/components/SideNavigation";

type PageShellProps = {
  children: ReactNode;
  contentClassName?: string;
};

export function PageShell({ children, contentClassName }: PageShellProps) {
  return (
    <main className="min-h-screen pt-20 flex justify-center px-24 bg-[#e1d8ed]">
      <div className={`flex max-w-7xl w-full gap-16 ${contentClassName ?? ""}`}>
        <SideNavigation />

        <div className="flex-1 max-w-3xl">
          {children}
        </div>
      </div>
    </main>
  );
}