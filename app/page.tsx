import React from "react";
import NavBar from "./components/NavBar/Navbar";
import classes from "./page.module.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Collection from "./components/Collection/Collection";
import Straps from "./components/Straps/Straps";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div className={classes.container}>
      <NavBar />
      <Hero />
      <About />
      <Collection />
      <Straps />
      <Footer />
    </div>
  );
};

export default Home;
