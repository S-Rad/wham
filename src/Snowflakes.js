import Particles from 'react-tsparticles'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    '@global': {
        '#snowflakes': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            '& canvas': { position: 'absolute' },
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
                        enable: true,
                        speed: 5,
                        direction: 'bottom',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 300,
                            rotateY: 1200,
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 200,
                    },
                    opacity: {
                        value: 0.7,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    shape: {
                        type: 'image',
                        stroke: {
                            width: 7,
                            color: '#fff',
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                        image: {
                            src: 'http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png',
                            width: 100,
                            height: 100,
                        },
                    },
                    size: {
                        random: true,
                        value: 7,
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default Snowflakes
