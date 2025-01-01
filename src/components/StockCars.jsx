//This is a component which is used in /Pages/Stocks.jsx

import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";
import { useCarDetails, useCarID, useCarList, useGarage } from "../Context/carContext";
import { motion, AnimatePresence } from "framer-motion";
import data from "../database/data";


const StockCars = () => {

    const navigate = useNavigate();
    
    //custom useCarList hook from Context API which is CarContext.jsx
    const {carList, setCarList} = useCarList();

    //custom useCarID hook from Context API which is CarContext.jsx
    const {selectedCarID, setSelectedCarID} = useCarID();

    //custom useCarDetails hook from Context API which is CarContext.jsx
    const {selectedCarDetails, setSelectedCarDetails} = useCarDetails();

    //custom useGarage hook from Context API which is CarContext.jsx
    const {garage, setGarage} = useGarage();

    //navigate to /contact route
    const handleContactPage = () => {
        navigate("/contact");
    }

    //assign selectedCarDetails to car varibale and navigate to /details/:carname route
    const navigateCarDetails = (car) => {
        setSelectedCarDetails(car);
        navigate(`/details/${car.name.replace(/\s+/g, '-').toLowerCase()}`)
    }

    //function to set state of selectedCarDetails
    const handleCarDetails = (id) => {
        setSelectedCarID(id); //set selectedCarID state to given id parameter

        const carDetails = data.filter((car) => car.id === id); //filter by id from data which is original array and assign new array into carDetails variable

        setSelectedCarDetails(carDetails);  //set selectedCarDetails to new array carDetails
    }

    //add to garage via car variable by checking if selectedCarDetails is already in grage by some method which is Javascript built in method for checking existing items in array
    const addToGarage = (car) => {
        if(!garage.some((item) => item.id === car.id)){
            setGarage([...garage,car]);
        }
    }

    return(
        <>
        <AnimatePresence>
            <div className="w-screen h-auto flex flex-col justify-center items-center p-2 m-0">
                <div className="w-screen h-auto flex flex-wrap justify-center items-center p-3 mt-3 gap-8">
                    
                    {carList && carList.map((car, index)=> {
                        return(<motion.div onTouchStart={()=>handleCarDetails(car.id)} onMouseEnter={()=>handleCarDetails(car.id)} key={car.id} className="xl:w-2/7 lg:w-2/5 md:w-2/5 sm:w-1/3 xs:w-full h-[360px] flex flex-col justify-center items-center bg-transparent mb-3 shadow-lg shadow-gray-500 rounded-md"
                        initial={{ opacity: 0.1}}
                        animate = {{opacity: 1}}
                        transition={{duration: 1.5, ease:"linear"}}
                        >
                            <div className="w-full h-[180px] whitespace-nowrap overflow-hidden p-3 bg-black text-white rounded-tl-md rounded-tr-md text-center text-ellipsis">{car.name}</div>
                        <div className="w-full h-[250px] flex justify-center items-center p-0 relative ">
                        {car.mileage < 500 && (<div className="w-full absolute top-0  flex justify-center items-center p-0">
                            <motion.span className="w-full flex justify-center items-center rounded-sm p-2 backdrop-blur-md font-semibold" style={{backgroundColor: "#28a745", opacity:"0.9"}}
                            initial={{opacity:0}}
                            whileInView={{ opacity:0.9}}
                            viewport={{once:false, amount:1}}
                            transition={{duration: 1, ease:"linear"}}
                            >Brand New</motion.span>
                        </div>)}
                            <img className="w-full h-[210px] object-cover" src={car.bannerPic} alt="" loading="lazy"/>
                            <div className="w-full h-auto flex justify-between items-center p-2 absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-sm">
                            
                                <div className="text-xs float-start">Price: ${car.price}</div>
                                <div className="text-xs float-start">Mileage: {car.mileage}km</div>
                            </div>
                        </div>
                        
                        <div className="w-full h-full flex justify-center items-center p-3 bg-red-600 text-white cursor-pointer hover:bg-red-700" onClick={()=>navigateCarDetails(car)}>Check Details</div>

                        <div className="w-full h-full flex justify-center items-center p-3 bg-transparent text-slate-100 border-0.5 border-red-600 rounded-bl-md rounded-br-md hover:text-slate-300 cursor-pointer" onClick={() => addToGarage(car)}>{(garage.includes(car)) ? (<span style={{color: "#32CD32"}}>Added to Garage ✔</span>) : "Add to Garage"}</div>
                        </motion.div>)

                        
                    })}
                </div>
                <div className="flex xl:w-40 lg:w-40 md:w-40 sm:w-48 xs:w-48 justify-center items-center h-auto p-3 border-0.5 border-red-600 rounded-md text-white text-center mt-4 text-base  hover:bg-red-600 cursor-pointer" onClick={handleContactPage}>
                    Contact Us
                </div>
            </div>
            </AnimatePresence>
        </>
    )
}
export default StockCars;