import React from 'react'
import "./location.css"
import city from "../../../Assests/Images/city_190531101719.jpg"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function location() {
    return (
        <div className="main bg-black">
            <div className="first-container">
                <h1 className=' pt-5 text-white'>We Offer Services In All Over <span className='karachi'>Karachi</span></h1>
                <p className='text-white'>Free mobile pick up and delivery service. Mobile repair at home. Book a pick up Now!</p>
                <div className='first-main-div'>
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
            <div className="container bg-white" style={{width:"20rem" , height:"40%" , padding:"2rem" ,borderRadius:"1rem" , marginTop:"5%" , marginBottom:"5%"}}>
                <h1 className='head-one' style={{fontSize:"1.5rem" , color:"#FB5112"}}>FIND SHOP NEAR YOU!</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter contact" />
                    </Form.Group>

                    <Button style={{backgroundColor:"#FB5112" , border:"none" , marginTop:"5%"}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> <br /><br />
            </div>
        </div>
    )
}

export default location;