import React from "react";
import { GiCarWheel } from "react-icons/gi";
import LazyLoad from "react-lazyload";
import data from "../database/data";
import { useNavigate, useLocation } from "react-router-dom";

const StockCars = () => {

    const navigate = useNavigate();

    const handleContactPage = () => {
        navigate("/contact");
    }

    const sortByPrice = (arr) => {
        let n = arr.length;
        
        for (let i = 0; i < n ; i++) {
          let minIndex = i;
      
          for (let j = i + 1; j < n; j++) {
            if (arr[j] && arr[minIndex] && arr[j].price > arr[minIndex].price) {
              minIndex = j;
            }
          }

          if (arr[i] && arr[minIndex] && minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
          }
        }
        return arr;
      }

    const sortedCars = sortByPrice(data);


    return(
        <>
            <div className="w-screen h-auto flex flex-col justify-center items-center p-2 m-0">
                <div className="w-screen h-auto flex flex-wrap justify-between items-center p-3 mt-5 border-b-0.5">
                    
                    {sortedCars.map((car, index)=> {
                        return(<LazyLoad key={index} className="xl:w-2/7 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full h-[360px] flex flex-col justify-center items-center bg-transparent mb-3" once>
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
                <div className="flex xl:w-40 lg:w-40 md:w-40 sm:w-48 xs:w-48 justify-center items-center h-auto p-3 border-0.5 border-red-600 rounded-md text-white text-center mt-4 text-base  hover:bg-red-600 cursor-pointer" onClick={handleContactPage}>
                    Contact Us
                </div>
            </div>
        </>
    )
}
export default StockCars;