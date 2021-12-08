import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    // width: 100%;
    // height: 90vh;
    // object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;
const Title= styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid lightgray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: lightsteelblue;
    }
`;

const Product = () => {
    return (
        <Container>
            <AnnouncementBar/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images3.penguinrandomhouse.com/cover/9780593083758"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>How to Change</Title>
                    <Desc>Award-winning Wharton Professor and Choiceology podcast host Katy Milkman has devoted her career to the study of behavior change. In this ground-breaking book, Milkman reveals a proven path that can take you from where you are to where you want to be, with a foreword from psychologist Angela Duckworth, the best-selling author of Grit.</Desc>
                    <Price>$20</Price>
                    <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                        <Button>ADD TO CART</Button>
                    </AmountContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
