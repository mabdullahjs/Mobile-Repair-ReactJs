import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiTwotoneShopping } from "react-icons/ai"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Product(props) {

    let model = localStorage.getItem("model");
    let [block, setBlock] = useState("none");
    let [product, setProduct] = useState([]);

    let myArr = [
        {
            model: 'Samsung A02',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]


        },
        {
            model: 'Samsung A12',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung A10',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung A21s',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung J5prime',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung J6+',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung J4+',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung J727',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung A7 Led',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        }, {
            model: 'Samsung E7 Led',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung A310 ogs',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Samsung J7 TFT',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei G750',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei Mate 10lite',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei Psmart 2019',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei P10lite',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei P8lite',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei Y5p17',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei Y5p18',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei Y6p17',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Huawei Y9popup',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Honor 10lite',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Honor 8lite',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 6g',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 6p',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 6s',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 7g',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 7p',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 4a',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Iphone 4x',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Itel A49',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X626',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X627',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X650',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X652',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X655',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X653',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X657',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X680',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X682',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X688',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'Infinix X690',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A16',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A32',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A53',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A3S',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A5 2020',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A5S',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A7',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A12',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO C11',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO F1S',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO F5',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO F7',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO F9',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A57',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'OPPO A37',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'VIVO Y11',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'VIVO Y19',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'VIVO Y20',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'VIVO Y33S',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'VIVO Y91',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'VIVO S1 TFT',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'xiomi 4a',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        },
        {
            model: 'xiomi 4x',
            service: [
                {
                    service: "Back Camera",
                    Rs: "8500.00"
                },
                {
                    service: "Back Panel",
                    Rs: "11500.00"
                },
                {
                    service: "Battery",
                    Rs: "8500.00"
                },
                {
                    service: "Cabinet Or Frame",
                    Rs: "11500.00"
                },
                {
                    service: "Camera Glass",
                    Rs: "4999.00"
                },
                {
                    service: "Charge Port",
                    Rs: "9500.00"
                },
                {
                    service: "Dead Phone Diagnosis",
                    Rs: "150.00"
                },
                {
                    service: "Ear Speaker",
                    Rs: "6600.00"
                },
                {
                    service: "Front Camera",
                    Rs: "8999.00"
                },
                {
                    service: "Loud Speaker",
                    Rs: "8500.00"
                },
                {
                    service: "Microphone",
                    Rs: "10500.00"
                },
                {
                    service: "Motherboard Repair",
                    Rs: "68999.00"
                },
                {
                    service: "Phone Diagnosis",
                    Rs: "1.00"
                },
                {
                    service: "Phone Servicing",
                    Rs: "34499.00"
                },
                {
                    service: "Rear Camera",
                    Rs: "16500.00"
                },
                {
                    service: "Software Diagnosis",
                    Rs: "5500.00"
                },
                {
                    service: "Touch And Lcd",
                    Rs: "45999.00"
                },
                {
                    service: "Touch Screen / Glass",
                    Rs: "8500.00"
                },
                {
                    service: "Volume And Power Button",
                    Rs: "6000.00"
                },
                {
                    service: "Water Diagnosis",
                    Rs: "999.00"
                },


            ]
        }
    ];
    let data = myArr.map((item) => {
        if (item.model === model) {
            return item.service.map((items, index) => {
                return <Card key={index} style={{ width: '18rem', marginTop: "2rem" }}> <Card.Body>
                    <Card.Title className='text-center'>Service: {items.service}</Card.Title>
                    <Card.Text className='text-center'>
                        Rs: {items.Rs}
                    </Card.Text>
                    <h3 style={{ cursor: "pointer" }} className='text-center'><AiTwotoneShopping onClick={() => addCart(index)} /></h3>
                </Card.Body>
                </Card>
            })
        }
        return ""
    })

    function addCart(i) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added to Cart Successfuly',
            showConfirmButton: false,
            timer: 1500,
        })
        setBlock("block")
        product.push({
            service: myArr[0].service[i].service,
            price: myArr[0].service[i].Rs,
            models: model
        });
        setProduct(product)
        props.func(product);
    }
    const navigate = useNavigate();
    function gotoCart(){
        navigate("/cart")

    }

    return (
        <div>
            <h1 className='text-center'>Service for <span style={{ color: "#fb5112" }}>{model}</span></h1>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <Button onClick={gotoCart} style={{ backgroundColor: "#fb5112", border: "none", display: `${block}` }}>Go To Cart</Button>
            </div>
            <div className='container d-flex justify-content-evenly flex-wrap'>
                {data}
            </div>
        </div>
    )
}

export default Product;