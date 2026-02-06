"use client"

import { useEffect, useState } from "react";

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    };

    return (
        <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50 rounded-full p-3 bg-slate-200 text-white shadow-lg hover:bg-slate-400`}>
            <svg className="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18V2m0 0l7 7m-7-7L3 9"></path> </g></svg>
        </button>
    )
}