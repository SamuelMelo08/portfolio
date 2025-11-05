import Background from "../elements/Background";
import HeroContent from "../elements/HeroContent";


export default function Hero() {

    return(

        <div className="relative min-w-full min-h-screen">
            
            <Background/>

            {/* Conteudo do hero */}
            <div className="flex justify-center items-center min-w-full min-h-screen">
                <HeroContent/>
            </div> 
        </div>

    )

}