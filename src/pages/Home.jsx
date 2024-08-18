// src/pages/Home.js
import React, { useState } from "react";
// import NavBar from "../components/NavBar";
import LandList from "../components/LandList_cust";
// import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import Header from "../components/Header";
import "../App.css";
import Value from "../components/Value";
import Contact from "../components/Contact";

function Home(props) {
  const [location, setLocation] = useState(""); // Add state for location
  return (
    <div id="home">
    <div className="relative bg-black"> {/* .App>:nth-child(1) equivalent */}
        <div className="absolute h-80 w-80 bg-white/50 filter blur-[100px] rounded-[100px]" />
          <Header />
          <Hero setLocation={setLocation} location={location} /> {/* Pass setLocation to Hero */}
      </div>
      <LandList setLand={props.setLand} setId={props.setId} location={location} setLocation={setLocation} /> {/* Pass location to LandList */}
      {/* <AboutUs /> */}
      <Value/>
      <Contact/>
      <Services />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
