

import React from 'react'
import { useContext } from 'react'
import { allProduct } from '../../App'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import "./cart.css"
import Swal from 'sweetalert2';

function Cart() {
    let product = useContext(allProduct)

    let totalPrice = () => {
        if (product.length === 0) {
            return 0
        }
        else {
            let numbers = [];
            product[0].map((item) => {
                return numbers.push(+item.price)
            })



            let sum = 0;
            numbers.forEach((number) => {
                sum += number;
            });
            return sum
        }
    }
    console.log(totalPrice());
    let shipping = 200

    function orderPlaced(){
        if(totalPrice()=== 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please add product',
                showConfirmButton: true,
            })
        }else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Order Placed Sucessfully',
                showConfirmButton: false,
                timer: 1500,
            })
        }

    }

    return (

        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol lg="7">

                                        <h1>Shopping Cart</h1>

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>

                                                <p className="mb-0">You have {product.length} items in your cart</p>
                                            </div>
                                        </div>

                                        {product.length === 0 ? <h1>Your Cart is Empty</h1> : product[0].map((item) => {
                                            return <MDBCard className="mb-3" style={{ marginTop: "2rem" }}>
                                                <MDBCardBody>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                            </div>
                                                            <div className="ms-3">
                                                                <MDBTypography tag="h5">
                                                                    {item.models}
                                                                </MDBTypography>
                                                                <p className="small mb-0">{item.service}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "50px" }}>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <MDBTypography tag="h5" style={{ fontSize: "0.91rem" }} className="mb-0">
                                                                    Rs:{item.price}
                                                                </MDBTypography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                        })}


                                    </MDBCol>

                                    <MDBCol lg="5">
                                        <MDBCard className=" text-white rounded-3" style={{ backgroundColor: "#ff8336" }}>
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Order details
                                                    </MDBTypography>
                                                </div>

                                                {/* <p className="small">Full Name</p> */}
                                                <form className="mt-4">
                                                    <MDBInput className="mb-4" type="text" size="lg"
                                                        placeholder="Full Name" contrast />

                                                    <MDBInput className="mb-4" type="email" size="lg"
                                                        minLength="19" maxLength="19" placeholder="abc@example.com" contrast />

                                                    <MDBInput className="mb-4" type="text" size="lg"
                                                        placeholder="Address" contrast />
                                                    <MDBInput className="mb-4" type="number" size="lg"
                                                        placeholder="Contact Number" contrast />
                                                </form>

                                                {/* <hr /> */}

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">Rs: {totalPrice()}</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">Rs: {shipping} </p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">Rs: {totalPrice()+shipping}</p>
                                                </div>
                                                <Button onClick={orderPlaced} variant="primary" style={{ border: "none", marginTop: "2rem" }}>Place Order</Button>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default Cart