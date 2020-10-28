import Particles from 'react-tsparticles'

const Snowflakes = () => (
    <Particles
        id="tsparticles"
        width="100%"
        height="100%"
        options={{
            fpsLimit: 60,

            particles: {
                color: {
                    value: '#ffffff',
                },

                move: {
                    direction: 'down',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        }}
    />
)

export default Snowflakes
