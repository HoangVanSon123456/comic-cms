"use client";
import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({
  children,
  toggleMode,
  mode,
}: {
  children: React.ReactNode;
  toggleMode: () => void;
  mode: "light" | "dark";
}) {
  return (
    <Box className="flex flex-col flex-1 h-screen overflow-hidden">
      <Header toggleMode={toggleMode} mode={mode} />

      <Box className="w-full flex" sx={{ maxHeight: `calc( 100vh - 45px )` }}>
        {/* <LeftMenu /> */}

        <Box
          className="flex flex-col w-full relative"
          sx={{
            height: `calc( 100vh - 45px )`,
            overflow: "auto",
          }}
        >
          <Box className="w-full">{children}</Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
