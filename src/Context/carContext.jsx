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
    const [selectedCarID, setSelectedCarID] = useState();
    const [selectedCarDetails, setSelectedCarDetails] = useState();
    const [garage, setGarage] = useState([]);
    const [logo] = useState('/Logo.jpg');

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
            selectedCarID,
            setSelectedCarID,
            selectedCarDetails,
            setSelectedCarDetails,
            garage,
            setGarage,
            logo,
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

export const useCarID = () => {
    const {selectedCarID, setSelectedCarID} = useContext(CarContext);
    return {selectedCarID, setSelectedCarID};
}

export const useCarDetails = () => {
    const {selectedCarDetails, setSelectedCarDetails} = useContext(CarContext);
    return {selectedCarDetails, setSelectedCarDetails};
}

export const useGarage = () => {
    const {garage, setGarage} = useContext(CarContext);
    return {garage, setGarage};
}

export const useLogo = () => {
    const {logo} = useContext(CarContext);
    return {logo};
}

export default CarContextProvider;