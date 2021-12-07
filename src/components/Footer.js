import { Facebook, Instagram, Pinterest } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
`;

const Logo = styled.div``
const Desc = styled.div``
const MediaContainer = styled.div``;
const MediaIcon = styled.div``;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>domdom</Logo>
                <Desc>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</Desc>
                <MediaContainer>
                    <MediaIcon>
                        <Facebook/>
                    </MediaIcon>
                    <MediaIcon>
                        <Instagram/>
                    </MediaIcon>
                    <MediaIcon>
                        <Pinterest/>
                    </MediaIcon> 
                </MediaContainer>
                
            </Left>
        </Container>
    )
}

export default Footer
