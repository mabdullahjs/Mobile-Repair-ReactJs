import React from 'react'
import Card from 'react-bootstrap/Card';

function Services() {
    return (
        <div>
            <div className="main-heading text-center text-white" style={{ fontSize: "2rem", padding: "1rem", backgroundColor: "#fb5112", fontWeight: "bolder" }}>
                GET YOUR MOBILE REPAIR STARTED
            </div>
            <div className="services">
                <h1 className='text-center py-4'>Services</h1>
                <p className='text-center px-5 ' style={{}}>We provide quick service process at our mobile Store. Phixman is one of the best reasonable mobile phone service store, more than 180 repairing service centers in India, where we are fixing all models of smartphones, laptops and other electronic gadgets. Our service included touch screen repair/replacement, liquid and water damage repair, broken and physical damage repair, mainboard chip-level repairing, charging port, power button, side button, camera repair, headphone jack, wifi, bluetooth, battery replacement, software troubleshoot and up-gradation.</p>
            </div>
            <div className="cardss d-flex justify-content-center flex-wrap my-5">
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{color:"#fb5112"}}>All Brands & Models</Card.Title>
                        <Card.Text>
                        We repair all mobile & laptop brands and models!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{color:"#fb5112"}}>1 Day Service</Card.Title>
                        <Card.Text>
                        We repair devices in just 1 day!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{color:"#fb5112"}}>Skilled Technicians</Card.Title>
                        <Card.Text>
                        Certified professional team repair your device!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{color:"#fb5112"}}>Genuine Parts</Card.Title>
                        <Card.Text>
                        We provide quality & original products only!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{color:"#fb5112"}}>Data Security</Card.Title>
                        <Card.Text>
                        Don't worry, your data is safe with us!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title style={{color:"#fb5112"}}>90 Days Warranty</Card.Title>
                        <Card.Text>
                        Genuine products with a warranty of 3 months!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Services;