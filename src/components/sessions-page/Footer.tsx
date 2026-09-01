
export default function Footer() {

    const date = new Date();

    return (

        <div className="flex justify-center items-center min-w-full min-h-20 bg-surface">
            
            <span className="text-center">©{date.getFullYear()} Samuel Melo. Todos os direitos reservados.</span>

        </div>

    )

}