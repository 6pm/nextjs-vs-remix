"use client";

import { NextThemesProvider } from "@/components/providers/NextThemesProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </NextThemesProvider>
  );
}
