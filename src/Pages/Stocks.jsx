import React from "react";
import Navbar from "../components/Navbar";
import StockCars from "../components/StockCars";
import Footer from "../components/Footer";
import FilterItems from "../components/FilterItems";
import FilteredList from "../components/FilteredList";

const Stocks = () => {

    return(
        <>
            <Navbar/>
            <FilterItems/>
            <FilteredList/>
            <StockCars/>
            <Footer/>
        </>
    )
}

export default Stocks;