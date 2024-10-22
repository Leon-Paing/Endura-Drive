import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AboutBanner3 = () => {

    const navigate = useNavigate();

    const handleContactPage = () => {
        navigate('/contact')
    }

    return(
        <>
            <div className="w-screen h-auto flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  p-2 justify-center items-center gap-0 bg-slate-900 mb-6">
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-full flex flex-col p-4 justify-center items-center overflow-hidden">
                    <div className="w-full h-36 text-3xl float-left justify-start items-center xl:flex lg:flex md:flex ">Conveniently located in 
                    
                    <span className="text-red-600 ms-2 ">Myanmar</span>

                    <FaLocationDot className="text-red-600 ms-1 xl:block lg:block md:block sm:hidden xs:hidden"></FaLocationDot>,
                    </div>
                    <div className="w-full xl:h-52 float-left text-xl tracking-widest font-sans justify-start text-justify">We offer flexible solutions whether you're <span className="text-red-600">selling</span> your car, looking to <span className="text-red-600">trade</span> it in for an upgrade, or <span className="text-red-600">buying</span> your next dream vehicle. Our mission is to make your car shopping journey smooth, enjoyable, and hassle-free.</div>
                    <div className="w-full h-36 flex justify-start items-center">
                        <div className="w-36 flex text-white bg-red-600 p-4 rounded-md cursor-pointer hover:text-slate-300" onClick={handleContactPage}>Contact Us</div>
                    </div>
                </div>
                <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full p-0">
                <iframe className="w-full h-[500px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.312601237581!2d96.15106759589035!3d16.83461619469625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194a7a9703cb5%3A0xfab26e49f10b391b!2sKabar%20Aye%20Pagoda%20Rd%2C%20Yangon!5e0!3m2!1sen!2smm!4v1728736393106!5m2!1sen!2smm" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export default AboutBanner3;