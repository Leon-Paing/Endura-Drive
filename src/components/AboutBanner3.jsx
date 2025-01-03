//This is a component which is used in /Pages/Home.jsx

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AboutBanner3 = () => {

    const navigate = useNavigate();

    //navigate to /contact route
    const handleContactPage = () => {
        navigate('/contact')
    }

    return(
        <>
        <AnimatePresence>
            <div className="w-screen h-auto flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  p-2 justify-center items-center gap-0 bg-slate-900 mb-6">
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-full flex flex-col p-4 justify-center items-center overflow-hidden">
                    <motion.div className="w-full xl:h-28 xs:h-20 text-3xl float-left justify-start items-center xl:flex lg:flex md:flex font-bold"
                    initial ={{marginLeft:-200, opacity:0.3}}
                    whileInView={{marginLeft:0, opacity:1}}
                    viewport={{once:true, amount:0.5}}
                    transition={{ duration: 1.5, ease:"linear"}}
                    exit={{opacity:0}}
                    >Located in 
                    
                    <span className="text-red-600 ms-2 ">Myanmar</span>

                    <FaLocationDot className="text-red-600 ms-1 xl:block lg:block md:block sm:hidden xs:hidden"></FaLocationDot>,
                    </motion.div>
                    <motion.div className="w-full xl:h-32 xs:h-40 float-left text-xl tracking-widest font-oswald justify-start text-justify"
                    initial ={{opacity:0}}
                    whileInView={{ opacity:1}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration: 1.5, ease:"linear"}}
                    exit={{opacity:0}}
                    >We offer flexible solutions whether you're <span className="text-red-600">selling</span> your car, looking to <span className="text-red-600">trade</span> it in for an upgrade, or <span className="text-red-600">buying</span> your next dream vehicle. Our mission is to make your car shopping journey smooth, enjoyable, and hassle-free.</motion.div>
                    <div className="w-full h-36 flex justify-start items-center">
                        <motion.div className="w-36 flex justify-center text-white bg-red-600 p-4 rounded-md cursor-pointer hover:text-slate-300" onClick={handleContactPage}
                        initial ={{scale:0, opacity:0}}
                        whileInView={{scale:1, opacity:1}}
                        viewport={{once:true, amount:0.5}}
                        transition={{ duration: 1.5, ease:"linear"}}
                        exit={{scale:0, opacity:0}}
                        >Contact Us</motion.div>
                    </div>
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-0">
                <iframe className="w-full h-[500px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.312601237581!2d96.15106759589035!3d16.83461619469625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194a7a9703cb5%3A0xfab26e49f10b391b!2sKabar%20Aye%20Pagoda%20Rd%2C%20Yangon!5e0!3m2!1sen!2smm!4v1728736393106!5m2!1sen!2smm" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </AnimatePresence>
        </>
    )
}

export default AboutBanner3;