import React from 'react'
import LandForm from './LandForm'
import { Link } from 'react-router-dom'

function sellLand() {
  return (
    <div>
       <Link to="/"> <i className="fa-solid fa-arrow-left float-start ms-20 mt-10"> Back</i></Link>
        <h1>Sell Your Property</h1>
      <LandForm/>
    </div>
  )
}

export default sellLand
