"use client"

import GradientTitle from "./GradientTitle";
import GradientText from "../ui/GradientText";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import DownloadCvButton from "./DownloadCvButton";
import ProjectButton from "./ProjectButton";

export default function HeroContent() {
    const { theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        
        return null;
    }

    const textColors = theme === "dark" ? 
        ["#ffffff","#ffffff", "#7C3AED", "#7C3AED","#ffffff", "#7C3AED", "#7C3AED", "#7C3AED"]
        :
        ["#1F2937","#1F2937", "#7C3AED", "#7C3AED","#1F2937", "#7C3AED", "#7C3AED", "#7C3AED"]

    return (

        <div className="space-y-5">
            
            <div className="-space-y-3 md:-space-y-6" >
                {/* Titulo */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="500">
                    <GradientTitle textColors={textColors}/>
                </div>

                {/* Sub Titulo */}
                <div className="text-[30px] md:text-[40px] lg:text-[60px] px-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <GradientText
                        colors={textColors}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                        direction="bottom"
                        >
                        Desenvolvedor Frontend
                    </GradientText>
                </div>
            </div>

            {/* Botões */}
            <div className="flex gap-2 items-center justify-center">

                <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
                <DownloadCvButton/>
                </div>

                <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
                <ProjectButton/>
                </div>

            </div>

        </div>

    )

}