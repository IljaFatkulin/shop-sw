import React, {useState} from 'react';
import axios from "axios";
import classes from "./Product.module.css";
import MyButton from "../UI/button/MyButton";

const Product = ({id, name, sku, price, productType, dimension, size, weight, ...props}) => {

    if(id != null) {
        return (
            <div className={classes.product} key={id}>
                    <p>{sku}</p>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{productType}</p>
                    <p>{dimension}{size}{weight}</p>
                    <div className={classes.checkbox_delete}>
                        <input type="checkbox" {...props} />
                    </div>
            </div>
        );
    }
};

export default Product;