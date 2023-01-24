import React from 'react'
import { useContext } from 'react'
import { allProduct } from '../../App'

function Cart() {
    let product = useContext(allProduct)
    function showProduct(){
        console.log(product);
    }
  return (
    <div>
        <button onClick={showProduct}>abc</button>
    </div>
  )
}

export default Cart