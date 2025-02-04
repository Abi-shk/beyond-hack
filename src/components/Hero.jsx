"use client";

import React, { useState, useEffect } from 'react';
import "../styles/Hero.css";
import Image from 'next/image';

export default function Hero() {
    const [regImage, setRegImage] = useState(1);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Trigger fade-out
            setTimeout(() => {
                setRegImage((prev) => (prev < 5 ? prev + 1 : 1)); // Change image
                setFade(true); // Trigger fade-in
            }, 200); // Match the CSS transition duration
        }, 200); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="hero">
            <div className="reg_button">
                REGISTER NOW{" "}
                <img
                    src={`/reg_arrow/reg_arrow${regImage}.png`}
                    alt={`Arrow ${regImage}`}
                    className={`fade-image ${fade ? "fade-in" : "fade-out"}`}
                />
            </div>

            <div className="hero_caption">
                <h3>THINK. BUILD. GO BEYOND</h3>
                <Image
                    src="/hero_cation_border.svg"
                    alt="Hero Caption Border"
                    width={50}
                    height={50}
                    className="hero_caption_image"
                />
            </div>

            <div className="video_container">
                <video
                    preload="none"
                    className="hero_video"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="black_gradient"></div>
            </div>
        </div>
    );
}
