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
import { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import {initializeApp} from 'firebase/app';
import { getFirestore, collection, addDoc , Timestamp } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyDLGNP1XOYgoFznVvSJbISDuKtcKmw1t7w",
    authDomain: "tkh-123.firebaseapp.com",
    projectId: "tkh-123",
    storageBucket: "tkh-123.appspot.com",
    messagingSenderId: "913441950184",
    appId: "1:913441950184:web:8a3e63de38bddb57d0bc5d",
    measurementId: "G-Q31BZVSHV8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Cart() {
    let [product, setProducts] = useState(useContext(allProduct));
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [address, setAddress] = useState("");
    // console.log(product)


    let totalPrice = () => {
        if (product.length === 0) {
            return 0
        }
        else {
            let numbers = [];
            product.map((item) => {
                return numbers.push(+item.price)
            })



            let sum = 0;
            numbers.forEach((number) => {
                sum += number;
            });
            return sum
        }
    }
    // console.log(totalPrice());
    let shipping = 200

    async function orderPlaced() {
        if (totalPrice() === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please add product',
                showConfirmButton: true,
            })
        } else if (name === "" || address === "" || contact === "" || email === "") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please Fill Form Correctly',
                showConfirmButton: true,
            })
        } else {
            console.log(name);
            let order = collection(db, "Orders");
            await addDoc(order, { Name: name, email: email, address: address, contact: contact, product: product, Price: totalPrice(), shipping: shipping, totalPrice: totalPrice() + shipping, time: Timestamp.fromDate(new Date()) });
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Order Placed Sucessfully',
                showConfirmButton: false,
                timer: 1500,
            })
            window.location.reload()
        }

    }

    function removeItem(e) {
        // console.log("item removed" , e);
        let filter = product.filter((item, index) => {
            return index !== e
        })
        setProducts(filter);
    }

    return (

        <div>
            <section className="" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5">
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

                                            {product.length === 0 ? <h1>Your Cart is Empty</h1> : product.map((item, index) => {
                                                return <MDBCard key={index} className="mb-3" style={{ marginTop: "2rem" }}>
                                                    <MDBCardBody>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                </div>
                                                                <div className="ms-3">
                                                                    <MDBTypography tag="h5">
                                                                        {item.models}
                                                                        <AiTwotoneDelete onClick={() => removeItem(index)} />
                                                                    </MDBTypography>

                                                                    <p className="small mb-0">{item.service}

                                                                    </p>

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
                                                            placeholder="Full Name" contrast onChange={e => setName(e.target.value)} />

                                                        <MDBInput className="mb-4" type="email" size="lg"
                                                            minLength="19" maxLength="19" placeholder="abc@example.com" contrast onChange={e => setEmail(e.target.value)} />

                                                        <MDBInput className="mb-4" type="text" size="lg"
                                                            placeholder="Address" contrast onChange={e => setAddress(e.target.value)} />
                                                        <MDBInput className="mb-4" type="number" size="lg"
                                                            placeholder="Contact Number" contrast onChange={e => setContact(e.target.value)} />
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
                                                        <p className="mb-2">Rs: {totalPrice() + shipping}</p>
                                                    </div>
                                                    <Button onClick={orderPlaced} variant="light" style={{ border: "none", marginTop: "2rem", color: "#ff8336" }}>Place Order</Button>
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
        </div>
    )
}

export default Cart