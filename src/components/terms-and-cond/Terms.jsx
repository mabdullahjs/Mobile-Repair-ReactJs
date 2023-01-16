import React from 'react'
import bg from "../../Assests/Images/banner8.jpg"

function Terms() {
  return (
    <div>
        <div className="main d-flex justify-content-start flex-column" style={{ backgroundImage: `url(${bg})`, height: "20rem" }}>
                <h1 className='px-4 pt-5 text-white'>Terms</h1>
                <p className='px-4 text-white'>& Conditions</p>
            </div>
    </div>
  )
}

export default Terms