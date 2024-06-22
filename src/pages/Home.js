// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar'
import LandList from '../components/LandList_cust';
import AboutUs from "../components/AboutUs";
import Services from '../components/Services';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';
import Hero from '../components/Hero';

function Home(props)  {

  return (

  <div>
    <NavBar />
    <Hero/>
   <LandList setLand={props.setLand} setId={props.setId}/>
   <AboutUs/>
   <Services/>
   <Feedback/>
   <Footer/>
  </div>
);
}

export default Home;