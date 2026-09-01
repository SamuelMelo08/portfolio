import { PropsGradientTitle } from "@/types/types";
import GradientText from "../ui/GradientText";

export default function GradientTitle({textColors}: PropsGradientTitle) {

    return (

        <div className="text-[30px] md:text-[50px] lg:text-[60px]">

            <GradientText
                colors={textColors}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
                direction="bottom"
                >
                Samuel Melo
            </GradientText>

        </div>

    )

}