import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { useGarage, useLogo } from "../Context/carContext";

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    //custom useGarage hook from Context API which is CarContext.jsx
    const {garage, setGarage} = useGarage();

     //custom useLogo hook from Context API which is CarContext.jsx
    const {logo} = useLogo();

    //get route name from browser url and assign it to path variable to change UI
    const getLinkClass = (path) => {
        return location.pathname === path ? "text-red-600 pointer-events-none" : "text-white";
      };
    
    //get route name from browser url and assign it to path variable to change UI
    const getClassHome = (path) => {
        return location.pathname === path ? "fixed" : "sticky" //if className is home, the postion will become fixed, it not the position will become sticky
    };

    //navigate to /garage route
    const handleGaragePage = () => {
        navigate('/garage');
    }

    //navigate to /about route
    const handleAboutPage = () => {
        navigate('/about');
    }

    //navigate to /contact route
    const handleContactPage = () => {
        navigate('/contact');
    }

    //navigate to /stocks route
    const handleStocksPage = () => {
        navigate('/stocks');
    }

    //navigate to /sell route
    const handleSellPage = () => {
        navigate('/sell');
    }

    //navigate to / route which is home page or index page
    const handleHomePage = () => {
        navigate('/');
    }

    return(
        <>
            <nav className={`${getClassHome("/")} w-full xs:text-xxs sm:text-sm md:text-base lg:text-base xl:text-base xs:h-[10vh] sm:h-[12vh] md:h-[15vh] lg:h-[15vh] xl:h-[15vh] backdrop-blur-sm text-slate-100 top-0 p-0 flex justify-between items-center z-50`}>
                    <div className="w-1/6 flex h-full justify-center items-center p-2 cursor-pointer" onClick={handleHomePage}>
                        <img className="w-full h-full object-cover" src={logo} alt="Logo" />
                    </div>
                    <div className="w-5/6 h-full flex flex-col justify-end items-end p-0">
                        <div className="w-full h-2/3 flex justify-end justify-items-end items-center text-white pr-0 gap-1 m-0">
                            <div className="xl:w-96 xs:hidden h-auto xl:flex text-center justify-center items-center xl:p-3 lg:p-3 md:p-3 xs:p-2 xl:text-base sm:text-sm xs:text-xxxs text-slate-100"><FaLocationDot className="text-red-600 text-base"/> &nbsp;KabarAye Pagoda Road, Yangon, Myanmar</div>
                            <div className="xl:w-40 xs:hidden h-full xl:flex text-center justify-center items-center xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xxxs"><FaPhone className="text-red-600 text-sm"/>&nbsp; +95 9773456789</div>
                            <div className="xl:w-40 md:w-36 sm:w-36 xs:w-1/4 xs:h-9 xl:h-full lg:h-full md:h-full flex bg-red-600 text-center justify-center items-center cursor-pointer hover:bg-red-500 rounded-sm xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xxs p-1" onClick={handleGaragePage}>My Garage ({garage.length})</div>
                        </div>
                        
                        <div className="w-4/5 h-2/3 flex justify-end justify-items-end items-center text-white p-1 gap-1">
                            
                                <div className={`${getLinkClass("/stocks")} xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-14 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-r-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white`}onClick={handleStocksPage}>Stocks</div>
                            <div className={`${getLinkClass("/sell")} xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-14 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-l-2 border-r-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white`} onClick={handleSellPage}>Sell</div>
                            <div className={`${getLinkClass("/about")} xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-16 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-l-2 border-r-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white`} onClick={handleAboutPage}>About Us</div>
                            <div className={`${getLinkClass("/contact")} xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-14 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-l-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white`} onClick={handleContactPage}>Contact</div>  
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;