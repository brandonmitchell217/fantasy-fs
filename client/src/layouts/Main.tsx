import React from "react";
import Nav from "../components/UI/Nav";
import Footer from "../components/UI/Footer";
import "../index.css";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
