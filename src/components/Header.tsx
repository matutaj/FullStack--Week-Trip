"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai"
const Header = (): any => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false)

    const { status, data } = useSession();

    const handleLoginClick = () => signIn();
    const handleLogoutClick = () => {
        setMenuIsOpen(false);
        signOut();
    };
    const handleMenuclick = () => setMenuIsOpen(!menuIsOpen)

    return (
        <div className="container mx-auto p-5 flex justify-between">
            <div className="relative h-[32px] w-[182px]">
                <Image width={183} height={32} src="/Logo.png" alt="FullStack Week " />


            </div>
            {
                status === "unauthenticated" && (
                    <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>

                )
            }
            {
                status === "authenticated" && data.user && (
                    <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 relative" >
                        <AiOutlineMenu size={16} onClick={handleMenuclick} className="cursor-pointer" />


                        <Image height={24} width={24} src={data.user.image!} alt={data.user.name!} className="rounded-full" />

                        {
                            menuIsOpen && (
                                <div className="absolute top-12 left-0 w-full h-full rounded-lg shadow-md flex flex-col justify-center items-center">
                                    <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                                        Logout
                                    </button>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>)

};

export default Header;