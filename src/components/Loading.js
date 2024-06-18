import React from 'react'
import ReactLoading from "react-loading"

function loading() {
  return (
    <div className='d-flex justify-center pt-56'>
       <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={100}
                width={100}
            />
    </div>
  )
}

export default loading
