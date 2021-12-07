import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 30px;
    background-color: #98c9a3;
    color: white;
    font-weight: 300;
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
