import React, {useState} from 'react';
import axios from "axios";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const ProductForm = () => {

    const [product, setProduct] = useState({sku: '', name: '', price: '', productType: ''});

    const addNewProduct = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8888/shop-sw/back-end/public/', {
        // axios.post('http://localhost/shop-sw/back-end/public/', {
            sku: product.sku,
            name: product.name,
            price: product.price,
            productType: product.productType
        })
            .then(response => {
                return response
            });

        setProduct({sku: '', name: '', price: '', productType: ''});
    }

    return (
        <form>
            <MyInput
                value={product.sku}
                onChange={e => setProduct({...product, sku: e.target.value})}
                type="text"
                placeholder='SKU'
            />
            <MyInput
                value={product.name}
                onChange={e => setProduct({...product, name: e.target.value})}
                type="text"
                placeholder='Name'
            />
            <MyInput
                value={product.price}
                onChange={e => setProduct({...product, price: e.target.value})}
                type="number"
                placeholder='Price'
            />
            <MyInput
                value={product.productType}
                onChange={e => setProduct({...product, productType: e.target.value})}
                type="text"
                placeholder='Product type'
            />
            <MyButton onClick={addNewProduct}>Add</MyButton>
        </form>
    );
};

export default ProductForm;