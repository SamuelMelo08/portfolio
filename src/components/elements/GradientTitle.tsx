import GradientText from "../ui/GradientText";

export default function GradientTitle() {

    return (

        <div className="text-[60px] font-bold">

            <GradientText
                colors={["#ffffff"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
                >
                Samuel Melo
            </GradientText>

        </div>

    )

}