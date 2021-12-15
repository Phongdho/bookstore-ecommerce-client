import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const HomePage = () => {
    return (
        <div>
            {/* <AnnouncementBar/> */}
            <Navbar/>
            <HeroSlider />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

export default HomePage
