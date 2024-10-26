import React, { useState } from "react";
import data from "../database/data";
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDropdown } from "react-icons/io";
import { useBody, useCarList } from "../Context/carContext";

const BodyFilter = () => {

    const [dropDownVisible, setdropDownVisible] = useState(false);

    const {carList, setCarList} = useCarList();
    const {selectedBody, setSelectedBody} = useBody();

    const hanldeDropDownVisible = () => {
        setdropDownVisible(!dropDownVisible);
    }

    const handleSelectedBody = (body) => {
        setSelectedBody(body);
        if(carList){
        const newlist = carList.filter((car) => car.bodyType === body)
        
        setdropDownVisible(!dropDownVisible);
        setCarList(newlist);}
    }

    return(
    <>
        <div className="xl:w-1/6 lg:w-1/6 md:w-1/6 sm:w-full xs:w-full h-auto flex flex-col justify-center items-center mb-1 p-0 relative">
            <div className="w-full h-11 flex justify-between items-center border-red-600 border-0.5 rounded-sm bg-transparent p-3 cursor-pointer" onClick={hanldeDropDownVisible}>Body Type
            <IoIosArrowDropdown className="ms-3 text-red-600"></IoIosArrowDropdown>
            </div>
            <AnimatePresence>
            {dropDownVisible &&(<motion.div 
            initial = {{maxHeight: 0, opacity: 0}}
            animate = {{maxHeight: 411, opacity: 1}}
            exit={{maxHeight:0, opacity:1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="flex flex-col w-full overflow-y-auto bg-gray-800 backdrop-blur-lg bg-opacity-40 z-40 absolute top-12 transition-all ease-out rounded  border-0.5">
            {[...new Set(carList.map((car) => car.bodyType))].map((uniqueBody, index) => (<div className="flex w-full h-auto text-center justify-center items-center p-2 hover:bg-red-600 cursor-pointer  border-0.5" key={index}
            onClick={()=> handleSelectedBody(uniqueBody)}
            >{uniqueBody}</div>))}
            </motion.div>)}
            </AnimatePresence>
        </div>
    </>)
}

export default BodyFilter;