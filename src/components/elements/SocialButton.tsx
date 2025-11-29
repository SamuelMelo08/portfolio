import { ReactNode } from "react";

type SocialProps = {
    title: string;
    icon: ReactNode;
    href: string;
}

export default function SocialButton (props: SocialProps) {

    return (

        <a href={props.href} target="_blank" className="w-full">
            <div className="flex gap-4 justify-start items-center text-text text-[14px] font-medium bg-input/99 w-full px-6 py-8 rounded-xl hover:scale-102 transition-all duration-300 ">

                <span>{props.icon}</span>
                <span>{props.title}</span>

            </div>
        </a>

    )

}