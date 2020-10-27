import Door from './Door.js'
import { Box } from '@material-ui/core'
import background from './assets/background-main.jpg'

function App() {
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
            <Box minHeight="100vh" display="flex" alignItems="center">
                <Box display="flex" width="80vw" flexWrap="wrap">
                    {[...Array(24).keys()].map(day => (
                        <Door day={day + 1} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default App