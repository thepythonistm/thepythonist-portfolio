import { useEffect, useRef } from "react";
import "./Cursorglow.css";

const Cursorglow = () => {
  const haloRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const halo = haloRef.current;
      if (halo) {
        halo.style.left = `${e.clientX}px`;
        halo.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={haloRef} className="cursor-halo" />;
};

export default Cursorglow;
