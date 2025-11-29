import ContactForm from "../elements/ContactForm";
import ShinyTextElement from "../elements/ShinyTextElement";

export default function Contacts() {

    return(

        <div className="flex flex-col items-center min-w-full  py-15 px-4 lg:px-12 gap-6">
            
            <h1 className="py-4 text-[30px] md:text-[40px] text-tex" >Contatos</h1>

            <div className="flex flex-col lg:flex-row justify-around items-center w-fit gap-12">
                
                <div className="lg:min-w-130 lg:max-w-130 lg:min-h-125 w-full px-4 py-6 bg-surface rounded-xl space-y-6">

                    <div className="space-y-1 md:px-4">
                        <h2 className="text-text text-[25px] font-medium">Envie uma mensagem</h2>
                        <ShinyTextElement text="Conte mais sobre como posso ajudar" classname="text-[16px]"/>
                    </div>

                    <ContactForm/>
                </div>

                <div className="lg:min-w-130 lg:max-w-130 lg:min-h-125 w-full px-4 py-6 bg-surface rounded-xl" >

                    <div className="space-y-1 md:px-4">
                        <h2 className="text-text text-[25px] font-medium">Acesse minhas redes</h2>
                        <ShinyTextElement text="Entre em contato para mais informações" classname="text-[16px]"/>

                    </div>
                    

                </div>

            </div>

        </div>

    )

}