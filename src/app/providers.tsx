"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextNProgress
        color="red"
        height={4}
        options={{ showSpinner: false }}
      />
      {children}
    </ThemeProvider>
  );
}
