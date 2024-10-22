import React, { useState } from "react";
import data from "../database/data";
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDropdown } from "react-icons/io";

const YearFilter = () => {

    const [dropDownVisible, setdropDownVisible] = useState(false);

    const hanldeDropDownVisible = () => {
        setdropDownVisible(!dropDownVisible);
    }
    const sortByYear = (arr) => {
        let n = arr.length;
        
        for (let i = 0; i < n ; i++) {
          let minIndex = i;
      
          for (let j = i + 1; j < n; j++) {
            if (arr[j] && arr[minIndex] && arr[j].year > arr[minIndex].year) {
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

    const sortedCars = sortByYear(data);

    return(
    <>
        <div className="xl:w-1/6 lg:w-1/6 md:w-1/6 sm:w-full xs:w-full h-auto flex flex-col justify-center items-center mb-1 p-0 relative">
            <div className="w-full h-11 flex justify-between items-center border-red-600 border-0.5 rounded-sm bg-transparent p-3 cursor-pointer" onClick={hanldeDropDownVisible}>Year
            <IoIosArrowDropdown className="ms-3 text-red-600"></IoIosArrowDropdown>
            </div>
            <AnimatePresence>
            {dropDownVisible &&(<motion.div 
            initial = {{maxHeight: 0, opacity: 0}}
            animate = {{maxHeight: 411, opacity: 1}}
            exit={{maxHeight:0, opacity:1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="flex flex-col w-full overflow-y-auto bg-gray-800 backdrop-blur-lg bg-opacity-40 z-40 absolute top-12 transition-all ease-out rounded  border-0.5">
            {[...new Set(sortedCars.map((car) => car.year))].map((uniqueYear, index) => (<div className="flex w-full h-auto text-center justify-center items-center p-2 hover:bg-red-600 cursor-pointer border-0.5" key={index}>{uniqueYear}</div>))}
            </motion.div>)}
            </AnimatePresence>
        </div>
    </>)
}

export default YearFilter;