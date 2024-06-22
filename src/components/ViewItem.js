import React from "react";
import Carousel from "./Carousel";

function ViewItem() {
  return (
    <div>
      <div>
        <div>
          <Carousel />
        </div>
        <h1>title</h1>
        <p>paragraph</p>
        <h5>location</h5>
        <h5>sublocation</h5>
        <h6>address</h6>
        <h3>price</h3>
        <h4>total ares</h4>
        <button className=" btn btn-primary">Enquire</button>
      </div>
    </div>
  );
}

export default ViewItem;
