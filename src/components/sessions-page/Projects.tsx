import ProjectButton from "../elements/ProjectButton";
import ProjectsCardSwap from "../elements/ProjectsCardSwap";
import ShinyTextElement from "../elements/ShinyTextElement";
import ShinyText from "../ui/ShinyText";

export default function Projects() {

    return(

        <div className="flex flex-col items-center w-full h-140 lg:h-180 py-5 px-4 lg:px-12 gap-6">

            <h1 className="py-4 text-[30px] md:text-[40px] text-tex" >Projetos</h1>
            
            <div className="flex gap-20 items-center overflow-hidden justify-between px-6 lg:px-12 h-full w-full bg-surface border-deep-azure border-2 rounded-[20px]">

                <div className="flex-1 space-y-5">

                    <div className="space-y-2">

                        <h1 className="font-onest text-text text-[30px] font-medium">Conheça os meus projetos!</h1>
                        <ShinyTextElement text="Confira os projetos que venho desenvolvendo ao longo da minha carreira." classname="font-onest text-[20px] font-medium"/>

                    </div>

                    <ProjectButton/>

                </div>

                <div className="hidden lg:block justify-end flex-1" >
                    
                    <ProjectsCardSwap/>

                </div>

            </div>


        </div>

    )

}