import { IconButtonProps } from "@/types/types";

export default function ContactIconButton (props : IconButtonProps) {

    const styleButton= {
        dark: "text-text",
        light: "text-text",
    } 
    

    return (

        <a href={props.href} target="_blank">
            <button className={`${styleButton[props.theme]} p-3 rounded-full shadow-[0_0_15px_4px_#7C3AED] shadow-[#7C3AED] hover:scale-108 transition-all duration-300`}>
                {props.icon}
            </button>
        </a>
    )

}