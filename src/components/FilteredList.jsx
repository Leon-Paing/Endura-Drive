//This is a component which is used in /Pages/Stocks.jsx

import React from "react";
import { useBody, useBrand, useCarList, useModel, useYear } from "../Context/carContext";
import { FaTrashCan } from "react-icons/fa6";
import data from "../database/data";

const FilteredList = () => {

    //custom useCarList hook from Context API which is CarContext.jsx
    const {carList, setCarList} = useCarList();

    //custom useBrand hook from Context API which is CarContext.jsx
    const {selectedBrand, setSelectedBrand} = useBrand();

    //custom useModel hook from Context API which is CarContext.jsx
    const {selectedModel, setSelectedModel} = useModel();

    //custom useYear hook from Context API which is CarContext.jsx
    const {selectedYear, setSelectedYear} = useYear();

    //custom useBody hook from Context API which is CarContext.jsx
    const {selectedBody, setSelectedBody} = useBody();

    //function to clear all filters and display items of original data
    const handleDeleteFilter = () => {
        setCarList(data); //setCarList to original data which is initial array
        setSelectedBrand(''); //clear selectedBrand state
        setSelectedModel(''); //clear selectedModel state
        setSelectedYear(); //clear selectedYear state
        setSelectedBody(''); //clear selectedBody state
    }

    return(
        <>
            {carList !== data &&<div className="w-full p-2 xl:pl-20 lg:pl-16 md:pl-16 flex xs:justify-start gap-2 text-base flex-wrap">
                {selectedBrand &&
                    <div className="p-2 border-red-600 border-r-2">{selectedBrand}</div>
                }

                {selectedModel &&
                    <div className="p-2 border-red-600 border-r-2">{selectedModel}</div>
                }

                {selectedYear && 
                    <div className="p-2 border-red-600 border-r-2">{selectedYear}</div>
                }
                
                {selectedBody &&
                    <div className="p-2 border-red-600 border-r-2">{selectedBody}</div>
                }

                 <div className="text-red-600 cursor-pointer flex gap-1 justify-center items-center p-2" onClick={handleDeleteFilter}><FaTrashCan></FaTrashCan>Clear Filters</div>
            </div>}
        </>
    )
}

export default FilteredList;