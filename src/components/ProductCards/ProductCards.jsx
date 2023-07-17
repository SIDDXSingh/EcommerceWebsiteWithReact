import React from "react";
import styles from "./ProductCards.module.css";

function ProductCards(props)
{
    return(
    <div class={styles.cards}>

        <h3>{props.title}</h3>
        <h5>{props.price}</h5>
        <button>Add To Cart</button>
        
    </div>);
}

export default ProductCards