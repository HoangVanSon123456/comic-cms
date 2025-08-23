"use client";

import Layout from "@/components/layouts";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode, useMemo, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  // tạo theme mỗi khi mode thay đổi
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout
          mode={mode}
          toggleMode={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {children}
        </Layout>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
