import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LazyLoad from "react-lazyload";

const ServiceSection2 = () => {

    const navigate = useNavigate();

    const handleContactPage = () => {
        navigate('/contact');
    }

    return(
        <>
        <AnimatePresence>
            <div className="w-screen h-auto flex flex-col p-4 xl:pl-32 mb-3">
                <motion.div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full h- auto text-4xl mb-3 flex justify-end"
                initial={{marginTop: 20, opacity:0}}
                whileInView={{marginTop:0, opacity:1}}
                viewport={{once: false, amount: 0.9}}
                transition={{duration: 1.2, ease:"linear"}}
                exit={{opacity:0}}
                >02.</motion.div>
                <motion.div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-start gap-3"
                initial={{ opacity:0.5}}
                whileInView={{ opacity:1}}
                viewport={{once: false, amount: 0.3}}
                transition={{duration: 1.5, ease: "linear"}}
                >
                    <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full xs:w-full flex flex-col h-full rounded-lg shadow-lg shadow-gray-500">
                        <LazyLoad once style={{backgroundImage: 'url("./ServiceTitle2Bg.jpg")'}}  className="w-full h-96 flex flex-col justify-end items-start xl:text-5xl xs:text-3xl text-right p-0 rounded-lg bg-cover text-slate-300 ">
                        <span className="w-full p-3 backdrop-blur-md flex justify-start">10+ Years of experience</span> 
                        <span className="flex w-full justify-end items-end p-2 backdrop-blur-md">in the automotive industry.</span>
                        </LazyLoad>
                        <div className="w-full h-[66px] p-2 text-white border-0.5 bg-red-600 border-red-600 flex justify-center items-center text-xl rounded-sm cursor-pointer hover:text-slate-300" onClick={handleContactPage}>Contact Us</div>
                    </div>
                    <LazyLoad once
                    style={{backgroundImage: 'url("./ServiceSection2Bg.jpg")'}}  className="xs:w-full xl:w-1/4 lg:w-1/4 md:w-2/5 sm:w-full h-98  flex-col xl:flex lg:flex md:flex sm:hidden xs:hidden justify-center items-center border-2 border-slate-700 gap-8 shadow-lg shadow-gray-500 rounded-lg font-oswald tracking-wider mb-4 bg-cover">
                        <div className="text-6xl text-green-700">MARKET</div>
                        <div className="text-3xl text-slate-300">-</div>
                        <div className="text-6xl text-slate-400">EXPERTISE</div>
                    </LazyLoad>
                </motion.div>
            </div>
            </AnimatePresence>
        </>
    )
}

export default ServiceSection2;