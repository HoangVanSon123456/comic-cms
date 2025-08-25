"use client";

import Layout from "@/components/layouts";
import { RootState } from "@/redux/store";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";

export default function Providers({ children }: { children: ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode);
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
        <Layout>{children}</Layout>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
