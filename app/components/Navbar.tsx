"use client"

import Image from "next/image";
import NavImg from "../Img/Nav-img-3.jpg";
import HeroCoffee from "../Img/Coffee_Cup_1.jpg";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 w-full z-50">
            <div className="bg-[#7D2C0F] text-white flex justify-center items-center gap-2 py-2 md:py-1">
                <Image src={NavImg} alt="Coffee" width={24} height={24} className="object-cover"/>
                <p className="text-sm flex font-semibold">
                    Buy one coffee, get one free <span className="hidden md:block ps-2 pe-4"> - this week only discount</span>
                </p>
                <Image src={NavImg} alt="Coffee" width={24} height={24} className="object-cover"/>
            </div>
            <div className="bg-[#F7CCBD] py-2 px-4 md:px-10 flex justify-between items-center">
                <div className="space-x-2.5 hidden md:flex">
                    <a href="#about" className="text-[#7D2C0F] font-medium uppercase text-sm">
                        About
                    </a>
                    <a href="#blog" className="text-[#7D2C0F] font-medium uppercase text-sm">
                        Blog
                    </a>
                    <a href="#menu" className="text-[#7D2C0F] font-medium uppercase text-sm">
                        Menu
                    </a>
                    <a href="#contact" className="text-[#7D2C0F] font-medium uppercase text-sm">
                        Location
                    </a>
                </div>
                <div className="md:-translate-x-16">
                    <a href="#">
                        <Image src={HeroCoffee} alt="coffee" width={25} height={25} className="rounded-full" />
                    </a>
                </div>
                <button className="bg-[#FF8342] text-white rounded-3xl px-3 py-1.5 md:py-2">
                    <a href="#contact" className="text-md">
                        Order Now
                    </a>
                </button>

                {/* Menu-icon */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(true)}>
                        <FaBars className="text-2xl text-[#7D2C0F] me-2" />
                    </button>
                </div>
            </div>


            {/* Mobile Modal */}
            {open && (
                <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-start pt-20">
                
                    {/* Close button */}
                    <button onClick={() => setOpen(false)} className="absolute top-10 right-5 text-[#7D2C0F] text-3xl">
                        <HiX />
                    </button>

                    {/* Menu box */}
                    <div className="bg-[#FCE3D7] w-[90%] h-auto max-w-md mt-7 rounded-xl p-6 space-y-5 transform transition duration-600">
                        <div className="flex flex-col gap-4">
                            <a href="" className="text-[#7D2C0F] font-medium uppercase text-sm">
                                About
                            </a>
                            <a href="" className="text-[#7D2C0F] font-medium uppercase text-sm">
                                Blog
                            </a>
                            <a href="" className="text-[#7D2C0F] font-medium uppercase text-sm">
                                Menu
                            </a>
                            <a href="" className="text-[#7D2C0F] font-medium uppercase text-sm">
                                Location
                            </a>
                        </div>

                        <button className="bg-[#FF8342] text-white rounded-3xl px-3 py-2">
                            <a href="" className="text-md">
                                Order Now
                            </a>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;