import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellForm from "../components/SellForm";
import ContactInfo from "../components/ContactInfo";
import ServiceTitle from "../components/ServiceTitle";
import ServiceSection1 from "../components/ServiceSection1";
import ServiceSection2 from "../components/ServiceSection2";
import ServiceSection3 from "../components/ServiceSection3";

const Sell = () => {

    return(
        <>
            <Navbar/>
            <SellForm/>
            <ServiceTitle/>
            <ServiceSection1/>
            <ServiceSection2/>
            <ServiceSection3/>
            <ContactInfo/>
            <Footer/> 
        </>
    )
}

export default Sell;