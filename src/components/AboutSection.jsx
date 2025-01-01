//This is a component which is used in /Pages/AboutUs.jsx

import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {

    const navigate = useNavigate();
    const location = useLocation();

    //navigate to / route (which is home page/index page)
    const handleHomePage = ()=> {
        navigate('/');
    }

    //get route name from browser url and assign it to path variable to change UI
    const getLinkClass = (path) => {
        return location.pathname === path ? "text-red-600 pointer-events-none" : "text-white";
      };

    return(
        <>
        <AnimatePresence>
            <div className="w-screen h-40 flex flex-col justify-center items-center p-2 bg-slate-900 border-b-0.5 border-red-600">
                <div className="w-full h-1/2 flex p-2 justify-center text-3xl">About Us</div>
                <motion.div className="w-full h-1/2 p-2 flex justify-center items-center"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5, duration:1, ease:"linear"}}
                >
                    <span className="me-1 hover:text-slate-400 cursor-pointer text-xl" onClick={handleHomePage}>Home</span>/<span className={`ms-1 ${getLinkClass('/about')} text-xl`}>About Us</span>
                </motion.div>
            </div>
            </AnimatePresence>
        </>
    )
}

export default AboutSection;