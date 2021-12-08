import { NativeSelect } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';


const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;

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
    return (
        <Container>
            <AnnouncementBar/>
            <Navbar/>
            <Title>New and Popular</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Categories
                        </Option>
                        <Option>Literature</Option>
                        <Option>Business</Option>
                        <Option>Self-help</Option>
                        <Option>Thriller</Option>
                        <Option>Science</Option>
                        <Option>Memoirs</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>
                            Newest
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Footer/>
        </Container>
    )
}
