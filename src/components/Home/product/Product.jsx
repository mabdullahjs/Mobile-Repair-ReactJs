import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { AiTwotoneShopping } from "react-icons/ai"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Product() {
    const MySwal = withReactContent(Swal)
    let model = localStorage.getItem("model");
    let [product , setProduct] = useState([]);

    let myArr = [
        {
            model: 'A02',
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
            model: 'A12',
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
            model: 'A10',
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
            model: 'A21s',
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
            model: 'J5prime',
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
            model: 'J6+',
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
            model: 'J4+',
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
            model: 'J727',
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
            model: 'A7 Led',
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
            model: 'E7 Led',
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
            model: 'A310 ogs',
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
            model: 'J7 TFT',
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
            model: 'G750',
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
            model: 'Mate 10lite',
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
            model: 'Psmart 2019',
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
            model: 'P10lite',
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
            model: 'P8lite',
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
            model: 'Y5p17',
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
            model: 'Y5p18',
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
            model: 'Y6p17',
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
            model: 'Y9popup',
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
            model: '6g',
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
            model: '6p',
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
            model: '6s',
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
            model: ' 7g',
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
            model: '7p',
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
            model: '4a',
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
            model: '4x',
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
            model: 'A49',
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
            model: 'X626',
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
            model: 'X627',
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
            model: 'X650',
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
            model: 'X652',
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
            model: 'X655',
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
            model: 'X653',
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
            model: 'X657',
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
            model: 'X680',
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
            model: 'X682',
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
            model: 'X688',
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
            model: 'X69',
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
            model: 'A16',
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
            model: 'A32',
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
            model: 'A53',
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
            model: 'A3S',
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
            model: 'A5 2020',
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
            model: 'A5S',
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
            model: 'A7',
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
            model: 'A12',
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
            model: 'C11',
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
            model: 'F1S',
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
            model: 'F5',
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
            model: 'F7',
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
            model: 'F9',
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
            model: 'A57',
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
            model: 'A37',
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
            model: 'Y11',
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
            model: 'Y19',
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
            model: 'Y20',
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
            model: 'Y33S',
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
            model: 'Y91',
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
            model: 'S1 TFT',
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
        }];
    let data = myArr.map((item) => {
        if (item.model === model) {
            return item.service.map((items, index) => {
                return <Card key={index} style={{ width: '18rem', marginTop: "2rem" }}> <Card.Body>
                    <Card.Title className='text-center'>Service: {items.service}</Card.Title>
                    <Card.Text className='text-center'>
                        Rs: {items.Rs}
                    </Card.Text>
                    <h3 style={{ cursor: "pointer" }} className='text-center'><AiTwotoneShopping onClick={addCart} /></h3>
                </Card.Body>
                </Card>
            })
        }
    })

    function addCart() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added to Cart Successfuly',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div>
            {/* <Alert style={{ visibility: `${display}` }} message="Product Add to Basket Successfully" type="success" />; */}
            <h1 className='text-center'>Service for <span style={{ color: "#fb5112" }}>{model}</span></h1>
            <div className='container d-flex justify-content-evenly flex-wrap'>
                {data}
            </div>

        </div>

    )
}

export default Product;