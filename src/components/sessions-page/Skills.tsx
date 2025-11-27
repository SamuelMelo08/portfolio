import { LinkedinIcon } from "lucide-react";
import CardSkill from "../elements/CardSkill";
import SkillsLoop from "../elements/SkillsLoop";

export default function Skills() {

    return(

        <div className="min-h-220 lg:min-h-110 flex flex-col px-4 py-6 lg:px-10 justify-start items-center gap-12">
            
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">

                <CardSkill
                    icon={<LinkedinIcon size={20} />}
                    title="Card 01"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                
                />

                <CardSkill
                    icon={<LinkedinIcon size={20} />}
                    title="Card 01"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                
                />

                <CardSkill
                    icon={<LinkedinIcon size={20} />}
                    title="Card 01"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                
                />

            </div>
            
            <div className="w-full lg:px-10">

                <SkillsLoop/>

            </div>
            
            
        </div>

    )

}