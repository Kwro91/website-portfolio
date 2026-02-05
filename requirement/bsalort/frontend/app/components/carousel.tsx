"use client";

import { useState } from "react";

export default function Carousel({ images, className = "" }) {
    const [current, setCurrent] = useState(0);
    
    if (!images || images.length === 0) return null;

    const prev = () =>
        setCurrent((current - 1 + images.length) % images.length);
    const next = () =>
        setCurrent((current + 1) % images.length);

    return (
        <div className={`relative overflow-hidden rounded=xl ${className}`}>
            {/* Slides */}
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)`}}>
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" className="border rounded w-full flex-shrink-0 object-cover"/>
                ))}
            </div>
            {/* Controls */}
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full">
                prev
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full">
                next
            </button>
            <p className="absolute right-1/2 bottom-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full">{current+1} / {images.length}</p>
        </div>
    );
}