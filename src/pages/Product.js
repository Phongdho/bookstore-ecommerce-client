import { Add, Remove} from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router';
import { publicRequest } from '../apiService';
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from 'react-redux';


const Container = styled.div`
    height: 100%;
    background: url(https://i.ibb.co/Z2YZD2M/Image-from-rawpixel-id-2541804-png.png);
`;
const Wrapper = styled.div`
    padding: 35px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    // width: 100%;
    // height: 90vh;
    // object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
const InfoContainer = styled.div`
    flex: 2;
    padding: 0 50px;
`;
const Title= styled.h1`
    font-weight: 200;
    font-size: 50px;
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
        } else if (type === "plus" && quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    
    const handleClick = () => {
        dispatch(addProduct({...product, quantity})
        );
    };

    return (
        <Container>
            {/* <AnnouncementBar/> */}
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <span style={{fontSize: "24px"}}><strong>Author: </strong>{product.author}</span>
                    <Desc style={{display:"inline-flex"}}><strong>{product.highlight}</strong></Desc>
                    <Desc>{product.desc}</Desc>
                    <Price>USD {(product.price * 1).toLocaleString()}</Price>
                    {
                        product?.stock >= 1 ? <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("minus")} style={{cursor:"pointer"}}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("plus")} style={{cursor:"pointer"}}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                    : <div>"Temporarily Out Of Stock. Check back later!"</div>
                    }
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}


            
export default Product
