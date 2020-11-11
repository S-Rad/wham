import Door from './Door'
import { Box, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import background from './assets/background-main.jpg'
import Snowflakes from './Snowflakes'
import CursorTrail from './CursorTrail'

const importAll = r => {
    return r.keys().map(r)
}

const images = importAll(require.context('./assets/days', false, /\.(png|jpe?g|svg)$/)).map(obj => obj.default)

const App = () => {
    return (
        <ThemeProvider
            theme={responsiveFontSizes(
                createMuiTheme({
                    typography: {
                        useNextVariants: true,
                        h1: {
                            color: 'white',
                            fontFamily: "'Mountains of Christmas', cursive",
                            textAlign: 'center',
                        },
                    },
                })
            )}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                minHeight="100vh"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    fontSize: '50px',
                    color: 'white',
                }}
            >
                <Snowflakes />
                <CursorTrail />
                <Box minHeight="100vh" display="flex" alignItems="center" zIndex="1">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h1">Willkommen beim TXS-Weihnachtszauber!</Typography>
                        <Box display="flex" width="80vw" flexWrap="wrap">
                            {[8, 14, 23, 24, 3, 4, 12, 15, 2, 20, 19, 13, 21, 7, 11, 10, 16, 5, 9, 1, 17, 6, 22, 18].map(day => (
                                <Door key={day} day={day} imagepath={images[day - 1]} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App
