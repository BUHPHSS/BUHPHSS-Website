import React from "react";
import { About } from "../components/About/About";
import { FAQ } from "../components/FAQ/FAQ";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <FAQ />
    </>
  );
};
