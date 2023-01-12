import React from 'react'
import bg from "../../Assests/Images/bg-form.jpg"
import Core from "../about/core/Core"
import bgs from "../../Assests/Images/iphone.jpg"

function About() {
  return (
    <div>
        <div className="main d-flex justify-content-start flex-column" style={{backgroundImage: `url(${bg})` , height:"20rem"}}>
            <h1 className='px-4 pt-5 text-white'>About Us</h1>
            <p className='px-4 text-white'>Here is an introduction of our services.</p>
        </div>
        <Core/>
        <div className="info" style={{backgroundImage: `url(${bgs})` , backgroundAttachment:"fixed" ,  backgroundSize: "cover",}}>
            <div className="first" style={{width:"40%" , padding:"2rem"}}>
                <h1 style={{fontSize:"2rem"}}>WHO WE ARE?</h1>
                <p>We provide our services to local customers, PHIXMAN specializes in its services without loopholes all your requirements reach expert hands. Our massive investment in engineers, equipment and procedures and consequently will definitely provide you the extreme best experience, we are now able to offer our exceptional services nationwide.</p> <br />
                <h1 style={{fontSize:"2rem"}}>WHAT DO WE DO?</h1>
                <p>Every customer of ours avail the best from our expertise, antagonistic prices, rapid turnaround and a masterly service all together with all-inclusive knowledge in this particular specific field. We are equipped with the latest distinctive supplies enabling us to diagnose and repair your Products to the core. You will see the intensity in our work and magic in our hands.</p>
            </div>
        </div>
    </div>
  )
}

export default About