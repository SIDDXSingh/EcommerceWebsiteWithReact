import React from "react";
import ProductCards from "../ProductCards/ProductCards";

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




function ProductList()
{
    return (
        <div class={styles.list} >
            {
                prodLis.map((prodLis)=>{return <ProductCards title={prodLis.title} price={prodLis.price}/>  })
            }
        </div>);
}

export default ProductList