import React from "react";
import "./reset.css";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import News from "./components/News";
import Stats from "./components/Stats";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Hero />
      </Container>
      <Banner />
      <News />
      <Container>
        <Stats />
      </Container>
      <Container>
        <Newsletter />
      </Container>
      <Footer />
    </div>
  );
}
