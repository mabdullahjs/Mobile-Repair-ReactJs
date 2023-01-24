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

    const mobilePhones = [{
        brand: 'Samsung',
        models: ['A02', 'A12', 'A10', 'A21s', 'J5prime', 'J6+', 'J4+', 'J727', 'A7 Led', 'E7 Led', 'A310 ogs', 'J7 TFT']
    },
    {
        brand: 'Huawei',
        models: ['G750', 'Mate 10lite', 'Psmart 2019', 'P10lite', 'P8lite', 'Y5p17', 'Y5p18', 'Y6p17', 'Y9popup']
    },
    {
        brand: 'Honor',
        models: ['Honor 10lite', 'Honor 8lite']
    },

    {
        brand: 'Apple',
        models: ['6g', '6p', '6s', ' 7g', '7p']
    },

    {
        brand: 'Xiomi',
        models: ['4a', '4x']
    },
    {
        brand: 'itel',
        models: ['A49']
    },
    {
        brand: 'Infinix',
        models: ['X626', 'X627', 'X650', 'X652', 'X655', 'X653', 'X657', 'X680', 'X682', 'X688', 'X69']
    },


    {
        brand: 'Oppo',
        models: ['A16', 'A32', 'A53', 'A3S', 'A5 2020', 'A5S', 'A7', 'A12', 'C11', 'F1S', 'F5', 'F7', 'F9', 'A57', 'A37']
    },

    {
        brand: 'Vivo',
        models: ['Y11', 'Y19', 'Y20', 'Y33S', 'Y91', 'S1 TFT']
    }]
    let brandName = mobilePhones.map((item, i) => {
        return <option key={i}>{item.brand}</option>
    })
    function selectModel(e) {
        mobilePhones.filter((item) => {
            if (e.target.value === item.brand) {
                return setModel(item.models);
            }
            return mobilePhones[0].models

        })
    }
    function modelName(e) {
        setProduct(e.target.value);
        console.log(e.target.value);
        localStorage.setItem("model", e.target.value);
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
                            <Link to="/product"><button disabled={product === "" ? true : false} id='go' style={{ backgroundColor: "#fb5112", color: "white", borderRadius: "5px", border: "none", padding: "0.3rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", height: "2rem" }} >Submit</button></Link>
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