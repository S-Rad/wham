import Particles from 'react-tsparticles'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    '@global': {
        '#snowflakes': {
            width: '100%',
            height: '100%',
        },
    },
})

const Snowflakes = () => {
    const classes = useStyles()
    return (
        <Particles
            id="snowflakes"
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
                        value: 200,
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
}

export default Snowflakes
