import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import {FormControl, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import {useSelector} from 'react-redux';
import axios from "axios";

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
    const [qTitle, setQTitle] = useState("");
    const [search, setSearch] = useState([]);
    const quantity = useSelector(state => state.cart.quantity);
    const history = useHistory();
    const handleSearchChange = (e) => {
        setQTitle(e.target.value);
    }

    useEffect(() => {
        console.log("it's me", search);
        localStorage.setItem("Search", JSON.stringify(search));
    }, [search])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(qTitle && `http://localhost:5000/api/products?title=${qTitle}`);
        setSearch(res.data);
        history.push(`/search`);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearchChange}
                        style={{backgroundColor:"lightgrey"}}
                        />
                        <Button onClick={handleSubmit} variant="outline-secondary">Search</Button>
                    </Form>
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
