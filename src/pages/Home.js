// src/pages/Home.js
import React from 'react';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar'
import LandList from '../components/LandList_cust';
import AboutUs from "../components/AboutUs";
import Services from '../components/Services';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';


const Home = () => (
  <div>
    <NavBar />
   <Carousel/>
   <LandList />
   <AboutUs/>
   <Services/>
   <Feedback/>
   <Footer/>
  </div>
);

export default Home;