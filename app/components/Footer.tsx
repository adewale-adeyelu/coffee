import Image from "next/image";
import HeroCoffee from "../Img/Coffee_Cup_1.jpg";
import { Mail, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Footer = () => {
    return (  
        <footer className="bg-[#7D2C0F]" id="contact">
            <div className="py-10 md:py-16 px-4 md:px-10 lg:px-28 flex flex-col md:flex-row justify-between md:items-center">
                <div className="space-y-4">
                    <Image src={HeroCoffee} alt="coffee" width={25} height={25} className="rounded-full" />
                    <h5 className="text-white font-medium text-md">
                        Life Begins After Coffee
                    </h5>
                    <a href="#" className="flex space-x-2 items-center">
                        <Phone />
                        <p className="text-white font-medium text-md">
                            +234(91) 5349-7876
                        </p>
                    </a>
                    <a href="#" className="flex space-x-2 items-center">
                        <Mail />
                        <p className="text-white font-medium text-md">
                            hello@mynocoffee.com
                        </p>
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-10 md:gap-20 pt-10 md:pt-0">
                    <div>
                        <h2 className="font-semibold text-md tex-white">
                            Links
                        </h2>
                        <div className="flex flex-col space-y-3 mt-3">
                            <a href="#menu" className="text-white font-medium text-md">
                                Menu
                            </a>
                            <a href="#contact" className="text-white font-medium text-md">
                                Location
                            </a>
                            <a href="#about" className="text-white font-medium text-md">
                                About Us
                            </a>
                            <a href="#blog" className="text-white font-medium text-md">
                                Blog
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-md tex-white">
                            Categories
                        </h2>
                        <div className="flex flex-col space-y-3 mt-3">
                            <a href="#menu" className="text-white font-medium text-md">
                                Coffee
                            </a>
                            <a href="#menu" className="text-white font-medium text-md">
                                Cold Drinks
                            </a>
                            <a href="#menu" className="text-white font-medium text-md">
                                Bakery
                            </a>
                            <a href="#menu" className="text-white font-medium text-md">
                                Reservation
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-md tex-white">
                            Follow Us
                        </h2>
                        <div className="flex space-x-3 mt-3">
                            <a href="#">
                                <BsInstagram className="text-white font-medium" size={20} />
                            </a>
                            <a href="#">
                                <BsTiktok className="text-white font-medium" size={20} />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-white font-medium" size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="text-center pb-6 md:pb-10 overflow-hidden">
                <h1 className="text-[#FADED4] text-[15vw] leading-none font-bold whitespace-nowrap">
                    Myno Coffee
                </h1>
            </div>
        </footer>
    );
}
 
export default Footer;