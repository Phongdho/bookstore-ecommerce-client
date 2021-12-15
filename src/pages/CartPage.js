import { Add, DeleteOutlined, Remove } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AnnouncementBar from '../components/AnnouncementBar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useSelector, useDispatch} from 'react-redux';
import {remQuant, addQuant, removeProduct} from "../redux/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../apiService";
import { useHistory } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

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

    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total * 100 * 0.9,
            });
            history.push("/success", {
                stripeData: res.data,
                products: cart });
          } catch {}
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total * 0.9, history]);

    const handleQuantity = (type, product) => {
        if (type === 'desc') {
            product.quantity > 1 && dispatch(remQuant(product))
        } else {
            dispatch(addQuant(product))
        }
    };

    const handleDelete = (product) => {
        dispatch(removeProduct(product));
    };

    return (
        <Container>
            {/* <AnnouncementBar/> */}
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
                        {cart.products.map(product => (<Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><strong>Title:</strong> {product.title}</ProductName>
                                    <ProductId><strong>BOOKID:</strong> {product._id}</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove style={{cursor:"pointer"}} onClick={() => handleQuantity('desc', product)}/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add style={{cursor:"pointer"}} onClick={() => handleQuantity('inc', product)}/>
                                </ProductAmountContainer>
                                <ProductPrice>USD {(product.price * product.quantity).toLocaleString()}</ProductPrice>
                                <DeleteOutlined onClick={() => handleDelete(product)} style={{cursor: "pointer", marginTop: "10px"}}/>
                            </PriceDetail>
                            <Hr />
                        </Product>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>USD {(cart.total)?.toLocaleString()}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Standard Shipping</SummaryItemText>
                            <SummaryItemPrice>USD +{(cart.total * 0.05).toLocaleString()}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Our 15% Discount</SummaryItemText>
                            <SummaryItemPrice>USD -{(cart.total * 0.15).toLocaleString()}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>USD {(cart.total * 0.90).toLocaleString()}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="domdom's bookstore"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbaavdT8XbfZqUycEtXo2wDRF4J6l8Arytw&usqp=CAU"
                            billingAddress
                            shippingAddress
                            description={`Your total is USD ${(cart.total * 0.90).toLocaleString()}`}
                            amount={cart.total * 100 * 0.9}
                            token={onToken}
                            stripeKey={KEY}
                            >
                            <Button>CHECKOUT NOW</Button>
                            </StripeCheckout>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default CartPage
