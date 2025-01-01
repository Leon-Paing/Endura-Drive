//This is a component which is used in /Pages/Sell.jsx

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceTitle = () => {

    return(
        <>
        <AnimatePresence>
            <motion.div className="w-full h-auto p-4 flex justify-start items-center text-5xl xl:pl-32 xl:pr-32 text-white"
            initial={{marginTop: 30, opacity:0}}
            whileInView={{marginTop:10, opacity:1}}
            viewport={{once: true, amount:0.8}}
            transition={{duration:1.5, ease:"linear"}}
            >
                WHY WITH US?
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default ServiceTitle;