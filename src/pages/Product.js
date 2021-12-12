import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router';
import { publicRequest } from '../apiService';
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from 'react-redux';


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

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                // console.log("data is", res);
                setProduct(res.data);
            } catch (err) {}
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "minus") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    
    const handleClick = () => {
        dispatch(addProduct({...product, quantity})
        );
    };

    return (
        <Container>
            <AnnouncementBar/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc><strong>{product.highlight}</strong></Desc>
                    <Desc>{product.desc}</Desc>
                    <Price>VND {(product.price * 1000).toLocaleString()}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("minus")} style={{cursor:"pointer"}}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("plus")} style={{cursor:"pointer"}}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
