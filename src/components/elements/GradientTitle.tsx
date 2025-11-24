import GradientText from "../ui/GradientText";

type props = {
    textColors: string[]
}

export default function GradientTitle({textColors}: props) {

    return (

        <div className="text-[35px] md:text-[50px] lg:text-[60px]">

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