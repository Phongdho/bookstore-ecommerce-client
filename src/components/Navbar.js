import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import {useSelector} from 'react-redux';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;    
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;  
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    color: black;
`

const Right = styled.div`
    flex: 1;  
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Search style={{fontSize: "16px", color: "gray"}}/>
                        <Input/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{textDecoration:"none"}}><Logo>domdom</Logo></Link>
                </Center>
                <Right>
                    <Link to="/register" style={{textDecoration:"none", color: "black"}}>
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration:"none", color:"black"}}>
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart" style={{textDecoration:"none", color:"black"}}>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
