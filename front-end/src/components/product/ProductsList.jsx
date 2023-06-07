import React, {useState, useEffect} from "react";
import axios from "axios";
import Product from "./Product";
import classes from "../../styles/Product.module.css";
import {Link} from "react-router-dom";
import MyButton from "../UI/button/MyButton";

// Product list page
const ProductsList = () => {
    // Product object
    const [products, setProducts] = useState([]);
    // list of id to delete
    const [idListToDelete, setDdListToDelete] = useState('');

    // Get all products
    useEffect(() => {
        axios.get('http://localhost:8888/shop-sw/back-end/public/')
            .then(response => {
                setProducts(response.data);
            });
    });

    // Delete products by id list
    const deleteProducts = () => {
        axios.delete(`http://localhost:8888/shop-sw/back-end/public/${idListToDelete}`)
            .then(response => {
                return response
            });
    }

    // Checking if id is in the list
    const setIdToDelete = (id) => {
        if(idListToDelete.includes(id)) {
            setDdListToDelete(idListToDelete.replace(id + ',', ''));
        } else {
            setDdListToDelete(idListToDelete + id + ',');
        }
    }

    return (
        <div>
            <header>
                <div className="container">
                    <h2>Product List</h2>
                    <div className={classes.buttons}>
                        <Link className={classes.link} to="/addproduct"><MyButton>ADD</MyButton></Link>
                        <MyButton id="delete-product-btn" onClick={deleteProducts}>MASS DELETE</MyButton>
                    </div>
                </div>
                <hr/>
            </header>

            <div className={classes.productList}>
                {products.length
                    ?
                    products.map((product) =>
                        <Product onChange={() => setIdToDelete(product.id)} key={product.id} id={product.id} sku={product.sku} name={product.name} price={product.price} productType={product.productType} dimension={product.dimension} size={product.size} weight={product.weight}/>
                    )
                    :
                    <h1 style={{textAlign: 'center'}}>
                        Products not found
                    </h1>
                }
            </div>
        </div>
    );
};

export default ProductsList;
