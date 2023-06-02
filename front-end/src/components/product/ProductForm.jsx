import React, {useState} from 'react';
import axios from "axios";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MySelect from "../UI/select/MySelect";
import classes from "../../styles/Product.module.css";
import {Link} from "react-router-dom";

const ProductForm = () => {

    const [product, setProduct] = useState({sku: '', name: '', price: '', productType: '', weight: '', size: '', height: '', width: '', length: ''});

    function formValid(e) {
        e.preventDefault();
        if(product.sku !== '' && product.name !== '' && product.productType !== '' && product.productType !== '') {
            switch (product.productType) {
                case 'book':
                    if(product.weight !== '') addNewProduct();
                    break;
                case 'dvd':
                    if(product.size !== '') addNewProduct();
                    break;
                case 'furniture':
                    if(product.length !== '' && product.height !== '' && product.width !== '') addNewProduct();
                    break;
            }
        }
    }
    function addNewProduct() {
        axios.post('http://localhost:8888/shop-sw/back-end/public/', product)
            .then(response => {
                console.log(response.data);
            });

        setProduct({sku: '', name: '', price: '', productType: '', weight: '', size: '', height: '', width: '', length: ''});
    }

    return (
        <div>
            <header>
                <div className="container">
                    <h2>Product Add</h2>
                    <div className={classes.buttons}>
                        <MyButton onClick={formValid}>Save</MyButton>
                        <Link className={classes.link} to="/"><MyButton>Cancel</MyButton></Link>
                    </div>
                </div>
                <hr/>
            </header>
            <form id="product_form">
                <div>
                    <label>SKU</label>
                    <MyInput
                        id="sku"
                        value={product.sku}
                        onChange={e => setProduct({...product, sku: e.target.value})}
                        type="text"
                        placeholder='SKU'
                    />
                </div>

                <div>
                    <label>Name</label>
                    <MyInput
                        id="name"
                        value={product.name}
                        onChange={e => setProduct({...product, name: e.target.value})}
                        type="text"
                        placeholder='Name'
                    />
                </div>

                <div>
                    <label>Price ($)</label>
                    <MyInput
                        id="price"
                        value={product.price}
                        onChange={e => setProduct({...product, price: e.target.value})}
                        type="number"
                        placeholder='Price'
                    />
                </div>

                <div>
                    <label>Type Switcher</label>
                    <MySelect
                        id="productType"
                        value={product.productType}
                        onChange={e => setProduct({...product, productType: e})}
                        defaultValue="Type Switcher"
                        options={[
                            {id: 'Book', value: 'book', name: 'book'},
                            {id: 'DVD', value: 'dvd', name: 'dvd'},
                            {id: 'Furniture', value: 'furniture', name: 'furniture'}
                        ]}
                    />
                </div>

                {
                    product.productType === 'book' ? (
                        <div>
                            <label>Weight (KG)</label>
                            <MyInput
                                id="weight"
                                value={product.weight}
                                onChange={e => setProduct({...product, weight: e.target.value})}
                                type="number"
                                placeholder='Weight'
                            />
                        </div>
                    ) : product.productType === 'dvd' ? (
                        <div>
                            <label>Size (MB)</label>
                            <MyInput
                                id="size"
                                value={product.size}
                                onChange={e => setProduct({...product, size: e.target.value})}
                                type="number"
                                placeholder='Size'
                            />
                        </div>
                    ) : product.productType === 'furniture' ? (
                        <div>
                            <div>
                                <label>Height (CM)</label>
                                <MyInput
                                    id="height"
                                    value={product.height}
                                    onChange={e => setProduct({...product, height: e.target.value})}
                                    type="number"
                                    placeholder='Height'
                                />
                            </div>
                            <div>
                                <label>Width (CM)</label>
                                <MyInput
                                    id="width"
                                    value={product.width}
                                    onChange={e => setProduct({...product, width: e.target.value})}
                                    type="number"
                                    placeholder='Width'
                                />
                            </div>
                            <div>
                                <label>Length (CM)</label>
                                <MyInput
                                    id="length"
                                    value={product.length}
                                    onChange={e => setProduct({...product, length: e.target.value})}
                                    type="number"
                                    placeholder='Length'
                                />
                            </div>
                        </div>
                    ) : ( <p></p> )
                }
            </form>
        </div>
    );
};

export default ProductForm;