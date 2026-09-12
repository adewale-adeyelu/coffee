import Image from "next/image";
import coffee1 from "../Img/Coffee_Cup_13.jpg";
import coffee2 from "../Img/Coffee_Cup_14.jpg";
import coffee3 from "../Img/Coffee_Cup_15.jpg";
import coffee4 from "../Img/coffee-cup-17.jpg";
import { HiSparkles } from "react-icons/hi";

const Flavors = () => {
    const features = [
        { text: "Fast Service", color: "text-white" },
        { text: "Local Roasts", color: "text-[#FF8342]" },
        { text: "Global Flavor", color: "text-white" },
        { text: "Cozy Space", color: "text-[#FF8342]" },
        { text: "Great Coffee", color: "text-white" },
    ];
    return (  
        <section className="bg-[#EDCCC0]" id="blog">
            {/* first about */}
            <div className="px-4 md:px-10 lg:px-16 py-10 md:py-16">
                <h1 className="text-[#7D2C0F] text-2xl text-center md:text-3xl font-bold">
                    New Flavors, Same Cozy Vibes
                </h1>
                <p className="text-[#7D2C0F] text-center mt-2 text-md">
                    Discover our latest brews and seasonal favorites.
                </p>
                <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-center pt-10">
                    {/* grid 1 */}
                    <div>
                        <Image src={coffee1} alt="coffee"/>
                        <div className="space-y-1 mt-3">
                            <p className="text-[#7D2C0F] font-medium text-sm">
                                June 17 - 2026
                            </p>
                            <h5 className="text-[#7D2C0F] text-md font-semibold">
                                We’re excited to introduce our latest
                                <br />
                                seasonal coffee flavors, crafted for
                                <br />
                                the season.
                            </h5>
                        </div>
                    </div>

                    {/* grid 2 */}
                    <div>
                        <Image src={coffee2} alt="coffee"/>
                        <div className="space-y-1 mt-3">
                            <p className="text-[#7D2C0F] font-medium text-sm">
                                June 18 - 2026
                            </p>
                            <h5 className="text-[#7D2C0F] text-md font-semibold">
                                We believe coffee should fit your mood,
                                <br /> 
                                not the other way around. That’s why 
                                <br />
                                we’ve added new handcrafted brews.
                            </h5>
                        </div>
                    </div>

                    {/* grid 3 */}
                    <div>
                        <Image src={coffee3} alt="coffee"/>
                        <div className="space-y-1 mt-3">
                            <p className="text-[#7D2C0F] font-medium text-sm">
                                June 19 - 2026
                            </p>
                            <h5 className="text-[#7D2C0F] text-md font-semibold">
                                Step into a space where comfort meets
                                <br /> 
                                flavor. Our café is built around cozy
                                <br /> 
                                moments
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 md:mt-16">
                    <a href="#" className="bg-[#7D2C0F] cursor-pointer text-white rounded-3xl px-5 py-3">
                        View All
                    </a>
                </div>
            </div>

            {/* second about */}
            <div className="bg-[#7D2C0F] mt-4 md:mt-0 py-4 w-full overflow-hidden">
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

            {/* third about */}
            <div className="flex flex-col justify-center items-center py-13 md:py-20">
                <Image src={coffee4} alt="coffee" />

                <p className="text-[#7D2C0F] text-sm pt-3">
                    Every day deserves a better cup of coffee, one that 
                    <br /> 
                    feels refreshing, indulgent, and made with intention.
                </p>

                <button className="bg-[#FF8342] text-white rounded-3xl px-3 py-1.5 mt-5 md:py-2">
                    <a href="#" className="text-md">
                        Order Now
                    </a>
                </button>
            </div>

        </section>
    );
}
 
export default Flavors;