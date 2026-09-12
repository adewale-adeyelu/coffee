import Image from "next/image";
import coffee from "../Img/Coffee_Cup_9.jpg";

const Standard = () => {
    return (  
        <section className="bg-[#FADED4] px-5 md:px-10 lg:px-16 py-10 md:py-16 flex flex-col justify-center items-center">
            <h1 className="text-[#7D2C0F] font-medium text-center text-2xl md:text-4xl">
                Redefining the Standard
                <br />
                of Premium Coffee
            </h1>
            <div className="pt-4 md:pt-5">
                <Image src={coffee} alt="coffee" className="w-[800px]" />
            </div>
            <p className="text-center text-[#7D2C0F] pt-3 font-medium text-sm">
                At Myno, cold coffee is more than just iced espresso, it’s a carefully layered experience.
                <br className="hidden md:block" /> 
                From slow-brewed coffee bases to rich cream finishes, every element is designed to 
                <br className="hidden md:block" /> 
                create balance, depth, and smoothness in every cup.
            </p>
        </section>
    );
}
 
export default Standard;