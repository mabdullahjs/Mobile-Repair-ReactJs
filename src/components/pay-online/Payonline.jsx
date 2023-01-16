import React from 'react'
import bg from "../../Assests/Images/banner7.jpg"
import { AiFillPhone, AiOutlineWhatsApp, AiTwotoneMail } from "react-icons/ai";
import easypaisa from "../../Assests/Images/easypaisa.png"
import jaaz from "../../Assests/Images/jaazcash.jpg"
import nayapay from "../../Assests/Images/nayapay.jpg"
import sadapay from "../../Assests/Images/sadapay.png"


function Payonline() {
    return (
        <div>
            <div className="main d-flex justify-content-start flex-column" style={{ backgroundImage: `url(${bg})`, height: "20rem", backgroundAttachment: "fixed", backgroundSize: "90rem", }}>
                <h1 className='px-4 pt-5 text-white'>PAY ONLINE</h1>
                <p className='px-4 text-white'>Pay online securely with just a few clicks using trusted and easy-to-use payment system.</p>
            </div>
            <div className='p-5'>
            <div className="details text-center pt-5 bg-light text-dark p-5">
                <h2 style={{ color: "#fb5112" }}>Ways You Can Pay Us</h2>
                <p>You can pay us through Easypaisa, Jaazcash, Nayapay, Sadapay and Bank Transfer</p>
                <p><img style={{width:"40px" , height:"40px"}} src={easypaisa} alt="easypaisa" /> 0312345678</p>
                <p><img style={{width:"40px" , height:"40px"}} src={jaaz} alt="easypaisa" /> 0312345678</p>
                <p><img style={{width:"40px" , height:"40px"}} src={nayapay} alt="easypaisa" /> 0312345678</p>
                <p><img style={{width:"40px" , height:"40px"}} src={sadapay} alt="easypaisa" /> 0312345678</p>
            </div>
            </div>
        </div>
    )
}

export default Payonline