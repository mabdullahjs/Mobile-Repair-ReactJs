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
        models: ['Samsung A02', 'Samsung A12', 'Samsung A10', 'Samsung A21s', 'Samsung J5prime', 'Samsung J6+', 'Samsung J4+', 'Samsung J727', 'Samsung A7 Led', 'Samsung E7 Led', 'Samsung A310 ogs', 'Samsung J7 TFT']
    },
    {
        brand: 'Huawei',
        models: ['Huawei G750', 'Huawei Mate 10lite', 'Huawei Psmart 2019', 'Huawei P10lite', 'Huawei P8lite', 'Huawei Y5p17', 'Huawei Y5p18', 'Huawei Y6p17', 'Huawei Y9popup']
    },
    {
        brand: 'Honor',
        models: ['Honor 10lite', 'Honor 8lite']
    },

    {
        brand: 'Apple',
        models: ['Iphone 6g', 'Iphone 6p', 'Iphone 6s', ' Iphone 7g', 'Iphone 7p']
    },

    {
        brand: 'Xiomi',
        models: ['xiomi 4a', 'xiomi 4x']
    },
    {
        brand: 'itel',
        models: ['Itel A49']
    },
    {
        brand: 'Infinix',
        models: ['Infinix X626', 'Infinix X627', 'Infinix X650', 'Infinix X652', 'Infinix X655', 'Infinix X653', 'Infinix X657', 'Infinix X680', 'Infinix X682', 'Infinix X688', 'Infinix X69']
    },


    {
        brand: 'Oppo',
        models: ['OPPO A16', 'OPPO A32', 'OPPO A53', 'OPPO A3S', 'OPPO A5 2020', 'OPPO A5S', 'OPPO A7', 'OPPO A12', 'OPPO C11', 'OPPO F1S', 'OPPO F5', 'OPPO F7', 'OPPO F9', 'OPPO A57', 'OPPO A37']
    },

    {
        brand: 'Vivo',
        models: ['VIVO Y11', 'VIVO Y19', 'VIVO Y20', 'VIVO Y33S', 'VIVO Y91', 'VIVO S1 TFT']
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