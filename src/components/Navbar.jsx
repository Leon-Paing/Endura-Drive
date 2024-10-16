import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {

    const [garage, setGarage] = useState(2);

    return(
        <>
            <nav className="w-full xs:text-xxs sm:text-sm md:text-base lg:text-base xl:text-base xs:h-[10vh] sm:h-[12vh] md:h-[15vh] lg:h-[15vh] xl:h-[15vh] backdrop-blur-sm text-slate-100 top-0 p-0 flex justify-between items-center fixed z-50">
                    <div className="w-1/6 flex h-full justify-center items-center p-2">
                        <img className="w-full h-full object-cover" src="./Logo.jpg" alt="" />
                    </div>
                    <div className="w-3/4 xs:w-4/5 h-full flex flex-col justify-end items-end p-0">
                        <div className="w-full h-2/3 flex justify-end justify-items-end items-center text-white pr-0 gap-2 m-0">
                            <div className="xl:w-96 xs:w-96 h-full flex text-center justify-center items-center p-3 xl:text-base sm:text-sm xs:text-xxxs text-slate-100"><FaLocationDot className="text-red-600"/> &nbsp;KabarAye Pagoda Road, Yangon, Myanmar</div>
                            <div className="xl:w-40 xs:w-80 h-full flex text-center justify-center items-center xl:text-base lg:text-base md:text-base sm:text-sm xs:text-xxs"><FaPhone className="text-red-600"/>&nbsp; +95 9776357441</div>
                            <div className="xl:w-40 md:w-36 sm:w-36 xs:w-52 xs:h-9 xl:h-full lg:h-full md:h-full flex bg-red-600 text-center justify-center items-center cursor-pointer hover:bg-red-500 rounded-sm xl:text-base lg:text-base md:text-base sm:text-xs xs:text-xxs" href="">My Garage ({garage})</div>
                        </div>
                        <div className="w-4/5 h-2/3 flex justify-end justify-items-end items-center text-white p-1 gap-1">
                            <div className="xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-14 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-r-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white" href="">Stocks</div>
                            <div className="xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-14 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-l-2 border-r-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white" href="">Sell</div>
                            <div className="xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-16 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-l-2 border-r-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white" href="">About Us</div>
                            <div className="xl:w-40 lg:w-40 md:w-36 sm:w-16 xs:w-14 xl:h-12 lg:h-10 md:h-9 xs:h-7 flex text-center justify-center items-center border-red-500 border-l-2 cursor-pointer rounded-sm hover:text-slate-300 active:bg-red-600 active:text-white" href="">Contact</div>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;