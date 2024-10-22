import React from "react";
import { useNavigate,useLocation } from "react-router-dom";

const AboutSection = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleHomePage = ()=> {
        navigate('/');
    }

    const getLinkClass = (path) => {
        return location.pathname === path ? "text-red-600 pointer-events-none" : "text-white";
      };

    return(
        <>
            <div className="w-screen h-40 flex flex-col justify-center items-center p-2 bg-slate-900 border-b-0.5 border-red-600">
                <div className="w-full h-1/2 flex p-2 justify-center text-3xl">About Us</div>
                <div className="w-full h-1/2 p-2 flex justify-center items-center">
                    <span className="me-1 hover:text-slate-400 cursor-pointer text-xl" onClick={handleHomePage}>Home</span>/<span className={`ms-1 ${getLinkClass('/about')} text-xl`}>About Us</span>
                </div>
            </div>
        </>
    )
}

export default AboutSection;