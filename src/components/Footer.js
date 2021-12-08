import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: #f8f9fa;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h2`
    font-weight: 500;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const MediaContainer = styled.div`
    display: flex;
`;
const MediaIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h4`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    flex: 1;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>domdom</Logo>
                <Desc>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</Desc>
                <MediaContainer>
                    <MediaIcon color="3B5999">
                        <Facebook/>
                    </MediaIcon>
                    <MediaIcon color="E4405F">
                        <Instagram/>
                    </MediaIcon>
                    <MediaIcon color="E60023">
                        <Pinterest/>
                    </MediaIcon> 
                </MediaContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Books</ListItem>
                    <ListItem>Categories</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
               <ContactItem><Room style={{marginRight: "10px"}}/>Bitexco, HCMC, VN</ContactItem>
               <ContactItem><Phone style={{marginRight: "10px"}} />+84 999 9999</ContactItem>
               <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@domdom.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
