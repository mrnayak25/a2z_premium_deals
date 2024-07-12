import React from "react";
//import { useProperty } from './PropertyContext';
import LandForm from './LandForm';
import NavBar2 from './NavBar2.js'
import "../App.css"



function SellLand() {
 // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 //const { setPropertyType } = useProperty();

  return (
    <div>
     <NavBar2/>
      <h1 className="font-bold p-4">Sell Your Property</h1>
      <hr></hr>
      <div id="sellbg">
      <LandForm />
      </div>
    </div>
  );
}

export default SellLand;
