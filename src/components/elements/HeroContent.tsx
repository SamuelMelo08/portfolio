import GradientTitle from "./GradientTitle";
import GradientText from "../ui/GradientText";

export default function HeroContent() {

    return (

        <div>
            
            {/* Titulo */}
            <div>
                <GradientTitle/>
            </div>

            {/* Sub Titulo */}
            <div className="text-[60px]">
                <GradientText
                    colors={["#7C3AED", "#3B82F6", "#7C3AED", "#3B82F6", "#7C3AED"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                    >
                    Desenvolvedor Frontend
                </GradientText>
            </div>

            {/* Botões */}
            <div></div>

        </div>

    )

}