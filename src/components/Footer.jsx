import React from "react";

const Footer = () => {

    return(
        <>
            <div className="flex flex-wrap w-screen p-5 mt-10 h-[100px] bg-black bg-opacity-20">
                <div className="xl:w-full lg:w-full md:w-full sm:w-full xs:w-full flex justify-center items-center xl:text-base lg:text-base md:text-base sm:text-sm xs:text-sm font-sans">Copyright&copy;Endura Drive. All rights reserved.</div>
                {/* <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex justify-end items-center text-sm">Powered By: Road Transport Administration Department(RTAD), Myanmar.</div> */}
            </div>
        </>
    )
}

export default Footer;