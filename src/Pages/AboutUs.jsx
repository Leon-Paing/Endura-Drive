import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutBanner1 from "../components/AboutBanner1";
import AboutBanner2 from "../components/AboutBanner2";
import AboutBanner3 from "../components/AboutBanner3";
import AboutSection from "../components/AboutSection";


const AboutUs = () => {

    return(
        <>
        <div className="w-screen h-auto justify-center items-center p-0 bg-slate-900">
            <Navbar/>
            <AboutSection/>
            <AboutBanner1/>
            <AboutBanner2/>
            <AboutBanner3/>
            <Footer/>
        </div>
        </>
    )
}

export default AboutUs;