import Background from "../elements/Background";
import ThemeToggle from "../elements/ThemeToggle";

export default function Hero() {

    return(

        <div className="relative min-w-full min-h-screen">
            
            <Background/>

            {/* Conteudo do hero */}
            <div>

                <ThemeToggle/>

            </div> 
        </div>

    )

}