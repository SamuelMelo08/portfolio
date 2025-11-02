import Particles from './Particles';

export default function Background() {

    return (

        <div className='absolute inset-0 -z-10 overflow-hidden'>
            <Particles
                particleColors={['#7C3AED', '#2563EB', '#A78BFA']}
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