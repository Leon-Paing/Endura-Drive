//This is a component which is used in /Pages/Details.jsx

import React from "react";
import { useCarDetails } from "../Context/carContext";

const DetailsSpecifications = () => {

    //custom useCarDetails hook from Context API which is CarContext.jsx
    const {selectedCarDetails, setSelectedCarDetails} = useCarDetails();

    return (
        <>
            <div className="w-full h-auto flex flex-col justify-center items-center p-1">
            {selectedCarDetails && (
             <div className="w-full flex flex-col justify-start items-center xl:text-xl xs:text-base">
                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Brand</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.brand}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Model</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.model}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Year</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.year}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Color</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.color}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Body-Type</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.bodyType}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Doors</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.doors}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Engine</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.engine}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Transmission</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.transmission}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Fuel</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.fuel}</span>
                    </div>

                    <div className="w-full flex justify-between items-center p-4">
                        <span className="w-1/2 border-r-0.5 border-red-600 me-2 p-4 flex items-center justify-center">Drive-Train</span>
                        <span className="w-1/2 p-4 flex items-center justify-center">{selectedCarDetails.driveTrain}</span>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default DetailsSpecifications;