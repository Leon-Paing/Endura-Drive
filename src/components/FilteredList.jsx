import React from "react";
import { useBody, useBrand, useCarList, useModel, useYear } from "../Context/carContext";
import { FaTrashCan } from "react-icons/fa6";
import data from "../database/data";

const FilteredList = () => {

    
    const {carList, setCarList} = useCarList();
    const {selectedBrand, setSelectedBrand} = useBrand();
    const {selectedModel, setSelectedModel} = useModel();
    const {selectedYear, setSelectedYear} = useYear();
    const {selectedBody, setSelectedBody} = useBody();

    const handleDeleteFilter = () => {
        setCarList(data);
        setSelectedBrand('');
        setSelectedModel('');
        setSelectedYear();
        setSelectedBody('');
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