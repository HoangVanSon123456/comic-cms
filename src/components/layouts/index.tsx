"use client";
import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <Box className="flex-1 overflow-auto w-full">{children}</Box>

      <Footer />
    </Box>
  );
}
