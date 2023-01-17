import React from 'react'

function Product() {
    let model = localStorage.getItem("model");
  return (
    <div>
        <h1>Service for {model}</h1>
    </div>
  )
}

export default Product;