"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import profile from "../Img/profile-img (2).jpg";
import coffee1 from "../Img/Coffee_Cup_10.jpg";
import coffee2 from "../Img/Coffee_Cup_11.jpg";
import coffee3 from "../Img/Coffee_Cup_12.jpg";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);
    return (  
        <section className="bg-[#FADED4] px-5 md:px-16 lg:px-20 py-10 md:py-13" id="about">
            <h1 className="text-[#7D2C0F] text-2xl text-center md:text-3xl font-bold" data-aos="fade-up">
                What People Love About Us
            </h1>
            <div className="grid lg:grid-cols-3 gap-8 md:gap-13 lg:gap-5 items-center pt-8 md:pt-13">
                {/* grid-1 */}
                <div className="flex flex-col space-y-4 items-center">
                    <div className="bg-[#EDCCC0] py-4 w-full rounded-md px-5" data-aos="fade-down">
                        <p className="text-[#7d2c0f] text-md">
                            Every sip of Myno’s cold coffee is like a little
                            <br className="hidden md:block" />
                            joyful celebration. The rich aroma and
                            <br />
                            smooth velvety finish elevate my mornings,
                            <br />
                            and I can't imagine starting my day without
                            <br />
                            it anymore — absolutely refreshing.
                        </p>
                        <div className="flex space-x-3 items-center pt-2">
                            <Image src={profile} alt="profile" className="w-12 h-12" />
                            <p className="text-[#7d2c0f] text-md font-medium">
                                Emmanuel Amaechi
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <Image src={coffee1} alt="coffee" className="w-[350px] md:w-[700px] lg:w-[380px] h-70 md:h-90 lg:h-70" />
                    </div>
                </div>

                {/* grid-2 */}
                <div className="flex flex-col-reverse lg:flex-col space-y-4 items-center">
                    <div data-aos="fade-down">
                        <Image src={coffee2} alt="coffee" className="w-[350px] md:w-[630px] lg:w-[370px] h-70 md:h-85 lg:h-70" />
                    </div>
                    <div className="bg-[#EDCCC0] py-4 w-full rounded-md mb-4 lg:mb-0 px-5" data-aos="fade-up">
                        <p className="text-[#7d2c0f] text-md">
                            I never knew cold coffee could be this
                            <br />
                            delightful. The unique blend of flavors
                            <br />
                            and the perfect chill make it a refreshing
                            <br />
                            choice, and it has quickly become my go
                            <br />
                            to beverage for every occasion.”
                        </p>
                        <div className="flex space-x-3 items-center pt-2">
                            <Image src={profile} alt="profile" className="w-12 h-12" />
                            <p className="text-[#7d2c0f] text-md font-medium">
                                Samuel Adebayo
                            </p>
                        </div>
                    </div>
                </div>

                {/* grid-3 */}
                <div className="flex flex-col space-y-4 items-center">
                    <div className="bg-[#EDCCC0] py-4 w-full rounded-md px-5" data-aos="fade-down">
                        <p className="text-[#7d2c0f] text-md">
                            Myno completely changed how I see cold
                            <br />
                            coffee. The texture, the creaminess, the
                            <br />
                            balance — everything feels intentional.
                            <br />
                            It’s not just a drink, it’s an experience I
                            <br />
                            look forward to every day.”
                        </p>
                        <div className="flex space-x-3 items-center pt-2">
                            <Image src={profile} alt="profile" className="w-12 h-12" />
                            <p className="text-[#7d2c0f] text-md font-medium">
                                Adeniyi Christiana
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <Image src={coffee3} alt="coffee" className="w-[350px] md:w-[700px] lg:w-[380px] h-70 md:h-90 lg:h-70" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;