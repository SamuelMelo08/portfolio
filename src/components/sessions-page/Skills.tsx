import { MessageCircle, TrendingUpDown } from "lucide-react";
import CardSkill from "../elements/CardSkill";
import SkillsLoop from "../elements/SkillsLoop";
import { AiOutlineTeam } from "react-icons/ai";

export default function Skills() {

    return(

        <div className="min-h-220 lg:min-h-110 flex flex-col px-4 py-6 lg:px-12 justify-start items-center gap-12" id="skills">
            
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">

                <div data-aos="flip-up" data-aos-duration="1000" data-aos-once="false">
                    <CardSkill
                        icon={<AiOutlineTeam size={25} />}
                        title="Trabalho em Equipe"
                        content="Experiência em colaboração em times, compartilhando ideias, alinhando soluções e contribuindo para um desenvolvimento mais eficiente."
                    
                    />
                </div>

                <div data-aos="flip-up" data-aos-duration="1500" data-aos-once="false">
                    <CardSkill
                        icon={<MessageCircle size={20} />}
                        title="Comunicação"
                        content="Capacidade de comunicar ideias técnicas com clareza, facilitando o alinhamento entre design, desenvolvimento e objetivos do projeto."
                    
                    />
                </div>

                <div data-aos="flip-up" data-aos-duration="2000" data-aos-once="false">
                    <CardSkill
                        icon={<TrendingUpDown size={20} />}
                        title="Aprendizado Contínuo"
                        content="Interesse constante em aprender novas tecnologias, melhorar processos e evoluir por meio de desafios e projetos práticos."
                    
                    />
                </div>

            </div>
            
            <div className="w-full lg:px-10" data-aos="zoom-right" data-aos-duration="1500" data-aos-once="false">

                <SkillsLoop/>

            </div>
            
            
        </div>

    )

}