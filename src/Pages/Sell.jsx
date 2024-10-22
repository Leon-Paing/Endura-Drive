import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellForm from "../components/SellForm";
import ContactInfo from "../components/ContactInfo";

const Sell = () => {

    return(
        <>
            <Navbar/>
            <SellForm/>
            <ContactInfo/>
            <Footer/> 
        </>
    )
}

export default Sell;