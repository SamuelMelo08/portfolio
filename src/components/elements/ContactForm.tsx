"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"
import { Linkedin, SendIcon } from "lucide-react"
import { BsSend } from "react-icons/bs"
import { CiAt } from "react-icons/ci"
import { IoPersonOutline } from "react-icons/io5"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome muito curto",
  }),
  email: z.email( {
    message: "Digite um email válido"
  }),
  message: z.string().min(10, {
    message: "A mensagem é muito curta"
  })
})

export default function ContactForm() {
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        
        const message = `Olá meu nome é ${values.name} e gostaria de falar sobre: ${values.message}. Email: ${values.email}`.trim()
        
        const whatsappNumber = "+558882212302"
        const encodedMessage = encodeURIComponent(message)

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        window.open(whatsappUrl, "_blank")
            
    }

    return (

        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:px-4">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (

                    <FormItem>
                        <FormControl data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
                            <div className="relative">
                                <span className="absolute left-3 top-4 text-muted-foreground pointer-events-none z-10">
                                    <IoPersonOutline size={20} />
                                </span>

                                <Input
                                    placeholder="Digite seu e-mail"
                                    className="
                                    pl-12
                                    py-3
                                    rounded-xl
                                    text-base
                                    "
                                    {...field}
                                />
                            </div>
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (

                    <FormItem>
                        <FormControl data-aos="fade-up" data-aos-once="false" data-aos-duration="1500">
                            <div className="relative">
                                <span className="absolute left-3 top-4.5 text-muted-foreground pointer-events-none z-10">
                                    <CiAt size={20} />
                                </span>

                                <Input
                                    placeholder="Digite seu e-mail"
                                    className="
                                    pl-12
                                    py-3
                                    rounded-xl
                                    text-base
                                    "
                                    {...field}
                                />
                            </div>
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (

                    <FormItem>
                        <FormControl data-aos="fade-up" data-aos-once="false" data-aos-duration="1500">
                            <Textarea className="border-none bg-[#303053] h-30 py-4 rounded-xl" placeholder="Escreva sua mensagem aqui..." {...field} />
                        </FormControl>
                        {/* <FormDescription>
                            Como eu posso te ajudar?
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                <div className="flex justify-center" data-aos="fade-up" data-aos-once="false" data-aos-duration="500">
                    <Button variant={"gradientButton"} type="submit" className="w-full flex gap-4">
                        <BsSend /> Enviar mensagem
                    </Button>
                </div>
            </form>

        </Form>
    )
}