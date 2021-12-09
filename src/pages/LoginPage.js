import React, {useState} from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiFetch';
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255,255,255,0.3), 
        rgba(255,255,255,0.3)
        ),
        url("https://i.ibb.co/3ryvsyt/Eugenio-mazzone-6ywyo2qta-Z8-unsplash.jpg") center;
    background-size: cover;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: #e8e8e4;
    opacity: 0.8;
    border-radius: 20px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const Title = styled.h1`
    font-weight: 300; 
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
    background-color: #83c5be;
    cursor: pointer;
    &:disabled {
        color: lightgray;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
`
const Link = styled.a``;

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error} = useSelector((state) => state.user);


    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {email, password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign-in</Title>
                <Form>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>Log In</Button>
                    {error && <Error>Something went wrong</Error>}
                    <Link>Forgot your password?</Link>
                    <Link>Not have an account? Create one</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LoginPage

