import React from "react";
import { useNavigate } from "react-router-dom";

const AboutBanner2 = () => {

    const navigate = useNavigate();

    const handleContactPage = () => {
        navigate('/contact')
    }

    return(
        <>
            <div className="w-screen h-auto flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  p-2 justify-center items-center gap-0 bg-slate-900">
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-0 mb-2">
                        <img className="shadow-inner flex object-cover rounded-lg" src="./AboutBanner2.jpg" alt="" />
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-full flex flex-col p-4 justify-center items-center overflow-hidden">
                    <div className="w-full h-24 text-3xl float-left justify-start items-center">At Endura <span className="text-red-600">Drive</span>,</div>
                    <div className="w-full xl:h-52 float-left text-xl tracking-widest font-sans justify-start text-justify">We pride ourselves on providing an exceptional customer experience, offering transparent deals and personalized services. Our team of automotive experts is here to guide you every step of the way, ensuring you find the perfect vehicle to match your lifestyle.</div>
                    <div className="w-full h-36 flex justify-start items-center">
                        <div className="w-32 flex text-white bg-red-600 p-4 rounded-md cursor-pointer hover:text-slate-300" onClick={handleContactPage}>Contact Us</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBanner2;