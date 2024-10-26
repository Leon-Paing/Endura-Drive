import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { MdAccessTime } from 'react-icons/md';

const ContactInfo = () => {

    const handleFacebookLink = () => {
        window.open('https://www.facebook.com/porsche');
    }

    const handleInstagramLink = () => {
        window.open('https://www.instagram.com/porsche?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==');
    }

    const handleYoutubeLink = () => {
        window.open('https://www.youtube.com/@Porsche');
    }

    return(
        <>
        <p className="w-2/3 border-b-0.5 border-slate-500 p-4 flex justify-center items-center mt-10 text-3xl">Contact Us</p>
            <div className="w-screen h-auto flex flex-wrap justify-center items-center relative p-2 mb-4 mt-4">
                <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full h-auto flex flex-col justify-center items-center p-3 mb-10">
                    <div className="flex justify-start items-center text-3xl mb-4 ms-2 w-1/2"><span>Endura</span><span className="flex justify-end text-red-600 ms-1 border-b-0.5 border-red-600">Drive</span></div>
                    <div className="flex mt-4 w-1/2"><FaLocationDot className="text-red-600 text-3xl me-2"/>KabarAye Pagoda Road, Yangon, Myanmar</div>
                    <div className="flex mt-4 w-1/2"><FaPhone className="text-red-600 text-base me-1"/>+95 9773456789</div>
                    <div className="flex p-0 justify-start items-center w-1/2 mt-8 gap-4">
                        <AiFillInstagram className="text-white text-5xl cursor-pointer hover:text-red-600 transition-all duration-300" onClick={handleInstagramLink}/>
                        <AiFillFacebook className="text-white text-5xl cursor-pointer hover:text-blue-600 transition-all duration-300" onClick={handleFacebookLink}/>
                        <AiFillYoutube className="text-white text-6xl cursor-pointer hover:text-red-600 transition-all duration-300" onClick={handleYoutubeLink}/>
                    </div>
                </div>

                <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full xs:w-full h-auto mb-12 flex flex-col justify-center items-center text-2xl">
                    <div className="flex justify-center items-center">
                        <span>Opening</span>
                        <span className="ms-2 text-red-600 border-b-0.5 border-red-600">Hours</span>
                        <MdAccessTime className="text-2xl ms-1"/>
                    </div>
                    <div className="w-2/3 flex justify-between items-center mt-4 text-lg ">Mon: <span>9:00AM - 5:00PM</span></div>
                    <div className="w-2/3 flex justify-between items-center mt-2 text-lg">Tue: <span>9:00AM - 5:00PM</span></div>
                    <div className="w-2/3 flex justify-between items-center mt-2 text-lg">Wed: <span>9:00AM - 5:00PM</span></div>
                    <div className="w-2/3 flex justify-between items-center mt-2 text-lg">Thu: <span>9:00AM - 5:00PM</span></div>
                    <div className="w-2/3 flex justify-between items-center mt-2 text-lg">Fri: <span>9:00AM - 5:00PM</span></div>
                    <div className="w-2/3 flex justify-between items-center mt-2 text-lg text-red-600">Sat: <span>9:00AM - 2:00PM</span></div>
                    <div className="w-2/3 flex justify-between items-center mt-2 text-lg text-red-600">Sun: <span>Closed</span></div>
                    {/* Cheems Doge*/}
                </div>
            </div>
            <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full h-auto"><iframe className="w-full h-[400px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.312601237581!2d96.15106759589035!3d16.83461619469625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194a7a9703cb5%3A0xfab26e49f10b391b!2sKabar%20Aye%20Pagoda%20Rd%2C%20Yangon!5e0!3m2!1sen!2smm!4v1728736393106!5m2!1sen!2smm" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        </>
    )
}

export default ContactInfo;