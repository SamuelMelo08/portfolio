import { Instagram, Linkedin } from "lucide-react";
import ContactForm from "../elements/ContactForm";
import ShinyTextElement from "../elements/ShinyTextElement";
import SocialButton from "../elements/SocialButton";
import { VscGithubAlt } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacts() {

    return(

        <div className="flex flex-col items-center min-w-full  py-15 px-4 lg:px-12 gap-6" id="contacts">
            
            <h1 className="py-4 text-[30px] md:text-[40px] text-tex" >Contatos</h1>

            <div className="flex flex-col lg:flex-row justify-around items-center min-w-full gap-12">
                
                <div className="lg:min-w-120 lg:max-w-130 lg:min-h-125 w-full px-4 py-6 bg-surface rounded-xl space-y-6">

                    <div className="space-y-1 md:px-4">
                        <h2 className="text-text text-[25px] font-medium">Envie uma mensagem</h2>
                        <ShinyTextElement text="Conte mais sobre como posso ajudar" classname="text-[16px]"/>
                    </div>

                    <ContactForm/>
                </div>

                <div className="lg:min-w-130 lg:max-w-130 lg:min-h-125 w-full px-4 py-6 bg-surface rounded-xl space-y-6" >

                    <div className="space-y-1 md:px-4">
                        <h2 className="text-text text-[25px] font-medium">Acesse minhas redes</h2>
                        <ShinyTextElement text="Entre em contato para mais informações" classname="text-[16px]"/>

                    </div>
                    
                    <div className="flex flex-col gap-5 md:px-4">

                        <SocialButton
                            icon={<Linkedin size={20}/>}
                            title="Linkedin"
                            href="https://www.linkedin.com/in/samuel-melo-4a139b378/"
                        />

                        <SocialButton
                            icon={<VscGithubAlt size={22}/>}
                            title="GitHub"
                            href="#https://github.com/SamuelMelo08"
                        />

                        <div className="flex flex-col md:flex-row gap-4">

                            <SocialButton
                            icon={<FaWhatsapp size={20}/>}
                            title="Whatsapp"
                            href="https://wa.me/558882212302"
                            />

                            <SocialButton
                            icon={<Instagram size={20}/>}
                            title="Instagram"
                            href="https://www.instagram.com/samuelmelo.dev/"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}