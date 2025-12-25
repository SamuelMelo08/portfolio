import CardProject from "@/components/elements/CardProject";
import Footer from "@/components/sessions-page/Footer";

export default function PageProjects () {

    const projects = [
        {
            hrefVideo: "/videos/Topic.webm",
            title: "Topic",
            description: "Topic é uma plataforma de inovação criada para aproximar empresas e startups, facilitando a criação e o desenvolvimento de soluções dentro de um ambiente orientado à inovação.",
            linkedin: "https://www.linkedin.com/posts/samuel-melo-4a139b378_mais-uma-vez-tive-a-oportunidade-de-participar-activity-7390487269272489984-Kiyx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1RSfkBupa-2zcCnrxZ8lv3dYDbsjIevgg",
            link: "https://plataforma-inovacao-aberta.vercel.app/"
        },
        {
            hrefVideo: "/videos/Amotur.webm",
            title: "Amotur",
            description: "Amotur é uma plataforma de turismo que centraliza informações sobre pontos turísticos, e estabelecimentos de Amontada/CE por meio de um mapa interativo.",
            linkedin: "https://www.linkedin.com/posts/samuel-melo-4a139b378_frontend-nextjs-react-activity-7388935148651560961-nnEM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1RSfkBupa-2zcCnrxZ8lv3dYDbsjIevgg",
            link: "https://amotur-k1qt.vercel.app/"
        },
        {
            hrefVideo: "/videos/Soraia-Felix-site.webm",
            title: "Portifólio Soraia Felix",
            description: "Portfólio profissional desenvolvido para apresentar trajetória e serviços de forma clara, moderna e visualmente atrativa, com foco em organização da informação e identidade visual.",
            linkedin: "https://www.linkedin.com/posts/samuel-melo-4a139b378_tive-a-oportunidade-de-desenvolver-meu-primeiro-activity-7400946006609088513-sgkD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1RSfkBupa-2zcCnrxZ8lv3dYDbsjIevgg",
            link: "https://soraiafelix.com.br"
        },
    ]

    return (

        <div className="flex flex-col">

            <div className="w-full min-h-screen flex flex-col justify-center items-center px-5 lg:px-15 py-25 gap-2">

                <h1 className="py-4 text-[30px] md:text-[35px] text-tex" data-aos="fade-down" data-aos-duration="1000" data-aos-anchor-placement> Projetos </h1>

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