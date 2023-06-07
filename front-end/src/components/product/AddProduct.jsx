import React from 'react';
import axios from "axios";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import classes from "../../styles/Product.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


//Product adding page
const AddProduct = () => {

    const navigate = useNavigate();

    const {
        register,
        watch,
        formState: { errors, submitCount, isValid },
        handleSubmit
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            productType: ""
        }
    });

    // Post new product
    function addNewProduct(data) {
        axios.post('http://localhost:8888/shop-sw/back-end/public/', data)
            .then(response => {
                navigate('/');
            });
    }

    // Sku unique validation
    async function skuValidation(sku) {
        let skuList = [];
        let isFound = false;

        // Get sku list
        await axios.get('http://localhost:8888/shop-sw/back-end/public/sku')
            .then(response => {
                skuList = response.data;
                isFound = skuList.includes(sku);
            });

        return isFound;
    }

    return (
        <div>
            <form id="product_form" onSubmit={handleSubmit(addNewProduct)}>
                <header>
                    <div className="container">
                        <h2>Product Add</h2>
                        <div className={classes.buttons}>
                            <MyButton type="submit">Save</MyButton>
                            <Link className={classes.link} to="/"><MyButton>Cancel</MyButton></Link>
                        </div>
                    </div>
                    <hr/>
                </header>
                {!isValid && submitCount > 0 && <div className={classes.msgSubmitData}>Please, submit required data</div>}
                <div>
                    <label>SKU</label>
                    <MyInput
                        {...register('sku', {
                            required: true,
                            validate: async (value) => {
                                if(await skuValidation(value) === true) {
                                    return "SKU should be unique for each product";
                                }
                            }
                        })}
                        id="sku"
                        placeholder='SKU'
                        style = {errors?.sku && {border: '1px solid red', }}
                    />
                    <div className={classes.msgIncorrectType}>
                        {errors?.sku && <p>{errors?.sku?.message}</p>}
                    </div>
                </div>

                <div>
                    <label>Name</label>
                    <MyInput
                        {...register('name', {
                            required: true
                        })}
                        id="name"
                        placeholder='Name'
                        style = {errors?.name && {border: '1px solid red', }}
                    />
                </div>

                <div>
                    <label>Price ($)</label>
                    <MyInput
                        {...register('price', {
                            required: true,
                            pattern: {
                                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                message: 'Please, provide the data of indicated type'
                            }
                        })}
                        id="price"
                        placeholder='Price'
                        style = {errors?.price && {border: '1px solid red'}}
                    />
                    <div className={classes.msgIncorrectType}>
                        {errors?.price && <p>{errors?.price?.message}</p>}
                    </div>
                </div>

                <div>
                    <label>Type Switcher</label>
                    <select
                        className={classes.select}
                        style = {errors?.productType && {border: '1px solid red', color: 'red'}}
                        id="productType"
                        {...register('productType', {required: true})}
                    >
                        <option value="" disabled>Type Switcher</option>
                        <option id="Book" value="Book">Book</option>
                        <option id="DVD" value="DVD">DVD</option>
                        <option id="Furniture" value="Furniture">Furniture</option>
                    </select>
                </div>

                {
                    watch('productType') === 'Book' ? (
                        <div>
                            <label>Weight (KG)</label>
                            <MyInput
                                {...register('weight', {
                                    required: true,
                                    pattern: {
                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                        message: 'Please, provide the data of indicated type'
                                    }
                                })}
                                id="weight"
                                placeholder='Weight'
                                style = {errors?.weight && {border: '1px solid red', }}
                            />
                            <div className={classes.msgIncorrectType}>
                                {errors?.weight && <p>{errors?.weight?.message}</p>}
                            </div>
                        </div>
                    ) : watch('productType') === 'DVD' ? (
                        <div>
                            <label>Size (MB)</label>
                            <MyInput
                                {...register('size', {
                                    required: true,
                                    pattern: {
                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                        message: 'Please, provide the data of indicated type'
                                    }
                                })}
                                id="size"
                                placeholder='Size'
                                style = {errors?.size && {border: '1px solid red', }}
                            />
                            <div className={classes.msgIncorrectType}>
                                {errors?.size && <p>{errors?.size?.message}</p>}
                            </div>
                        </div>
                    ) : watch('productType') === 'Furniture' ? (
                        <div>
                            <div>
                                <label>Height (CM)</label>
                                <MyInput
                                    {...register('height', {
                                        required: true,
                                        pattern: {
                                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                            message: 'Please, provide the data of indicated type'
                                        }
                                    })}
                                    id="height"
                                    placeholder='Height'
                                    style = {errors?.height && {border: '1px solid red', }}
                                />
                                <div className={classes.msgIncorrectType}>
                                    {errors?.height && <p>{errors?.height?.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label>Width (CM)</label>
                                <MyInput
                                    {...register('width', {
                                        required: true,
                                        pattern: {
                                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                            message: 'Please, provide the data of indicated type'
                                        }
                                    })}
                                    id="width"
                                    placeholder='Width'
                                    style = {errors?.width && {border: '1px solid red', }}
                                />
                                <div className={classes.msgIncorrectType}>
                                    {errors?.width && <p>{errors?.width?.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label>Length (CM)</label>
                                <MyInput
                                    {...register('length', {
                                        required: true,
                                        pattern: {
                                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                            message: 'Please, provide the data of indicated type'
                                        }
                                    })}
                                    id="length"
                                    placeholder='Length'
                                    style = {errors?.length && {border: '1px solid red', }}
                                />
                                <div className={classes.msgIncorrectType}>
                                    {errors?.length && <p>{errors?.length?.message}</p>}
                                </div>
                            </div>
                        </div>
                    ) : ( <div></div> )
                }
            </form>
        </div>
    );
};

export default AddProduct;
