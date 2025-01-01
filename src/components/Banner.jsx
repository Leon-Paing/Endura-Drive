//This is a component which is used in /Pages/Home.jsx

import React from "react";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate();

    //navigate to /about route
    const handleAboutUs = () => {
        navigate('/about');
    }

    //navigate to /contact route
    const handleContactUs = () => {
        navigate('/contact');
    }

    //navigate to /sell route
    const handleSell = () => {
        navigate('/sell');
    }

    //navigate to /srocks route
    const handleStocks = () => {
        navigate('/stocks');
    }

    return(
        <>
            <div className="flex justify-center items-center flex-wrap w-full h-auto m-0 border-b-0.5 border-red-600 bg-transparent z-0">
                <LazyLoad className="flex flex-col xl:w-1/4 lg:w-1/2 md:w-1/2 xs:w-full h-auto justify-center items-center relative cursor-pointer ">
                    <img className="w-full h-full object-cover cursor-pointer" src="./BannerAboutUs.jpg" alt="" loading="lazy"/> 
                    <div className="flex flex-col inset-0 w-full h-full absolute justify-center items-start bg-black bg-opacity-50 text-white hover:text-slate-400 transition-colors duration-500 p-4" onClick={handleAboutUs}>
                    <p className="text-lg text-red-600 float-left w-full mb-3">About</p>
                    <h2 className="text-2xl float-left w-1/2">Know more about us</h2>
                    </div>
                </LazyLoad>
                <LazyLoad className="flex flex-col xl:w-1/4 lg:w-1/2 md:w-1/2 xs:w-full h-auto justify-center items-center relative cursor-pointer">
                    <img className="w-full h-full object-cover" src="./BannerStocks.jpg" alt="" loading="lazy"/> 
                    <div className="flex flex-col inset-0 w-full h-full absolute justify-center items-start bg-black bg-opacity-50 text-white hover:text-slate-400 transition-colors duration-500 p-4" onClick={handleStocks}>
                        <p className="text-lg text-red-600 w-full mb-3">Stocks</p>
                        <h2 className="text-2xl float-left w-1/2">Explore Available Cars</h2>
                    </div>
                </LazyLoad>
                <LazyLoad className="flex flex-col xl:w-1/4 lg:w-1/2 md:w-1/2 xs:w-full h-auto justify-center items-center relative cursor-pointer">
                    <img className="w-full h-full object-cover" src="./BannerSell.jpg" alt="" loading="lazy"/> 
                    <div className="flex flex-col inset-0 w-full h-full absolute justify-center items-start bg-black bg-opacity-50 text-white hover:text-slate-400 transition-colors duration-500 p-4" onClick={handleSell}>
                    <p className="text-lg text-red-600 w-full mb-3">Sell</p>
                    <h2 className="text-2xl w-1/2">We buy and exchange</h2>
                    </div>
                </LazyLoad>
                <LazyLoad className="flex flex-col xl:w-1/4 lg:w-1/2 md:w-1/2 xs:w-full h-auto justify-center items-center relative cursor-pointer">
                    <img className="w-full h-full object-cover" src="./BannerContact.jpg" alt="" loading="lazy"/> 
                    <div className="flex flex-col inset-0 w-full h-full absolute justify-center items-start bg-black bg-opacity-50 text-white hover:text-slate-400 transition-colors duration-500 p-4" onClick={handleContactUs}>
                    <p className="text-lg text-red-600 w-full mb-3">Contact</p>
                    <h2 className="text-2xl w-1/2">Come and join with us!</h2>
                    </div>
                </LazyLoad>
            </div>
        </>
    )
}

export default Banner;