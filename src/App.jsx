import { useState } from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import BannerTop from "./components/BannerTop";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import USP from "./components/USP";
import SaveSpendManage from "./components/SaveSpendManage";
import "./styles/style.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <BannerTop />
        <Hero />
        <SocialProof />
        <USP />
        <SaveSpendManage />
      </Container>
    </>
  );
}

export default App;
