import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import ProductItem from './ProductItem';
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat, filters, sort}) => {
    // console.log(cat,filters,sort);
    const [products,setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(()=> {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat
                     ? `http://localhost:5000/api/products?category=${cat}` 
                     : "http://localhost:5000/api/products");
                console.log("data is", res);
                console.log("cat", cat)
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    },[cat]);
    // console.log("product", products)

    useEffect (() => {
        if(cat && products) {
            setFilteredProducts(
            products.filter((item) => 
                Object.entries(filters).every(([key,value]) =>
                    item[key].includes(value)
                ) 
            )
        )};
    }, [products,cat,filters]);
    // console.log("filter số nhiều", filters);
    // console.log("filter product", filteredProducts);
    return (
        <Container>
            {filteredProducts && filteredProducts.map((item) => (
                <ProductItem item = {item} key ={item.id}/>
            ))}
        </Container>
    )
}

export default Products
