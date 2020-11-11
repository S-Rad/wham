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
                <Box display="flex" flexDirection="column" alignItems="center">
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Willkommen beim TXS-Weihnachtszauber!</h2>
                    <Box display="flex" width="80vw" flexWrap="wrap">
                        {[8, 14, 23, 24, 3, 4, 12, 15, 2, 20, 19, 13, 21, 7, 11, 10, 16, 5, 9, 1, 17, 6, 22, 18].map(day => (
                            <Door key={day} day={day} imagepath={images[day - 1]} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default App
