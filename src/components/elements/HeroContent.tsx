"use client"

import GradientTitle from "./GradientTitle";
import GradientText from "../ui/GradientText";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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

        <div className="-space-y-4">
            
            {/* Titulo */}
            <div>
                <GradientTitle textColors={textColors}/>
            </div>

            {/* Sub Titulo */}
            <div className="text-[60px]">
                <GradientText
                    colors={textColors}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                    >
                    Desenvolvedor Frontend
                </GradientText>
            </div>

            {/* Botões */}
            <div></div>

        </div>

    )

}