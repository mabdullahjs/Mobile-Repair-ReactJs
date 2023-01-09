import React from 'react'
import { Select, Button } from 'antd';
import bg from "../../Assests/Images/bg-form.jpg"
import "./Phoneinfo.css"





const handleChange = (value) => {
    console.log(`selected ${value}`);
};


function PhoneInfo() {

    const mobilePhones = [
        {
            brand: 'Samsung',
            models: ['Galaxy S20', 'Galaxy Note 10', 'Galaxy A51', 'Galaxy M31']
        },
        {
            brand: 'Huawei',
            models: ['P40 Pro', 'Mate 40 Pro', 'Nova 7i', 'Y7p']
        },
        {
            brand: 'Honor',
            models: ['P40 Pro', 'Mate 40 Pro', 'Nova 7i', 'Y7p']
        },
        {
            brand: 'Apple',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Infinix',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Tecno',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Nokia',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Realme',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Xiomi',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Itel',
            models: ['iPhone 12', 'iPhone 11', 'iPhone SE', 'iPhone XR']
        },
        {
            brand: 'Oppo',
            models: ['Reno4 Pro', 'F17 Pro', 'A53', 'A15']
        },
        {
            brand: 'Vivo',
            models: ['Y51', 'Y20', 'X50 Pro', 'S1 Pro']
        }
    ];
    let brandName = mobilePhones.map((item)=>{
        return <option>{item.brand}</option>
    })
    console.log(brandName);
    let modelName = mobilePhones.map((item)=>{
        return <option>{item.models}</option>
    })
    console.log(brandName);



    return (
        <div style={{ backgroundImage: `url(${bg})`, height: "25rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1 className='text-center'><span style={{ fontSize: "2rem" , color: "#fb5112" }}>THEEK KRDAINGA</span> <span style={{ color:"#1d3a57", fontSize: "2rem" }}>KABHI BHI KAHI BHI!</span></h1>
            <div className='medias bg-white py-3 px-5 rounded-2 d-flex'>
                
                <select style={{marginRight:"1rem"}}>
                    <option>Select brand name</option>
                    {brandName}
                </select>
                <select style={{marginRight:"1rem"}}>
                    <option>Select Model name</option>
                </select>
                <div className="">
                    <Button style={{ backgroundColor: "#fb5112" }} type="primary" danger size='middle'>Go For It!</Button>
                </div>
            </div>
        </div>
    )
}

export default PhoneInfo