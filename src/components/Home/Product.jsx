import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiTwotoneShopping} from "react-icons/ai"

function Product() {
    let model = localStorage.getItem("model");
    return (
        <div>
            <h1 className='text-center'>Service for <span style={{ color: "#fb5112" }}>{model}</span></h1>
            <div className='container d-flex justify-content-evenly flex-wrap'>
                <Card style={{ width: '18rem' , marginTop:"2rem" }}>
                    <Card.Body>
                        <Card.Title className='text-center'>Service: Charge Port</Card.Title>
                        <Card.Text className='text-center'>
                        Rs: 8500.00
                        </Card.Text>
                        <h3 style={{cursor:"pointer"}} className='text-center'><AiTwotoneShopping/></h3>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' , marginTop:"2rem" }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' , marginTop:"2rem" }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' , marginTop:"2rem" }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' , marginTop:"2rem" }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' , marginTop:"2rem" }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
               
            </div>
        </div>

    )
}

export default Product;