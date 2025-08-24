"use client";
import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

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
    <Box className="flex flex-col min-h-screen">
      <Header toggleMode={toggleMode} mode={mode} />
      <NavBar />

      <Box className="flex-1 overflow-auto w-full">{children}</Box>

      <Footer />
    </Box>
  );
}
