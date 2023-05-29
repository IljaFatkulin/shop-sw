import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const ProductFilter = ({filter, setFilter}) => {
    function reset() {
        setFilter({sort: '', search: ''});
    }

    return (
        <div style={{display: 'inline-block', marginRight: '66%'}} >
            <MyInput
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder="Search"
            />
            <br/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorting"
                options={[
                    {value: 'sku', name: 'by SKU'},
                    {value: 'name', name: 'by Name'}
                ]}
            />
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default ProductFilter;