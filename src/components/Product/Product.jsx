import React, { useState } from 'react'
import './Product.css'
const Product = () => {
    const[id,setid] =useState('');
    const[productname,setname] =useState('');
    const[qty,setqty] =useState('');
    const[price,setprice] =useState('');

    
    
    const readproductid =(event) => {
        setid(event.target.value);
  
    }
    const readproductname =(event) => {
        setname(event.target.value);
    }
    const readqty =(event) => {
        setqty(event.target.value);

    }
    const readprice =(event) => {
        setprice(event.target.value);
       
    }
    


    return (
    <div>
      <h1 className='i'>APPLE </h1>

      

<h2>Apple </h2>
Apple
Technology company

Apple Inc. is an American multinational technology company headquartered in Cupertino, California. As of March 2023, Apple is the world's biggest company by market capitalization, and with US$394.3 billion the largest technology company by 2022 revenue.<br/><br/>
      PRODUCT ID;-   <input type="text"onChange={readproductid}/><br/>
      PRODUCT NAME;-  <input type="text"onChange={readproductname}/><br/>
      PRODUCT QTY;-  <input type="text"onChange={readqty}/><br/>
      PRODUCT PRICE;-<input type="text"onChange={readprice}/><br/>
      <button type="submit">LOG IN</button>
      

    </div>
  )
}

export default Product
