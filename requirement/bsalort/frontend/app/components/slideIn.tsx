"use client";

import { useEffect, useRef, useState } from "react";

export default function SlideIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.10 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className={`py-15 transition-all duration-900 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"}`}>
      {children}
    </div>
  );
}