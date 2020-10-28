import Door from './Door'
import { Box } from '@material-ui/core'
import background from './assets/background-main.jpg'
import Snowflakes from './Snowflakes'
import CursorTrail from './CursorTrail'

const importAll = r => {
    return r.keys().map(r)
}

const images = importAll(require.context('./assets/days', false, /\.(png|jpe?g|svg)$/)).map(obj => obj.default)

const App = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                fontFamily: "'Mountains of Christmas', cursive",
                fontSize: '50px',
            }}
        >
            <Snowflakes />
            <CursorTrail />
            <Box minHeight="100vh" display="flex" alignItems="center" zIndex="1">
                <Box display="flex" width="80vw" flexWrap="wrap">
                    {[...Array(24).keys()].map(day => (
                        <Door day={day + 1} imagepath={images[day]} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default App
