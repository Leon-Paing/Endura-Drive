import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AvailableCarSection from "../components/AvailableCarSection";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

const Home = () => {
    
    return(
        <>
            <Navbar/>
            <Hero/>
            <Banner/>
            <AvailableCarSection/>
            <ContactInfo/>
            <Footer/>
        </>
    )
}

export default Home;