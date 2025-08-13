import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/home"), 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="intro-container">
            <video autoPlay muted loop className="video-bg">
                <source src="./images/Blue Black Modern Neon Spiral Stars Opening Video Youtube Intro.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted loop className="mobile-bg">
                <source src="./images/mobile-bg.mp4" type="video/mp4" />
            </video>

        </div>
    );
};

export default Intro;