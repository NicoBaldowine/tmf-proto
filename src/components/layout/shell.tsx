"use client";

import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto bg-gray-50 p-0">
          <div className="p-3">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
