//This is a component which is used in /Pages/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutBanner2 = () => {

    const navigate = useNavigate();

    //navigate to /contact route
    const handleContactPage = () => {
        navigate('/contact')
    }

    return(
        <>
            <div className="w-screen h-auto flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  p-2 justify-center items-center gap-0 bg-slate-900">
                <motion.div
                initial ={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once: true, amount:0.4}}
                transition ={{duration:2.5, ease: "circInOut"}}
                exit={{opacity:0}}
                className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-0 mb-2"
                >
                        <img className="shadow-inner flex object-cover rounded-lg" src="./AboutBanner2.jpg" alt="" />
                </motion.div>
                <motion.div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-full flex flex-col p-4 justify-center items-center overflow-hidden"
                initial={{ opacity:0 }}
                whileInView={{ opacity:1}}
                viewport={{once: true, amount:0.5}}
                transition={{duration:2.5, ease: "linear"}}
                exit={{marginRight:100, opacity:0}}
                >
                    <div className="w-full h-20 text-3xl font-bold float-left justify-start items-center font-oswald">At Endura <span className="text-red-600">Drive</span>,</div>
                    <div className="w-full h-42 float-left text-xl xl:tracking-widest xs:tracking-wider font-oswald justify-start text-justify">We pride ourselves on providing an exceptional customer experience, offering transparent deals and personalized services. Our team of <span className="text-red-600">Automotive experts</span> is here to guide you every step of the way, ensuring you find the perfect vehicle to match your lifestyle.</div>
                    <div className="w-full h-36 flex justify-start items-center"
                    >
                        <motion.div className="w-36 flex justify-center text-white bg-red-600 p-4 rounded-md cursor-pointer hover:text-slate-300 font-oswald"
                        initial={{scale:0, opacity:0}}
                        whileInView={{scale:1, opacity:1}}
                        viewport={{once: true, amount:0.5}}
                        transition={{duration: 1.5, ease:"linear"}}
                        exit={{scale: 0.5, opacity:0}}
                        onClick={handleContactPage}>Contact Us</motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default AboutBanner2;