import { useState } from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import BannerTop from "./components/BannerTop";
import "./styles/style.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <BannerTop />
      </Container>
    </>
  );
}

export default App;
