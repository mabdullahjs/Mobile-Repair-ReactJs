import React, { useState } from 'react'
import bg from "../../Assests/Images/bg-form.jpg"
import "./home.css"
import Location from './locations/location';
import Services from './services/Services';
import Work from './works/Work';
import { Link } from 'react-router-dom';




function Home() {
    let [model, setModel] = useState([]);
    let [product, setProduct] = useState("");
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
    let brandName = mobilePhones.map((item, i) => {
        return <option key={i}>{item.brand}</option>
    })
    function selectModel(e) {
        mobilePhones.filter((item) => {
            if (e.target.value === item.brand) {
                return setModel(item.models);
            }

        })
    }
    function modelName(e) {
        setProduct(e.target.value);
        console.log(e.target.value);
        localStorage.setItem("model" , e.target.value);
    }

    return (
            <div>
                <div style={{ backgroundImage: `url(${bg})`, height: "25rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h1 className='text-center'><span style={{ fontSize: "2rem", color: "#fb5112" }}>THEEK KER DENGEY</span> <span style={{ color: "#1d3a57", fontSize: "2rem" }}>KABHI BHI KAHI BHI!</span></h1>
                    <div className='medias bg-white py-3 px-5 rounded-2 d-flex'>

                        <select required onChange={selectModel} className="form-select form-select-sm" aria-label="Default select example" style={{ marginRight: "1rem", height: "2rem" }}>
                            <option>Select brand</option>
                            {brandName}
                        </select>
                        <select required onChange={modelName} id='select' className="form-select form-select-sm" aria-label="Default select example" style={{ marginRight: "1rem", height: "2rem" }}>
                            <option>Select Model</option>
                            {model.map((item, i) => {
                                return <option key={i}>{item}</option>
                            })}

                        </select>
                        <div className="">
                            <Link to="/product"><button disabled={product == "" ? true : false} id='go' style={{ backgroundColor: "#fb5112", color: "white", borderRadius: "5px", border: "none", padding: "0.3rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", height: "2rem" }} >Submit</button></Link>
                        </div>
                    </div>
                </div>
                <Location />
                <Services />
                <Work />
            </div>
    )
}

export default Home