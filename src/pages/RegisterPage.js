import React, {useState} from 'react'
import styled from 'styled-components'
import { register } from '../redux/apiFetch';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';

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
    width: 40%;
    background-color: #e8e8e4;
    opacity: 0.8;
    border-radius: 20px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
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
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;
const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
    background-color: #83c5be;
    cursor: pointer;
`;

const RegisterPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {username, email, password});
        history.push('/login');
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign up with us</Title>
                <Form>
                    {/* <Input placeholder="name"/>
                    <Input placeholder="last name"/> */}
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    {/* <Input placeholder="confirm password"/> */}
                    <Agreement>
                        We never share you personal information with any third parties
                    </Agreement>
                    <Button onClick={handleClick}>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default RegisterPage
