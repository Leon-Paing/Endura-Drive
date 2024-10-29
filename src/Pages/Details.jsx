import React from "react";
import Navbar from "../components/Navbar";
import DetailsSection1 from "../components/DetailsSection1";
import DetailsBanner from "../components/DetailsBanner";
import DetailsSpecifications from "../components/DetailsSpecifications";
import DetailsPictures from "../components/DetailsPictures";
import Footer from "../components/Footer";

const Details = () => {

    return(
        <>
            <Navbar/>
            <DetailsSection1/>
            <DetailsBanner/>
            <DetailsSpecifications/>
            <DetailsPictures/>
            <Footer/>
        </>
    )

}

export default Details;