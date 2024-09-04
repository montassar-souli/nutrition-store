import React from "react";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import { Outlet } from "react-router";
import Hero from "./assets/components/body/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
export default App;
