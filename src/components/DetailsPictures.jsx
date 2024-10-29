import React from "react";
import { useCarDetails } from "../Context/carContext";

const DetailsPictures = () => {

    const {selectedCarDetails, setSelectedCarDetails} = useCarDetails();

    return(
        <>
            {/* <div className="w-full flex justify-start items-center p-4 text-2xl text-red-600">Detail Pics :</div> */}

            {selectedCarDetails && (
                <div className="w-full h-auto flex flex-wrap p-1">
                    {selectedCarDetails.detailPic.map((pic, index)=> (
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full" key={index}>
                            <img className="w-full h-full object-cover" src={pic} alt="Detail Pic"/>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default DetailsPictures;