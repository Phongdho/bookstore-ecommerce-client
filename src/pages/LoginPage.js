import React from 'react'
import styled from 'styled-components'

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
`;
const Link = styled.a``;

const LoginPage = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign-in</Title>
                <Form>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Button>Submit</Button>
                    <Link>Forgot your password?</Link>
                    <Link>Not have an account? Create one</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LoginPage

