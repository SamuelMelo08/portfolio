import GradientText from "../ui/GradientText";

type props = {
    textColors: string[]
}

export default function GradientTitle({textColors}: props) {

    return (

        <div className="text-[60px] ">

            <GradientText
                colors={textColors}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
                >
                Samuel Melo
            </GradientText>

        </div>

    )

}