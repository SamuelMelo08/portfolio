import { Link2Icon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";


type PropsCardProject = {

    hrefVideo: string;
    title: string;
    description: string;
    linkedin: string;
    link: string;

}

export default function CardProject(props: PropsCardProject) {

    return (

        <div className="max-w-90 min-h-110 max-h-100 bg-surface rounded-2xl p-5 hover:shadow-[0_0_15px_2px_#2563EB] transition-all duration-300 justify-start flex flex-col gap-4">

            {/* Video */}
            <div className="w-full flex justify-center">
                <video
                    src={`${props.hrefVideo}`}
                    className="h-full max-w-85 object-fill rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Título */}
            <div className="flex justify-between">

                <h2 className="font-semibold"> {props.title} </h2>

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

                <span className="line-clamp-6 text-justify">
                    {props.description}
                </span>

            </div>


        </div>

    )

}