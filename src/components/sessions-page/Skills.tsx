import { LinkedinIcon } from "lucide-react";
import CardSkill from "../elements/CardSkill";
import SkillsLoop from "../elements/SkillsLoop";

export default function Skills() {

    return(

        <div className="min-h-220 lg:min-h-110 flex flex-col px-4 py-6 lg:px-12 justify-start items-center gap-12" id="skills">
            
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">

                <div data-aos="flip-up" data-aos-duration="1000" data-aos-once="false">
                    <CardSkill
                        icon={<LinkedinIcon size={20} />}
                        title="Card 01"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                    
                    />
                </div>

                <div data-aos="flip-up" data-aos-duration="1500" data-aos-once="false">
                    <CardSkill
                        icon={<LinkedinIcon size={20} />}
                        title="Card 01"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                    
                    />
                </div>

                <div data-aos="flip-up" data-aos-duration="2000" data-aos-once="false">
                    <CardSkill
                        icon={<LinkedinIcon size={20} />}
                        title="Card 01"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                    
                    />
                </div>

            </div>
            
            <div className="w-full lg:px-10" data-aos="zoom-right" data-aos-duration="1500" data-aos-once="false">

                <SkillsLoop/>

            </div>
            
            
        </div>

    )

}