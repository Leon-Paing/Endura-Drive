import React from "react";
import { GiCarWheel } from "react-icons/gi";
import LazyLoad from "react-lazyload";
import data from "../database/data";

const AvailableCarSection = () => {

    return(
        <>
            <div className="w-screen h-auto flex flex-col justify-center items-center p-2 mt-2 border-t-0.5">
                <div className="w-full h-14 text-red-600 bg-transparent flex justify-center items-center text-center text-3xl underline">
                    Challenge Your Dreams!
                </div>
                <div className="w-screen h-auto flex flex-wrap justify-between items-center p-3 mt-5">
                    
                    {data.map((car, index)=> {
                        return(<LazyLoad key={index} className="xl:w-2/7 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full h-[360px] flex flex-col justify-center items-center bg-transparent mb-3">
                            <div className="w-11/12 h-[180px] whitespace-nowrap overflow-hidden p-3 bg-black text-white rounded-tl-md rounded-tr-md text-center text-ellipsis">{car.name}</div>
                        <div className="w-11/12 h-[250px] flex justify-center items-center p-0 relative">
                            <img className="w-full h-[210px] object-cover" src={car.bannerPic} alt="" loading="lazy"/>
                            <div className="w-full h-auto flex justify-between items-center p-2 absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-sm">
                                <div className="text-xs float-start">Price: ${car.price}</div>
                                <div className="text-xs float-start">Mileage: {car.mileage}km</div>
                            </div>
                        </div>
                        
                        <div className="w-11/12 h-full flex justify-center items-center p-3 bg-red-600 text-white cursor-pointer hover:bg-red-700">Check Details</div>

                        <div className="w-11/12 h-full flex justify-center items-center p-3 bg-transparent text-slate-100 border-0.5 border-red-600 rounded-bl-md rounded-br-md hover:text-slate-300 cursor-pointer">Add to My Garage</div>
                        </LazyLoad>)
                    })}
                </div>
                <div className="w-40 flex justify-center items-center h-auto p-3 border-0.5 border-red-600 rounded-md text-white text-center mt-4 text-base  hover:bg-red-600 cursor-pointer">
                    Chase more...<GiCarWheel className="text-slate-400 w-6 h-6"/>
                </div>
            </div>
        </>
    )
}

export default AvailableCarSection;