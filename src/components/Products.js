import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fbfefb;
`;

const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
`;
const Products = ({cat, filters, sort}) => {

    const [products,setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    //Get all books data with or without a specific categories
    useEffect(()=> {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat
                     ? `http://localhost:5000/api/products?category=${cat}` 
                     : "http://localhost:5000/api/products");

                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    },[cat]);

    //Filter books based on categories 
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

    //Sort books based on prices
    useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);

    return (
        <div>
        <Title>{!cat ? "Newest Arrival" : ""}</Title>
        <Container>
            {cat 
                ? filteredProducts.map((item, index) => <ProductItem item = {item} key ={index}/>)
                : products.slice(-10).map((item, index) => <ProductItem item = {item} key ={index}/>)}
        </Container>
        </div>
    );
};

export default Products
