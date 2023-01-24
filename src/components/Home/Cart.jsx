import React from 'react'
import { useContext } from 'react'
import { allProduct } from '../../App'
import Form from 'react-bootstrap/Form';

function Cart() {
    let product = useContext(allProduct)
    function showProduct() {
        console.log(product);
    }
    return (
        <div>
            <button onClick={showProduct}>abc</button>
            <div className="forms container">
                <Form style={{width:"20rem"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Cart