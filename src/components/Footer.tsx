import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
            <Image src="/Logo.png" width={133} height={23} alt="Full Stack Week" />
            <p className="text-sm mt-1 font-medium text-primaryDarker">Todos os direitos Reservados.</p>
        </div>
    )
}
export default Footer;