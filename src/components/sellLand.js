import React, { useState } from "react";
import { useProperty } from './PropertyContext';
import LandForm from './LandForm';
import NavBar2 from './NavBar2.js'



function SellLand() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setPropertyType } = useProperty();

  return (
    <div>
     <NavBar2/>
      <h1 className="font-bold p-4">Sell Your Property</h1>
      <hr></hr>
      <LandForm />
    </div>
  );
}

export default SellLand;
