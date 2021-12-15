import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 30px;
    background-color: #fbfefb;
    color: #b5838d;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AnnouncementBar = () => {
    return (
        <Container>
            Giving your loved ones the gift of words for Christmas with our 15% discount!
        </Container>
    )
}

export default AnnouncementBar
