"use client"

import CardSwap, { Card } from '../ui/CardSwap'

export default function ProjectCardSwap () {

    return (
        <div className="relative h-30">
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
            >

                <Card className='border-deep-azure'>
                    
                </Card>
                
                <Card>
                    
                </Card>

                <Card>
                    
                </Card>

            </CardSwap>
        </div>
    )
}