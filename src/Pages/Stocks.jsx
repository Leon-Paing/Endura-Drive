import React from "react";
import Navbar from "../components/Navbar";
import StockCars from "../components/StockCars";
import Footer from "../components/Footer";
import FilterItems from "../components/FilterItems";

const Stocks = () => {

    return(
        <>
            <Navbar/>
            <FilterItems/>
            <StockCars/>
            <Footer/>
        </>
    )
}

export default Stocks;