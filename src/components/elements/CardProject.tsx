import { Link2Icon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import VideoFullScreen from "./VideoFullScreen";
import { PropsCardProject } from "@/types/types";

export default function CardProject(props: PropsCardProject) {

    return (

        <div  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement className="max-w-90 min-h-110 max-h-100 bg-surface rounded-2xl p-5 hover:shadow-[0_0_15px_2px_#2563EB] transition-all duration-300 justify-start flex flex-col gap-4 border border-deep-azure">

            {/* Video */}
            <div className="w-full flex justify-center relative group rounded-xl overflow-hidden">

                <video
                    src={props.hrefVideo}
                    className="h-full max-w-82.5 object-fill rounded-xl "
                    autoPlay
                    loop
                    muted
                    playsInline
                    
                />

                <div className="
                    absolute inset-0 
                    bg-black/50 
                    flex items-center justify-center
                    opacity-0 
                    group-hover:opacity-100
                    transition-opacity duration-300
                    "
                >
                    <VideoFullScreen title={props.title} hrefVideo={props.hrefVideo} />
                </div>
                
            </div>

            {/* Título */}
            <div className="flex justify-between items-center">

                <h2 className="font-semibold text-[18px]"> {props.title} </h2>

                <div className="flex items-center gap-4 text-text">

                    <a href={props.link} target="_blank">
                        <Link2Icon size={20}/>
                    </a>

                    <a href={props.linkedin} target="_blank">
                        <FaLinkedin size={18}/>
                    </a>

                </div>
            </div>

            {/* Descrição */}
            <div className="max-w-90">

                <span className="line-clamp-6 text-justify leading-relaxed">
                    {props.description}
                </span>

            </div>

        </div>

    )

}