import React from 'react'
import bg from "../../../Assests/Images/banner4.jpg"
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

function Faqs() {
    return (
        <div>
            <div className="main d-flex justify-content-start flex-column" style={{ backgroundImage: `url(${bg})`, height: "20rem" }}>
                <h1 className='px-4 pt-5 text-white'>FAQs</h1>
                <p className='px-4 text-white'>Frequently Asked Questions</p>
            </div>
            <div className="faq-1">
                <MDBContainer className="mt-5" style={{ maxWidth: '1000px' , backgroundColor:"#FB5112" }}>
                    <MDBAccordion alwaysOpen initialActive={1}>
                        <MDBAccordionItem  collapseId={1} headerTitle="Where are the prices?">
                            Head to the Prices Page, select your device and you’ll be able to see what price options are available.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle="Can I book multiple repairs?">
                            Yes, you can.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle="Is it possible to select a specific time for my repair">
                            You’ll be allocated the earliest appointment available. For a same day repair, this will be confirmed at the checkout. For a next day (or later) appointment, the time will be confirmed to you via SMS and email by 08.00 on the day of your repair.
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </div>
            <div className="faq-2">
                <MDBContainer className="mt-5" style={{ maxWidth: '1000px', backgroundColor:"#FB5112" }}>
                    <MDBAccordion >
                        <MDBAccordionItem collapseId={1} headerTitle="When will you arrive?">
                            For a same day repair, the time of your appointment will be confirmed at the checkout. For a next day (or later) appointment, the time will be confirmed via SMS and email on the day of your repair.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle="How long does it take?">
                            A standard smartphone screen repair takes approximately thirty minutes. A standard tablet screen repair will take approximately one hour.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle="Where is the repair carried out?">
                            All work is carried out in our mobile workshops.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={4} headerTitle="Will your technician need to come into my home or workplace?">
                            No. All work is carried out in our workshops.
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </div>
            <div className="faq-3">
                <MDBContainer className="mt-5" style={{ maxWidth: '1000px', backgroundColor:"#FB5112" }}>
                    <MDBAccordion>
                        <MDBAccordionItem collapseId={1} headerTitle="
                                    How long is the Theek kar Dengey guarantee?">
                            All Theek kar Dengey repairs are guaranteed for 3 months from the date they are undertaken. The guarantee is 100% no-quibble.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle="What does the guarantee cover?">
                        It covers the specific fault that Theek kar Dengey repaired.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle="Is there a Theek kar Dengey mobile workshop where I am?">
                        There are Theek kar Dengey mobile workshops all over the Pakistan. Find the one near you.
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </div>

        </div>
    )
}

export default Faqs