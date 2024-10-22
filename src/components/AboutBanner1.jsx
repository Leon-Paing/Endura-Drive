import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AboutBanner1 = () => {

    const navigate = useNavigate();

    const handleContactPage = () => {
        navigate('/contact')
    }

    return(
        <><AnimatePresence>
            <div className="w-screen h-auto flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  p-2 justify-center items-center gap-0 bg-slate-900 mb-6">
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-full flex flex-col p-4 justify-center items-center overflow-hidden">
                    
                    <motion.div className="w-full h-28 text-3xl float-left flex text-red-600 justify-start items-center"
                    initial={{marginLeft: -300, opacity:0}}
                    animate = {{marginLeft:0, opacity:1}}
                    transition={{duration: 1.5, ease:"linear"}}
                    >About Us</motion.div>
                    <motion.div className="w-full xl:h-48 float-left text-xl tracking-widest font-sans justify-start text-justify"
                    initial={{marginLeft: -1000, opacity:0}}
                    animate = {{marginLeft:0, opacity:1}}
                    transition={{duration: 2.5, ease:"linear"}}
                    >Welcome to Endura <span className="text-red-600">Drive</span>
                    , Myanmar's trusted car dealership for buying, selling, and exchanging both new and used vehicles. Whether you're looking for a reliable pre-owned car or a brand-new model, we've got you covered with a wide range of options to suit every need and budget.</motion.div>
                    
                    <div className="w-full h-36 flex justify-start items-center">
                        <motion.div className="w-36 flex justify-center text-white bg-red-600 p-4 rounded-md cursor-pointer hover:text-slate-300" onClick={handleContactPage}
                        initial={{scale:0,  opacity:0}}
                        animate = {{scale:1, opacity:1}}
                        transition={{duration: 2, ease:"linear"}}
                        >Contact Us</motion.div>
                    </div>
                </div>
                <motion.div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-0">
                    <motion.img className="shadow-inner flex object-cover rounded-lg" src="./AboutBanner1.jpg" alt="" 
                    initial ={{scale: 0.2, opacity:0}}
                    animate = {{scale: 1 ,opacity: 1}}
                    transition={{duration: 3, ease: "linear"}}/>
                </motion.div>
            </div>
            </AnimatePresence>
        </>
    )
}

export default AboutBanner1;