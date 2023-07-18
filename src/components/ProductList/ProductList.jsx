import React, { useEffect } from "react";
import ProductCards from "../ProductCards/ProductCards";
import {useState} from "react";


import styles from "./ProductList.module.css";






function ProductList()
{
    const[isLoading,setIsLoading]=useState(true);
    const[error,setError]=useState(null);
    const[prodLis,setProdLis]=useState([]); 
    //prodLis is a state variable and setProdLis is a function to set the state variable
    // useEffect(()=>{getProductsApi((prodLis)=>{setIsLoading(false);
    //                                 setProdLis(prodLis)})},[]);




    useEffect(()=>{fetch("http://localhost:3001/prodLis")
    .then((res)=>res.json())
    .then(result=>{setIsLoading(false);
                  setProdLis(result)})
    .catch((err)=>{setError(err);})},[]);
    
         

    if(error)
    {
        return (<div>
            something is wrong
        </div>);
    }

    else if(isLoading)
    {
        
        return <div>
            <>Loading</>
            </div>;

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