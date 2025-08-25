"use client";
import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(true); // Start with dark as default
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Read the theme from localStorage
    const theme = localStorage.getItem("theme");
    
    // Default to dark unless explicitly set to light
    const shouldBeDark = theme === "light" ? false : true;
    
    // Apply the theme immediately
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Return mounted state to prevent hydration mismatch
  return { isDark: mounted ? isDark : true, toggleTheme };
} 