import React, { useEffect, useState } from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useCarDetails } from "../Context/carContext";
import { useNavigate } from "react-router-dom";

const DetailsSection1 = () => {

    const navigate = useNavigate();

    const {selectedCarDetails, setSelectedCarDetails} = useCarDetails();

    const navigateStockPage = () => {
        navigate('/stocks');
    }

    return(
        <>
            <div className="w-screen h-auto p-1 flex flex-col justify-center items-center">
                <div className="w-full flex justify-start items-center p-3 text-lg cursor-pointer" onClick={navigateStockPage}>
                    <IoArrowUndoSharp className="text-red-600 me-2">
                    </IoArrowUndoSharp>
                    Stocks
                </div>

                {selectedCarDetails && (<div className="w-full h-auto flex justify-start items-center p-3 text-3xl">
                     {selectedCarDetails.name}
                </div>)}

                {selectedCarDetails && (<div className="w-full h-auto flex justify-center items-center text-lg">
                    <div className="w-1/2 flex justify-start items-center p-3">
                        Price: ${selectedCarDetails.price}
                    </div>
                    <div className="w-1/2 flex justify-end items-center p-3">
                        Mileage: {selectedCarDetails.mileage}km
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default DetailsSection1;