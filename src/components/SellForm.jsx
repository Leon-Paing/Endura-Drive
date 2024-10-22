import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SellForm = () => {

    return(
        <>
            <div className="w-screen h-110 flex justify-center items-center border-t-0.5 border-b-0.5">
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-fill xs:w-full xl:flex lg:flex md:flex sm:hidden xs:hidden h-full  justify-center items-center relative m-0">
                    <div className="w-full h-full flex justify-center items-center text-5xl absolute">Sell Your Car Here<FaArrowRightLong className="w-20 h-20 ms-10 text-red-600"></FaArrowRightLong></div>
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-full flex justify-center items-center relative">
                <img className="w-full h-full object-cover p-0" src="/sellFormSection.jpg" alt="" />
                    <div className="xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-5/6 xs:w-5/6 h-auto flex flex-col p-4 border-0.5 rounded-md absolute backdrop-blur-lg">
                        <div className="w-full h-auto p-3 flex justify-center items-center text-2xl">Sell Here!</div>
                        <input className="w-full p-3 h-auto rounded-lg mb-4 bg-transparent border-0.5 text-xl font-sans" type="text" placeholder="Brand" required/>
                        <input className="w-full p-3 h-auto rounded-lg mb-4 bg-transparent border-0.5 text-xl font-sans" type="text" placeholder="Model" required/>
                        <input className="w-full p-3 h-auto rounded-lg mb-4 bg-transparent border-0.5 text-xl font-sans" type="text" placeholder="Year" required/>
                        <input className="w-full p-3 h-auto rounded-lg mb-4 bg-transparent border-0.5 text-xl font-sans" type="text" placeholder="Mileage" required/>
                        <input className="w-full p-3 h-auto rounded-lg mb-4 bg-transparent border-0.5 text-xl font-sans" type="Email" placeholder="Email" required/>
                        <div className="w-full flex justify-end">
                            <div className="w-1/4 h-auto p-2 text-white border-0.5 bg-red-600 border-red-600 rounded-md flex justify-center text-xl">Send</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellForm;