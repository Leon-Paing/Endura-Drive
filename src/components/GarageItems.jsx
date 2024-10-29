import React from "react";
import { useCarDetails, useCarID, useGarage } from "../Context/carContext";
import { useNavigate } from "react-router-dom";
import { IoTrash, IoTrashBin } from "react-icons/io5";

const GarageItems = () => {

    const navigate = useNavigate();

    const {selectedCarID, setSelectedCarID} = useCarID();
    const {selectedCarDetails, setSelectedCarDetails} = useCarDetails();
    const {garage, setGarage} = useGarage();

    const navigateCarDetails = (car) => {
        setSelectedCarDetails(car);
        navigate(`/details/${car.name.replace(/\s+/g, '-').toLowerCase()}`)
    }

    const handleCarDetails = (id) => {
        setSelectedCarID(id);
        const carDetails = data.filter((car) => car.id === id);
        setSelectedCarDetails(carDetails);
    }

    const removeFromGarage = (car) => {
        setGarage(garage.filter((item) => item.id !== car.id));
    }

    const navigateStockPage = () => {
        navigate('/stocks');
    }

    if(garage.length == 0){
        return(
            <div className="w-full h-full flex flex-col justify-center items-center text-3xl p-4 text-red-600 mt-5 border-b-2" >
                GARAGE IS EMPTY!
                <div className="w-full flex justify-center items-center">
                    <div className="flex xl:w-40 lg:w-40 md:w-40 sm:w-48 xs:w-48 justify-center items-center h-auto p-3 mt-8 border-0.5 border-red-600 rounded-md text-white bg-red-600 text-center text-xl  hover:bg-red-600 cursor-pointer" onClick={navigateStockPage}>
                    Add more Cars
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            <div className="w-full h-auto flex flex-wrap justify-center items-start p-2 gap-8 border-red-600 border-t-0.5 mt-2">
                {garage.map((item, index) => (
                    <div className="xl:w-1/4 lg:w-2/5 md:w-2/5 sm:w-full xs:w-full
                     h-[50vh] flex flex-col justify-center items-center mb-1 rounded-md" onTouchStart={()=>handleCarDetails(car.id)} onMouseEnter={()=>handleCarDetails(car.id)} key={index}>
                        <div className="w-full h-[30vh] whitespace-nowrap overflow-hidden p-3 bg-black text-white rounded-tl-md rounded-tr-md text-center text-ellipsis">{item.name}</div>
                       <div className="w-full h-[350vh] relative flex flex-col justify-center items-center p-0 overflow-hidden rounded-tl-sm rounded-tr-sm">
                            <img src={item.bannerPic} alt={item.name} className="w-full object-cover h-full" loading="lazy"/>
                            <div className="w-full h-auto flex justify-between items-center p-2 absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-sm">
                                <div className="text-xs float-start">Price: ${item.price}</div>
                                <div className="text-xs float-start">Mileage: {item.mileage}km</div>
                            </div>
                       </div> 
                       <div className="w-full h-1/3 flex justify-center items-center p-3 text-white hover:text-slate-300 cursor-pointer bg-slate-900 border-red-600 border-0.5" onClick={()=> navigateCarDetails(item)}>Check Details</div>
                       <div className="w-full h-full flex justify-end items-center p-1 cursor-pointer rounded-bl-md rounded-br-md text-red-600 border-none" onClick={() => removeFromGarage(item)}>
                        <IoTrash></IoTrash>Remove</div>
                    </div>
                ))}
            </div>
            <div className="flex xl:w-40 lg:w-40 md:w-40 sm:w-48 xs:w-48 justify-center items-center h-auto p-3 border-0.5 border-red-600 rounded-md text-white bg-red-600 text-center mt-4 text-xl  hover:bg-red-600 cursor-pointer" onClick={navigateStockPage}>
                    Add more Cars
                </div>
        </>
    )
}

export default GarageItems;