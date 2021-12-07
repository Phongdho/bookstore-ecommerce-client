import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fbfbf2;
    opacity: 0.6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    z-index: 3;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${(props) => props.slideOrder * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    height: 60%;
    border-radius: 20px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Desc = styled.p`
    font-size: 25px;
    font-weight: 300;
    font-style: italic;
    margin: 50px 0px;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`;

const HeroSlider = () => {
    
    const [slideOrder, setSlideOrder] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideOrder (slideOrder > 0 ? slideOrder - 1 : 2)
        } else {
            setSlideOrder (slideOrder < 2 ? slideOrder + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideOrder={slideOrder} >
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Explore</Button>
                        </InfoContainer>
                    </Slide>    
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default HeroSlider
