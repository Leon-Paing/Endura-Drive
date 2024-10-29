import React from "react";
import NavGarage from "../components/NavGarage";
import GarageTitle from "../components/GarageTitle";
import GarageItems from "../components/GarageItems";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

const Garage = () => {

    return(
        <>
            <NavGarage/>
            <div className="w-screen h-auto flex flex-col justify-center items-center bg-slate-800 text-white">
                <GarageTitle/>
                <GarageItems/>
                <ContactInfo/>
                <Footer/>
            </div>
        </>
    )
 }

export default Garage;