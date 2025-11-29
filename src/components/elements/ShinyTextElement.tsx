import ShinyText from "../ui/ShinyText";

type ShinyTextProps = {
    text: string
    classname: string
}

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