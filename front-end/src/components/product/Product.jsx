import React from 'react';
import classes from "../../styles/Product.module.css";


// Product component
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
                        <input className="delete-checkbox" type="checkbox" {...props} />
                    </div>
            </div>
        );
    }
};

export default Product;