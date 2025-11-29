"use client"

import CardSwap, { Card } from '../ui/CardSwap'

export default function ProjectCardSwap () {

    return (
        <div className="relative h-30">
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={4000}
                pauseOnHover={true}
            >

                <Card className="border-deep-azure">
                <div className="h-full w-full transition-all rounded-xl duration-200 hover:shadow-[0_0_15px_#3B82F6]">
                </div>
                </Card>

                <Card>
                <div className="h-full w-full transition-all rounded-xl duration-200 hover:shadow-[0_0_15px_#3B82F6]">
                </div>
                </Card>

                <Card>
                <div className="h-full w-full transition-all rounded-xl duration-200 hover:shadow-[0_0_15px_#3B82F6]">
                </div>
                </Card>


            </CardSwap>
        </div>
    )
}