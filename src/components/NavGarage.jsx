//This is a component which is used in /Pages/Garage.jsx

import React from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useGarage } from "../Context/carContext";
import { useNavigate } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";

const NavGarage = () => {

    const navigate = useNavigate();

    //custom useGarage hook from Context API which is CarContext.jsx
    const {garage, setGarage} = useGarage();

    //navigate to /stocks route
    const navigateStockPage = () => {
        navigate('/stocks');
    }

    return(
        <>
            <nav className="w-screen xs:text-xxs sm:text-sm md:text-base lg:text-base xl:text-base h-[10vh] bg-slate-800 text-slate-100 top-0 p-0 flex sticky justify-center items-center z-50 shadow-sm shadow-slate-900">
                <div className="w-1/4 flex justify-start items-center p-3 text-lg cursor-pointer" onClick={navigateStockPage}>
                    <IoArrowUndoSharp className="text-red-600 me-2"></IoArrowUndoSharp>
                    Stocks
                </div>
                <div className="w-3/4 p-4 flex justify-end items-center xl:text-3xl xs:text-2xl text-red-600">MY GARA<GiSteeringWheel></GiSteeringWheel>E</div>
            </nav>
        </>
    )
}

export default NavGarage;