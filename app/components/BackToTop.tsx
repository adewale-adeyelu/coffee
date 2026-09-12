"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 50);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => { 
        window.scrollTo({ top: 0, behavior: "smooth", }); 
    };

    return (
        <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8342] text-white shadow-xl transition-all duration-500 ease-out cursor-pointer ${ visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-10 scale-50 opacity-0" } hover:scale-110 hover:shadow-2xl`} aria-label="Back to top" >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}