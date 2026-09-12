"use client"

import Image from "next/image";
import coffee1 from "../Img/cup-coffee-1.png";
import coffee2 from "../Img/cup-coffee-2.png";
import coffee3 from "../Img/cup-coffee-3.png";
import coffee4 from "../Img/cup-coffee-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Signature = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <section className="bg-[#EDCCC0] flex flex-col items-center px-5 md:px-8 lg:px-16 py-10 md:py-16" id="menu">
            <div data-aos="fade-up">
                <h1 className="text-[#7D2C0F] text-2xl md:text-4xl font-medium">
                    Explore Our Signature Brews
                </h1>
                <p className="text-[#7D2C0F] text-center text-md pt-2">
                    A selection of favorites crafted to delight every coffee lover.
                </p>
            </div>
            <div className="bg-[#FADED4] rounded-3xl mt-3 py-2 px-4 space-x-4 flex items-center" data-aos="fade-up" data-aos-delay="100">
                <p className="text-[#7D2C0F] text-md flex space-x-3 font-semibold">
                    Signature <span className="hidden md:flex ps-1"> Brews</span>
                </p>
                <div className="border-l-2 border-[#7D2C0F24] h-6" />
                <p className="text-[#7D2C0F] text-md font-medium">
                    Cappuccino
                </p>
                <div className="border-l-2 border-[#7D2C0F24] h-6" />
                <p className="text-[#7D2C0F] text-md font-medium">
                    Frappuccino
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-13 md:gap-16 lg:gap-8 items-center pt-10">
                <div className="bg-[#7D2C0F] w-35 h-35 md:w-55 md:h-55 flex flex-col rounded-2xl" data-aos="fade-up" data-aos-delay="200">
                    <Image src={coffee1} alt="coffee" className="w-full h-auto object-contain translate-y-1 md:translate-y-2.5" />
                    <div className="flex justify-between items-center pt-2.5">
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            Iced Caramel
                        </p>
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            #3,000
                        </p>
                    </div>
                </div>
                <div className="bg-[#7D2C0F] w-35 h-35 md:w-55 md:h-55 flex flex-col rounded-2xl" data-aos="fade-up" data-aos-delay="300">
                    <Image src={coffee2} alt="coffee" className="w-full h-auto object-contain translate-y-1 md:translate-y-2.5" />
                    <div className="flex justify-between items-center pt-2.5">
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            Frosted Velvet
                        </p>
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            #5,000
                        </p>
                    </div>
                </div>
                <div className="bg-[#7D2C0F] w-35 h-35 md:w-55 md:h-55 flex flex-col rounded-2xl" data-aos="fade-up" data-aos-delay="400">
                    <Image src={coffee3} alt="coffee" className="w-full h-auto object-contain translate-y-1 md:translate-y-2.5" />
                    <div className="flex justify-between items-center pt-2.5">
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            Vanilla Latte
                        </p>
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            #7,000
                        </p>
                    </div>
                </div>
                <div className="bg-[#7D2C0F] w-35 h-35 md:w-55 md:h-55 flex flex-col rounded-2xl" data-aos="fade-up" data-aos-delay="500">
                    <Image src={coffee4} alt="coffee" className="w-full h-auto object-contain translate-y-1 md:translate-y-2.5" />
                    <div className="flex justify-between items-center pt-2.5">
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            Coco Ice Latte
                        </p>
                        <p className="text-[#7D2C0F] text-sm font-semibold">
                            #9,000
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16 md:mt-16" data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="bg-[#7D2C0F] cursor-pointer text-white rounded-3xl px-5 py-3">
                    Explore Menu
                </a>
            </div>
        </section>
    );
}
 
export default Signature;