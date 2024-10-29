import React from "react";
import { GiCarWheel } from "react-icons/gi";
import LazyLoad from "react-lazyload";
import data from "../database/data";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "../Context/carContext";



const AvailableCarSection = () => {

    const {garage, setGarage} = useGarage();

const addToGarage = (car) => {
    if(!garage.some((item) => item.id === car.id)){
        setGarage([...garage,car]);
    }
}

    const navigate = useNavigate();

    const handleStocksPage = () => {
        navigate('/stocks');
    }

    const selectionSort = (arr) => {
        let n = arr.length;
        
        for (let i = 0; i < n ; i++) {
          let minIndex = i;
      
          for (let j = i + 1; j < n; j++) {
            // Guard against undefined or missing properties
            if (arr[j] && arr[minIndex] && arr[j].price > arr[minIndex].price) {
              minIndex = j;
            }
          }
      
          // Swap the found minimum element with the first element if it's not undefined
          if (arr[i] && arr[minIndex] && minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
          }
        }
        return arr;
      }
      
      // Sort the cars by price
      let sortedCars = selectionSort(data);


    return(
        <>
        <AnimatePresence>
            <div className="w-screen h-auto flex flex-col justify-center items-center mt-2 p-2">
                <motion.div className="w-full h-14 text-red-600 bg-transparent flex justify-center items-center text-center xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl"
                initial = {{scale:0.1, opacity:0.1}}
                whileInView={{scale:1, opacity:1}}
                viewport={{once: true, amount:0.7}}
                transition={{duration: 1, ease:"linear"}}
                >
                    ( Challenge Your Dreams )
                </motion.div>
                <div className="w-screen h-auto flex flex-wrap justify-between items-center p-3 mt-5">
                    
                    {sortedCars.slice(0, 4).map((car, index)=> {
                        return(<LazyLoad key={index} className="xl:w-2/7 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full h-[360px] flex flex-col justify-center items-center bg-transparent mb-3 shadow-lg shadow-gray-500 rounded-md" once>
                            <div className="w-full h-[180px] whitespace-nowrap overflow-hidden p-3 bg-black text-white rounded-tl-md rounded-tr-md text-center text-ellipsis">{car.name}</div>
                        <div className="w-full h-[250px] flex justify-center items-center p-0 relative">
                            <img className="w-full h-[210px] object-cover" src={car.bannerPic} alt="" loading="lazy"/>
                            <div className="w-full h-auto flex justify-between items-center p-2 absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-sm">
                                <div className="text-xs float-start">Price: ${car.price}</div>
                                <div className="text-xs float-start">Mileage: {car.mileage}km</div>
                            </div>
                        </div>
                        
                        <div className="w-full h-full flex justify-center items-center p-3 bg-red-600 text-white cursor-pointer hover:bg-red-700">Check Details</div>

                        <div className="w-full h-full flex justify-center items-center p-3 bg-transparent text-slate-100 border-0.5 border-red-600 rounded-bl-md rounded-br-md hover:text-slate-300 cursor-pointer" onClick={() => addToGarage(car)}>{(garage.includes(car)) ? "Added to Garage " : "Add to Garage"}</div>
                        </LazyLoad>)
                    })}
                </div>
                <div className=" flex xl:w-40 lg:w-40 md:w-40 sm:w-48 xs:w-48 justify-center items-center h-auto p-3 border-0.5 border-red-600 rounded-md text-white text-center mt-4 mb-3 text-base  hover:bg-red-600 cursor-pointer" onClick={handleStocksPage}>
                    Chase more...<GiCarWheel className="text-slate-400 w-6 h-6"/>
                </div>
            </div>
            </AnimatePresence>
        </>
    )
}
export default AvailableCarSection;