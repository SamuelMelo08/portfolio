import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PropsVideoFullScreen } from "@/types/types"
import { MdFullscreen } from "react-icons/md"



export default function VideoFullScreen ({hrefVideo, title}: PropsVideoFullScreen) {

    return (

        <Dialog>
        <DialogTrigger>
            <MdFullscreen size={40} className="text-white" />
        </DialogTrigger>
        <DialogContent className="md:min-w-2xl lg:min-w-5xl">

            <DialogHeader>
            
                <DialogTitle>{title}</DialogTitle>
    
            </DialogHeader>

            <DialogDescription className="flex justify-center items-center py-4" asChild>
                
                <div className="w-full aspect-video">
                    <video
                    src={hrefVideo}
                    className="w-full h-full object-contain rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    />
                </div>

            </DialogDescription>

        </DialogContent>
        </Dialog>

    )

}