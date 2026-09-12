import Image from "next/image"; 
import HeroCoffee from "../Img/Hero-coffee-2.jpg";
import Coffee1 from "../Img/Coffee_Cup_2.jpg";
import coffee2 from "../Img/Coffee_Cup_3.jpg";
import coffee3 from "../Img/Coffee_Cup_4.jpg";
import { HiSparkles } from "react-icons/hi";

const Hero = () => {
    const features = [
        { text: "Fast Service", color: "text-white" },
        { text: "Local Roasts", color: "text-[#FF8342]" },
        { text: "Global Flavor", color: "text-white" },
        { text: "Cozy Space", color: "text-[#FF8342]" },
        { text: "Great Coffee", color: "text-white" },
    ];
    return (  
        <section>
            {/* first hero */}
            <div className="bg-[#FCE3D7] md:pt-28 lg:pt-22 flex flex-col justify-center items-center pt-38 px-5 md:px-0">
                <div className="flex flex-col items-center">
                    <h1 className="text-[#7D2C0F] text-2xl text-center tracking-wider leading-8 md:leading-10 md:text-4xl font-semibold md:pt-20">
                        Morning Gets Started
                        <br />
                        After A Coffee Sip
                    </h1>
                    <h6 className="text-[#7D2C0F] text-sm text-center tracking-wide font-medium leading-5 pt-3">
                        At Myno Coffe, we believe coffee is more than a drink,
                        <br className="hidden md:block" /> 
                        it is an experience and we source premium beans
                        <br className="hidden md:block" /> 
                        perfect for your taste buds
                    </h6>
                    <div className="pt-5 flex items-center space-x-3">
                        <a href="#about" className="bg-[#7D2C0F] cursor-pointer text-white rounded-3xl px-4 py-2">
                            Explore Menu
                        </a>

                        <a href="#" className="bg-[#FF8342] cursor-pointer text-white rounded-3xl px-4 py-2">
                            Grab Yours
                        </a>
                    </div>
                </div>
                <div className="-mt-20 md:-mt-36">
                    <Image src={HeroCoffee} alt="coffee" className="w-[400px] md:w-[600px] h-[400px] md:h-[600px]" />
                </div>
            </div>

            {/* second hero */}
            <div className="bg-[#7D2C0F] py-3.5 w-full overflow-hidden">
                <div className="flex w-max animate-marquee">
                    {[...Array(5)].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex items-center gap-8 px-4 md:px-8">
                            {features.map((feature, index) => (
                                <p key={index} className="flex items-center gap-1 whitespace-nowrap">
                                    <span className="text-white font-medium text-lg">
                                        {feature.text}
                                    </span>

                                    <HiSparkles size={22} className={feature.color}/>
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* third hero */}
            <div className="bg-[#FCE3D7] md:py-28 lg:py-10 flex flex-col justify-center items-center py-16 px-5 md:px-0">
                <h1 className="text-[#7D2C0F] text-2xl text-center tracking-wider leading-8 md:leading-10 md:text-4xl font-semibold md:pt-4">
                    Find The Perfect Tastes
                    <br />
                    That Suits You
                </h1>
                <div className="grid md:grid-cols-3 gap-10 items-center pt-10">
                    <div className="flex flex-col items-center">
                        <div className="relative w-50 h-50 bg-[#7D2C0F] rounded-full overflow-hidden flex justify-center items-end">
                            <Image src={Coffee1} alt="coffee" className="w-full h-auto object-contain translate-y-2 scale-100" />
                        </div>
                        <p className="text-[#7D2C0F] font-semibold mt-5 text-md">
                            Coffee
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="relative w-50 h-50 bg-[#7D2C0F] rounded-full overflow-hidden flex justify-center items-end">
                            <Image src={coffee2} alt="coffee" className="w-full h-auto object-contain translate-y-2 scale-100"/>
                        </div>
                        <p className="text-[#7D2C0F] font-semibold mt-5 text-md">
                            Milk
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative w-50 h-50 bg-[#7D2C0F] rounded-full overflow-hidden flex justify-center items-end">
                            <Image src={coffee3} alt="coffee" className="w-full h-auto object-contain translate-y-2 scale-100" />
                        </div>
                        <p className="text-[#7D2C0F] font-semibold mt-5 text-md">
                            Bakery
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;