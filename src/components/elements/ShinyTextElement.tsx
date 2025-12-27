import { ShinyTextProps } from "@/types/types";
import ShinyText from "../ui/ShinyText";



export default function ShinyTextElement({text, classname} : ShinyTextProps) {

    return (

        <ShinyText
            text={text} 
            disabled={false} 
            speed={10} 
            className={`custom-class ${classname}`} 
        />

    )

}