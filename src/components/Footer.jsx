import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../Assests/Images/TKD.png"
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}

            <section className=''>
                <MDBContainer  className='text-center text-md-start'>
                    <MDBRow className='mt-3'>
                        <MDBCol style={{marginTop:"3rem"}} md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className=' mb-4'>
                                <MDBIcon icon="gem" className="" />
                                <img style={{ width: "15rem" }} src={logo} alt="" />
                            </h6>
                            <p>
                                iPhone, Samsung, Realme and Xiomi are registered trademarks Theek Kar Dengey is an independent service company and is in no way affiliated with any company.
                            </p>
                        </MDBCol>

                        <MDBCol style={{marginTop:"4rem"}} md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Start Your Repair</h6>
                            <p>
                                <Link to='/faqs' className='text-reset text-decoration-none'>
                                    FAQ
                                </Link>
                            </p>
                            <p>
                                <Link to='/terms' className='text-reset text-decoration-none'>
                                    Terms & Conditions
                                </Link>
                            </p>
                            <p>
                                <Link to='/contact' className='text-reset text-decoration-none'>
                                    Contact Us
                                </Link>
                            </p>
                            <p>
                                <Link to='/feedback' className='text-reset text-decoration-none'>
                                    Feedback
                                </Link>
                            </p>
                        </MDBCol>

                        {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Learn More</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol> */}

                        <MDBCol style={{marginTop:"4rem"}} md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 text-white' style={{ backgroundColor: '#000' }}>

                © 2022 THEEK KAR DENGEY - All Rights Reserved - Powered by
                <a className='text-decoration-none ' href='http://skysoftsol.co/'>
                    <span style={{color:"#f9a600"}}> Skysoft Solution
                    </span>
                </a>
            </div>
        </MDBFooter>
    );
}