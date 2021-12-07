import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import HeroSlider from '../components/HeroSlider'
import Navbar from '../components/Navbar'

const HomePage = () => {
    return (
        <div>
            <AnnouncementBar/>
            <Navbar/>
            <HeroSlider />
        </div>
    )
}

export default HomePage
