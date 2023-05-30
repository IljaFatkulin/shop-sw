import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";
import Product from "./Product";
import classes from "./Product.module.css";
import ProductFilter from "./ProductFilter";
import {Link} from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState({sort: '', search: ''})
    const [ids, setIds] = useState('');

    const sortedProducts = useMemo(() => {
        if(products.length > 0) {
            if(filter.sort) {
                return [...products].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
            }
            return products;
        }
        return false;
    }, [filter.sort, products]);

    const processedProducts = useMemo(() => {
        if(sortedProducts != false) {
            return sortedProducts.filter(product => product.name.toLowerCase().includes(filter.search.toLowerCase()));
        }
        return [];
    }, [filter.search, sortedProducts]);


    useEffect(() => {
        axios.get('http://localhost:8888/shop-sw/back-end/public/')
            .then(response => {
                setProducts(response.data);
            });
    });

    const deleteProducts = () => {
        axios.delete(`http://localhost:8888/shop-sw/back-end/public/${ids}`)
            .then(response => {
                return response
            });
    }

    const setIdToDelete = (id) => {
        if(ids.includes(id)) {
            setIds(ids.replace(id + ',', ''));
        } else {
            setIds(ids + id + ',');
        }
    }

    return (
        <div>
            <header>
                <h2>Product List</h2>
                <div className={classes.buttons}>
                    <Link className={classes.link} to="/addproduct"><MyButton>ADD</MyButton></Link>
                    <MyButton id="delete-product-btn" onClick={deleteProducts}>MASS DELETE</MyButton>
                </div>
                <hr/>
            </header>

            <ProductFilter
                filter={filter}
                setFilter={setFilter}
            />
            <div className={classes.productList}>
                {processedProducts.length
                    ?
                    processedProducts.map((product) =>
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