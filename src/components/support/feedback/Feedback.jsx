import React from 'react'
import bg from "../../../Assests/Images/banner7.jpg"
import Forms from '../feedback/Form'

function Feedback() {
  return (
    <div >
      <div className="main d-flex justify-content-start flex-column" style={{ backgroundImage: `url(${bg})`, height: "20rem", backgroundAttachment: "fixed", backgroundSize: "90rem", }}>
        <h1 className='px-4 pt-5 text-white'>GIVE US YOUR FEEDBACK</h1>
        <p className='px-4 text-white'>We vaue your input, let us know how we're doing.</p>
      </div>
      <Forms/>
    </div>
  )
}

export default Feedback