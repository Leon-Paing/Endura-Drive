//This is a component which is used in /Pages/Sell.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LazyLoad from "react-lazyload";

const ServiceSection3 = () => {

    const navigate = useNavigate();

    //navigate to /contact route
    const handleContactPage = () => {
        navigate('/contact');
    }

    return(
        <>
        <AnimatePresence>
            <div className="w-screen h-auto flex flex-col p-4 xl:pl-32">
                <motion.div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full h- auto text-4xl mb-3 "
                initial={{marginTop: 20, opacity:0}}
                whileInView={{marginTop:0, opacity:1}}
                viewport={{once: false, amount: 0.9}}
                transition={{duration: 1.2, ease:"linear"}}
                exit={{opacity:0}}
                >03.</motion.div>
                <motion.div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-start gap-3"
                initial={{ opacity:0.5}}
                whileInView={{ opacity:1}}
                viewport={{once: false, amount: 0.3}}
                transition={{duration: 1.5, ease: "linear"}}
                >
                    <LazyLoad once style={{backgroundImage: 'url("./ServiceSection3Bg.jpg")'}} className="xs:w-full xl:w-1/4 lg:w-1/4 md:w-2/5 sm:w-full h-98  flex-col xl:flex lg:flex md:flex sm:hidden xs:hidden justify-center items-center border-2 border-slate-700 gap-8 shadow-lg shadow-gray-500 rounded-lg font-oswald tracking-wider mb-4 bg-cover">
                        <div className="text-3xl font-extrabold text-red-600 ">COMPREHENSIVE</div>
                        <div className="text-4xl text-white font-extrabold">-</div>
                        <div className="text-4xl  font-extrabold text-blue-400">SUPPORT</div>
                    </LazyLoad>
                    <div className="xl:w-2/4 xs:w-full flex flex-col h-full rounded-lg shadow-lg shadow-gray-500">
                        <LazyLoad once style={{backgroundImage: 'url("./ServiceTitle3Bg.jpg")'}} className="w-full h-96 flex justify-start items-end xl:text-5xl xs:text-3xl text-justify p-0 rounded-lg bg-cover bg-opacity-30 text-gray-300">
                        <span className="backdrop-blur-md bg-slate-900 bg-opacity-30 w-full p-2">Selling, Trading or just exploring, Our support team is always ready!</span>
                        </LazyLoad>
                        <div className="w-full h-[66px] p-2 text-white border-0.5 bg-red-600 border-red-600 flex justify-center items-center text-xl rounded-sm cursor-pointer hover:text-slate-300"
                        onClick={handleContactPage}
                        >Contact Us</div>
                    </div>
                </motion.div>
            </div>
            </AnimatePresence>
        </>
    )
}

export default ServiceSection3;