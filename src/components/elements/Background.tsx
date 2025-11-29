'use client'

import { useTheme } from 'next-themes';
import Particles from '../ui/Particles';

export default function Background() {
    const { theme, setTheme} = useTheme()

    const particlesColors = theme === "dark" ? 
        ['#7C3AED', '#2563EB', '#A78BFA']
        :
        ['#7C3AED', '#2563EB', '#C7D2FE']
    return (

        <div className='absolute inset-0 -z-10 overflow-hidden' data-aos="fade-zoom-in" data-aos-delay="800">
            <Particles
                particleColors={particlesColors}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>

    )
}