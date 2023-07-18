import React, { useEffect } from "react";
import ProductCards from "../ProductCards/ProductCards";
import {useState} from "react";


import styles from "./ProductList.module.css";


var prodLis=[
    {
        title: "Product1",
        price:"100",
    },
    {
        title:"Product2",
        price:"100",
    },
    {
        title:"Product3",
        price:"100",
    },
    {
        title:"Product4",
        price:"100",
    },
    {
        title:"Product5",
        price:"100",
    }
]

function getProductsApi(callback)
{
    console.log("API called");
    setTimeout(()=>{callback(prodLis)},3000);
}


function ProductList()
{
    const[isLoading,setIsLoading]=useState(true);
    const[prodLis,setProdLis]=useState([]); //prodLis is a state variable and setProdLis is a function to set the state variable
    useEffect(()=>{getProductsApi((prodLis)=>{setIsLoading(false);
                                    setProdLis(prodLis)})},[]);


    if(isLoading)
    {
        
        return <div>
            <>Loading</>
            </div>

    }
    else{
    return (
        <div class={styles.list} >
            {
                prodLis.map((prodLis)=>{return <ProductCards title={prodLis.title} price={prodLis.price}/>  })
            }
        </div>);
}}

export default ProductList