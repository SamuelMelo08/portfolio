"use client"

import { useTheme } from "next-themes";
import GradientText from "../ui/GradientText";
import { useEffect, useState } from "react";

export default function About() {
    const { theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        
        return null;
    }

    const textColors = theme === "dark" ? 
        ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#7C3AED", "#ffffff","#ffffff", "#ffffff", "#9D7CFC", "#7C3AED"]
        :
        ["#1F2937", "#1F2937", "#1F2937", "#1F2937", "#7C3AED", "#1F2937", "#1F2937", "#1F2937", "#7C3AED", "#7C3AED"]

    return(

        <div className="w-full min-h-screen h-screen flex flex-col px-5 space-y-4">
            
            <div className="py-4 text-[30px] md:text-[40px]">
                    <GradientText
                        colors={textColors}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                        direction="top"
                    >
                        Sobre mim
                    </GradientText>
            </div>

            <div className="flex-1 flex-col justify-center lg:px-10 lg:flex-row">

                <div className="flex flex-col h-full space-y-5 md:justify-center">

                    <div>

                        <h1 className="text-text font-medium text-[26px]" >Olá, muito prazer!</h1>
                        <h2 className="text-text font-medium text-[24px]" >Eu me chamo Samuel Melo</h2>

                    </div>

                    <div className="lg:w-1/2">

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an.
                        </span>

                    </div>

                </div>

                <div>

                

                </div>
            

            </div>

        </div>

    )

}