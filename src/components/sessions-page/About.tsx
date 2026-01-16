"use client"

import { useTheme } from "next-themes";
import GradientText from "../ui/GradientText";
import { useEffect, useState } from "react";
import Image from "next/image";

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

        <div className="w-full min-h-160 flex flex-col px-5 py-5 space-y-6 lg:space-y-0" id="about">
            
            <div className="py-4 text-[30px] md:text-[40px]" data-aos="zoom-in-up" data-aos-once="false">
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

            <div className="flex flex-1 flex-col justify-center lg:px-10 w-full space-y-8 lg:flex-row lg:items-center">


                <div className="flex flex-col lg:w-1/2 space-y-5 md:justify-center">

                    <div>

                        <h1 className=" font-medium text-[26px] text-dream-lavender" data-aos="fade-right" data-aos-duration="500" data-aos-once="false" >Olá, muito prazer!</h1>
                        <h2 className="text-text font-medium text-[24px]" data-aos="fade-right" data-aos-duration="800" data-aos-once="false">Eu me chamo Samuel Melo</h2>

                    </div>

                    <div data-aos="fade-right" data-aos-duration="1100" data-aos-once="false">

                        <span className="text-text/70">
                            Sou desenvolvedor front-end com foco na construção de interfaces modernas, responsivas e bem estruturadas. Trabalho principalmente com React, Next.js e TypeScript, buscando unir design e desenvolvimento para criar experiências claras e funcionais. Tenho interesse em tecnologia, sistemas e desenvolver jogos, e estou constantemente evoluindo minhas habilidades por meio de projetos práticos.
                        </span>

                    </div>

                </div>

                <div className="flex justify-center items-center py-10 lg:w-1/2 md:h-full" data-aos="fade-left" data-aos-duration="1000" data-aos-once="false">
                    
                    <Image
                        src={"/ImagemPerfil.jpeg"}
                        alt="image"
                        width={280}
                        height={280}
                        className="rounded-full m-10 shadow-[0_0_25px_4px_#7C3AED]"
                    />

                </div>
            

            </div>

        </div>

    )

}