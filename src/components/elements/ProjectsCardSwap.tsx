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

                <Card>
                    <h3>Card 1</h3>
                    <p>Your content here</p>
                </Card>
                
                <Card>
                    <h3>Card 2</h3>
                    <p>Your content here</p>
                </Card>

                <Card>
                    <h3>Card 3</h3>
                    <p>Your content here</p>
                </Card>

            </CardSwap>
        </div>
    )
}