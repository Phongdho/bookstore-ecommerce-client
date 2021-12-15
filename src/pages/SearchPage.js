import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductItem from '../components/ProductItem'
const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
    text-align: center;
    font-weight: 300;
    font-size: 40px;
`;

export const SearchPage = () => {
    let searchProduct = JSON.parse(localStorage.getItem("Search"));
    const [search, setSearch] = useState(searchProduct);
    console.log("search", searchProduct);

    useEffect(() => {
        setSearch(searchProduct);
    }, [searchProduct]);

    return (
        <Container>
            <AnnouncementBar/>
            <Navbar/>
            <Title>Your Search Result:</Title>
            {
                searchProduct && searchProduct.map((e, index) => {                 
                return  <ProductItem item={e} key={index}/>
                })
            }
            <Footer/>
        </Container>
    )
}