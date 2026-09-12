"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Light = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <section className="bg-[#7D2C0F] px-5 md:px-10 lg:px-16 py-10 md:py-16 flex flex-col justify-center items-center">
            <h1 className="text-white font-semibold text-xl text-center md:text-4xl" data-aos="zoom-in">
                REFRESH YOUR DAILY
                <br />
                ROUTINE AND
            </h1>

            <div className="my-6" data-aos="zoom-in">
                <div className="relative inline-block">
                    <div className="absolute inset-0 border border-dashed border-[#FEA2724D] rounded-md rotate-[-5deg] scale-120" />
                    <h1 className="relative uppercase bg-[#FF9A6B] text-[#7D2C0F] text-4xl font-medium px-4 py-3 my-1 rounded-md rotate-[-5deg]">
                        Light Up
                    </h1>
                </div>
            </div>

            <div className="relative" data-aos="zoom-in">
                <div className="absolute right-55 lg:right-80 bottom-25">
                    <h5 className="relative text-nowrap bg-[#FA8151] text-white text-md font-medium px-4 py-3 rounded-3xl rotate-[-10deg]">
                        Freshly Roasted
                    </h5>
                </div>
                <div className="absolute right-55 lg:right-80 top-[-20] lg:top-2">
                    <h5 className="relative text-nowrap bg-[#EDCCC0] text-[#7D2C0F] text-md font-medium px-4 py-3 rounded-3xl rotate-[-10deg]">
                        Creamy Texture
                    </h5>
                </div>
            </div>

            <div className="relative" data-aos="zoom-in">
                <div className="absolute left-55 lg:left-80 bottom-25">
                    <h5 className="relative text-nowrap bg-[#FEA272] text-[#7D2C0F] text-md font-medium px-4 py-3 rounded-3xl rotate-10">
                        Premium Beans
                    </h5>
                </div>
                <div className="absolute left-55 lg:left-80 top-[-20] lg:top-2">
                    <h5 className="relative text-nowrap bg-[#FCD197] text-[#7D2C0F] text-md font-medium px-4 py-3 rounded-3xl rotate-10">
                        Bold & Flavorful
                    </h5>
                </div>
            </div>

            <h1 className="text-white font-semibold text-xl pt-2 text-center md:text-4xl" data-aos="zoom-in">
                WITH EVERY SIP OF
                <br />
                SMOOTH, CREAMY COFFEE
            </h1>
        </section>
    );
}
 
export default Light;