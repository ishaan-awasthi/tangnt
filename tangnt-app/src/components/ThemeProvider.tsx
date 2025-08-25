"use client";
import { useTheme } from "@/hooks/useTheme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useTheme(); // Initialize theme

  return <>{children}</>;
} 