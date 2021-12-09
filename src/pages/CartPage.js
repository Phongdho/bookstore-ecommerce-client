import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import AnnouncementBar from '../components/AnnouncementBar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``;
const Wrapper= styled.div`
    padding: 20px;
`;
const Title= styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``

const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    text-transform: uppercase;
`

const ProductId = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600; 
    cursor: pointer;
`

const CartPage = () => {
    return (
        <Container>
            <AnnouncementBar/>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag (2)</TopText>
                        <TopText>Your wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images4.penguinrandomhouse.com/cover/9780593465066"/>
                                <Details>
                                    <ProductName><strong>Title:</strong> Call Us What We Carry</ProductName>
                                    <ProductId><strong>BOOKID:</strong> 938459374873847</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://images4.penguinrandomhouse.com/cover/9780593465066"/>
                                <Details>
                                    <ProductName><strong>Title:</strong> Call Us What We Carry</ProductName>
                                    <ProductId><strong>BOOKID:</strong> 938459374873847</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECK OUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default CartPage
