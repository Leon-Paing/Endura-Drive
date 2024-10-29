import React from "react";
import { useCarDetails } from "../Context/carContext";

const DetailsBanner = () => {

    const {selectedCarDetails, setSelectedCarDetails} = useCarDetails();

    return(
        <>
            {selectedCarDetails && (<div className="w-screen xl:h-screen lg:h-screen md:h-screen sm:h-[500px] xs:h-[300px] flex justify-center items-center">
                <img className="w-full h-full object-cover" src={selectedCarDetails.bannerPic} alt={selectedCarDetails.name} loading="lazy"/>
            </div>)}
        </>
    )
}

export default DetailsBanner;