import React from "react";
import './styles/App.css';
import ProductForm from "./components/product/ProductForm";
import ProductsList from "./components/product/ProductsList";

function App() {

    return (
    <div className="App">
        <ProductsList/>

        <br/><br/><br/>

        <ProductForm/>
    </div>
    );

}


export default App;


/*
const bodyInputRef = useRef();

    const addNewProduct = (e) => {
        e.preventDefault();
        // const newPost = {
        //     id: Date.now(),
        //     title,
        //     body: bodyInputRef.current.value
        // }
        // setPosts([...posts, {...post, id: Date.now()}]);
        // setTitle('');
        // bodyInputRef.current.value = '';
        // setPost({title: '', body: ''})
        // var formData = new FormData();
        // formData.append('data', data);

        // let sku = new FormData();
        // sku.append('sku', product.sku);



        <PostList posts={posts} title="Post list 1" />

        {output}
        button onClick={getTextFromApi}>Get</button>
        <button onClick={send}>Send</button>

        <button onClick={getProducts}>Load</button>

        <ProductList products={products}/>

        <MyInput
            ref={bodyInputRef}
            type="text"
            placeholder='Description'
        />
 */