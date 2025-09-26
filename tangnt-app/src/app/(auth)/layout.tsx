"use client";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useTheme } from "@/hooks/useTheme";

export function AuthLayoutClient({ children }: { children: React.ReactNode }) {
  const { toggleTheme } = useTheme();

  return (
    <div className="h-full w-full min-h-screen flex overflow-hidden bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;
} 