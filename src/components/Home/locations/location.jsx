import React from 'react'
import "./location.css"
import city from "../../../Assests/Images/city_190531101719.jpg"

function location() {
    return (
        <div className="main bg-black">
            <div className="first-container">
                <h1 className=' pt-5 text-white'>We Offer Services In All Over <span className='karachi'>Karachi</span></h1>
                <p className='text-white'>Free mobile pick up and delivery service. Mobile repair at home. Book a pick up Now!</p>
                <div className='main-div'>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                </div>
                <div className='second-main-div'>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                    <div className="">
                        <img src={city} alt="" />
                        <h1 className='text-white image-text'>hello</h1>
                    </div>
                </div>
            </div>
            <div className="second-container bg-white">
                <h1 className='head-one'>Find mobile repair shop near you</h1>

            </div>
        </div>
    )
}

export default location