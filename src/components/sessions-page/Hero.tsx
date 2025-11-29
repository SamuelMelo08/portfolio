"use client"

import { useTheme } from "next-themes";
import Background from "../elements/Background";
import ContactIconButton from "../elements/ContactIconButton";
import HeroContent from "../elements/HeroContent";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Hero() {
    const { theme, setTheme } = useTheme();

    return(

        <div className="relative min-w-full min-h-screen">
            
            <Background/>

            {/* Conteudo do hero */}
            <div className="flex justify-center items-center min-w-full min-h-screen">
                <HeroContent/>
                
                <div className="flex gap-5 items-end justify-end absolute right-6 md:right-10 bottom-8" >
                    
                    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-anchor-placement="top-bottom">
                        <ContactIconButton
                            theme={(theme as "light" | "dark") ?? "dark"}
                            href="https://github.com/SamuelMelo08"
                            icon={<VscGithubAlt size={20} />}
                        />
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                        <ContactIconButton
                            theme={(theme as "light" | "dark") ?? "dark"}
                            href="https://www.linkedin.com/in/samuel-melo-4a139b378/"
                            icon={<RiLinkedinFill size={20}/>}

                        />
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                        <ContactIconButton
                            theme={(theme as "light" | "dark") ?? "dark"}
                            href="mailto:samuelmelo13789@gmail.com"
                            icon={<MdOutlineMailOutline size={20}/>}

                        />
                    </div>

                </div>
            </div>

            
        </div>

    )

}