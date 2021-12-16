import React, {useState, useEffect} from 'react'
import { useLocation, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';


const Container = styled.div`
    // background-color: #f8edeb;
`;
const Title = styled.h1`
    margin: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 44px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;

export const ProductList = () => {

    const params = useParams();
    const {category} = params;

    const history = useHistory();
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilter] = useState({categories: category});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        });
    };

    useEffect (() => {
        history.push(`/products/${filters.categories}`)
    }, [filters]);

    return (
        <Container>
            {/* <AnnouncementBar/> */}
            <Navbar/>
            <Title>{cat.toUpperCase()} BOOKS</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="categories" onChange={handleFilters}>
                        <Option disabled>
                            Categories
                        </Option>
                        <Option>literature</Option>
                        <Option>business</Option>
                        <Option>self-help</Option>
                        <Option>thriller</Option>
                        <Option>science</Option>
                        <Option>memoirs</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e=> setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Footer/>
        </Container>
    )
}
