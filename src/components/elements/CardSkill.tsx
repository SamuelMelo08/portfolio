import { ReactNode } from "react"

type PropsCardSkill = {
    icon: ReactNode;
    title: string;
    content: string;
}

export default function CardSkill (props: PropsCardSkill) {

    return (

        <div className="flex flex-col bg-surface min-w-40 max-w-110 min-h-60 px-6 py-6 space-y-4 rounded-xl border-1 border-deep-azure hover:shadow-[0_0_10px_2px_#2563EB] transition-all duration-300 " >

            <div className="flex gap-4 items-center">

                <span className="text-text" >{props.icon}</span>

                <span className="text-text text-[20px] font-medium">{props.title}</span>

            </div>

            <div>

                <span>{props.content}</span>

            </div>

        </div>

    )

}