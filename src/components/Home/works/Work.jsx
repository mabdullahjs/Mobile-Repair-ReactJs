import React from 'react'
import Card from 'react-bootstrap/Card';
import phone from "../../../Assests/Images/phones.jpg"
import "../works/work.css"
import "../works/responsive.css"

function Work() {
    return (
        <div>
            <div className='bg-black'>
                <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "5rem", color: "white" }}>How it works at <span style={{ color: "#fb5112" }}>Theek Kar Dengey Service Center?</span></h1>

                <div className="cards d-flex justify-content-center">
                    <Card id='hello' className='carding mx-3 text-white' style={{ width: '18rem', cursor: "pointer", border: "1px solid #fb5112" }}>
                        <Card.Body>
                            <Card.Title className='text-center'>DOORSTEP SERVICES </Card.Title>
                            <Card.Text className='text-center'>
                                Welcome our experts
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id='hello' className='carding mx-3 text-white' style={{ width: '18rem', cursor: "pointer", border: "1px solid #fb5112" }}>
                        <Card.Body>
                            <Card.Title className='text-center'>REPAIR ONLINE </Card.Title>
                            <Card.Text className='text-center'>
                                At The Comfort Of Your Home
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards d-flex justify-content-center my-3" style={{ paddingBottom: "5rem" }}>
                    <Card id='hello' className='carding  mx-3 text-white' style={{ width: '18rem', cursor: "pointer", border: "1px solid #fb5112" }}>
                        <Card.Body>
                            <Card.Title className='text-center'>VISIT STORE </Card.Title>
                            <Card.Text className='text-center'>
                                Walk Into Your Nearest Store
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id='hello' className='carding mx-3 text-white' style={{ width: '18rem', cursor: "pointer", border: "1px solid #fb5112" }}>
                        <Card.Body>
                            <Card.Title className='text-center'>VISIT KIOSK</Card.Title>
                            <Card.Text className='text-center'>
                                Walk Into Your Nearest KIOSK
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="para-content">
            <h1 style={{fontSize:"2rem" , textAlign:"center", marginTop:"5rem"}}>Theek Kar Denge is the Pakistan’s No. 1 Mobile Phone Repairing Centre</h1>
            <p className='p-5 text-center'>Theek Kar Denge is the largest mobile phone repairing chain in Pakistan, also the biggest electronic service provider. We are a one-stop solution for all needs related to the repair of android & IOS smartphones and Windows based laptops. The company aims to solve the problems in the repairing industry. Theek Kar Denge offers repairs and services for smartphones, mobiles, and laptops of all major brands, including Apple, iPhone, OnePlus, Redmi, Mi, Oppo, Vivo, Xiaomi, Google Pixel, Samsung and Realme phone. Theek Kar Denge has more than 180 repairing stores and service work shops across Pakistan and the numbers are rapidly increasing. <br /><br />


                At Theek Kar Denge, we serve all our customers across Pakistan with best in the mobile repairing sector at most affordable prices. We provide certified service partners for major branded phones. We provide quality smartphone repairs with 100% customer satisfaction. Our doorstep mobile repair stores are available across all over city. <br /><br />


                We provide wide range of mobile phone services as online mobile repair, doorstep mobile repair, you can find mobile repair store/shop near your local area. We also have refubrished mobile stores where you can get branded mobile phones at half the price with 6 month service warranty.<br /><br />


                If you have a Smartphone & Laptop, well, considering today's world, you sure have it, then you have reached at the right place! Theek Kar Denge redefines the word 'fixing' by making it more easy, effective, efficient and within the reach of all the mortals, who thought getting a phone or a laptop repaired might be the worst nightmare of their lives.</p>
            </div>

            <div className="last-home-section d-flex justify-content-center bg-black" style={{flexWrap:"wrap" , padding:"3rem"}}>
                <div id='imgs' className="image">
                    <img id='images'  src={phone} alt="" />
                </div>
                <div id='paras' className=" text-white">
                    <h1>GET A PHONE AT HALF THE PRICE</h1>
                    <p>Get a refubrished smartphone at half the price of top mobile brands such as OnePlus, Xiaomi/Redmi, Realme, Vivo, Oppo, Samsung and many more. All refubrished mobiles are tested and certified by our technical experts. We have large collection of certified refurbished android mobile phones at Theek Kar Dengey store. you can choose it from wide range of branded phones at 50% cut-rate prices. If you are looking for a good condition refubrished mobile you can review at our service centers. Mi is the first choice for all age groups, reason behind this mobile brand popularity is its attractive look, HD display screen, good camera, battery life, you can also select iPhone, OnePlus, Vivo, Oppo, Realme and more. We also provide 6 months service warranty on all refurbished cell phones. Grab the smartphones from popular brands at the exciting prices.</p>
                </div>
            </div>
        </div>
    )
}

export default Work