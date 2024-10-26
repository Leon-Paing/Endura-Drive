import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import data from '../database/data';

const CarContext = createContext();

const CarContextProvider = ({children}) => {

    const [carList, setCarList] = useState(data);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedYear, setSelectedYear] = useState();
    const [selectedBody, setSelectedBody] = useState(""); 

    return(
        <CarContext.Provider value={{
            carList,
            setCarList,
            selectedBrand,
            setSelectedBrand,
            selectedModel,
            setSelectedModel,
            selectedYear,
            setSelectedYear,
            selectedBody,
            setSelectedBody,
        }}>
            {children}
        </CarContext.Provider>
    )
}

export const useCarList = () => {
    const {carList, setCarList} = useContext(CarContext);
    return {carList, setCarList};
}

export const useBrand = () => {
    const {selectedBrand, setSelectedBrand} = useContext(CarContext);
    return {selectedBrand, setSelectedBrand};
}

export const useModel = () => {
    const {selectedModel, setSelectedModel} = useContext(CarContext);
    return {selectedModel, setSelectedModel};
}

export const useYear = () => {
    const {selectedYear, setSelectedYear} = useContext(CarContext);
    return {selectedYear, setSelectedYear};
}

export const useBody = () => {
    const {selectedBody, setSelectedBody} = useContext(CarContext);
    return {selectedBody, setSelectedBody};
}


export default CarContextProvider;