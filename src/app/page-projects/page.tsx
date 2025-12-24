import CardProject from "@/components/elements/CardProject";
import Footer from "@/components/sessions-page/Footer";
import { map } from "zod";

export default function PageProjects () {

    const projects = [
        {
            hrefVideo: "/videos/Topic.webm",
            title: "Plataforma de Inovação",
            description: "inovação aberta que conecta empresas e startups por meio de desafios. Contribuí para a interface, UX e estruturação das páginas, incluindo dashboards e o funil de inovação. O projeto foi desenvolvido com Next.js, React e TypeScript.",
            linkedin: "#",
            link: "#"
        },
        {
            hrefVideo: "/videos/Topic.webm",
            title: "Plataforma de Inovação",
            description: "inovação aberta que conecta empresas e startups por meio de desafios. Contribuí para a interface, UX e estruturação das páginas, incluindo dashboards e o funil de inovação. O projeto foi desenvolvido com Next.js, React e TypeScript.",
            linkedin: "#",
            link: "#"
        },
        {
            hrefVideo: "/videos/Topic.webm",
            title: "Plataforma de Inovação",
            description: "inovação aberta que conecta empresas e startups por meio de desafios. Contribuí para a interface, UX e estruturação das páginas, incluindo dashboards e o funil de inovação. O projeto foi desenvolvido com Next.js, React e TypeScript.",
            linkedin: "#",
            link: "#"
        },
    ]

    return (

        <div className="flex flex-col">

            <div className="w-full min-h-screen flex flex-col justify-center items-center px-5 lg:px-15 py-25 gap-2">

                <h1 className="py-4 text-[30px] md:text-[35px] text-tex"> Projetos </h1>

                <div className="flex flex-wrap justify-center items-center gap-4">

                    {projects.map((project, key) => (
                        
                        <CardProject key={key} {...project} />

                    ))}

                </div>

            </div>

            <Footer/>
        </div>

    )

}