import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import Navbar from '../components/Navbar'

const HomePage = () => {
    return (
        <div>
            <AnnouncementBar/>
            <Navbar/>
            <HeroSlider />
            <Footer />
        </div>
    )
}

export default HomePage
