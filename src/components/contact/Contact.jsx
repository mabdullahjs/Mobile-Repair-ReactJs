import React from 'react'
import bg from "../../Assests/Images/banner5.jpg"
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AiFillPhone, AiOutlineWhatsApp, AiTwotoneMail } from "react-icons/ai";
import { Button } from 'react-bootstrap';

function Contact() {
    return (
        <div>
            <div className="main d-flex justify-content-start flex-column" style={{ backgroundImage: `url(${bg})`, height: "20rem", backgroundAttachment: "fixed", backgroundSize: "90rem", }}>
                <h1 className='px-4 pt-5 text-white'>CONTACT US</h1>
                <p className='px-4 text-white'>Have a Question? Need Help? Get in touch with us.</p>
            </div>
            <div>
                <div>
                    <Form className='container pt-5 pb-5' >
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Phone Number" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Email" />
                        </Form.Group>

                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                        <div className='pt-3'>
                        <Button style={{ backgroundColor: "#fb5112", border: "none" }} variant="primary">
                            Submit
                        </Button>
                        </div>
                    </Form>
                </div>
                <div className="details text-center pt-5 bg-black text-white p-5">
                    <h2 style={{ color: "#fb5112" }}>Ways You Can Reach Out</h2>
                    <p>We've got a team ready to help with any issue you may be having</p>
                    <p><AiFillPhone /> 0312345678</p>
                    <p><AiTwotoneMail /> info@example.com</p>
                    <p><AiOutlineWhatsApp /> 0312345678</p>
                </div>
            </div>
        </div>
    )
}

export default Contact