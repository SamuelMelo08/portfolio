import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from "../ui/button";

export default function DownloadCvButton () {

    return (

        <Button variant={"gradientButton"} className="flex items-center justify-center gap-2.5 hover:shadow-[0_0_10px_2px_#2563EB] transition-all duration-300">
            <IoDocumentTextOutline className="!h-5 !w-5"/> Download CV
        </Button>

    )

}