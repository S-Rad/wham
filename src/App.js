import Door from './Door.js'
import { Box } from '@material-ui/core'
import background from './assets/background-main.jpg'

function App() {
    console.log(background)
    return (
        <Box display="flex" flexDirection="column" alignItems="center" style={{ backgroundImage: 'url()' }}>
            <Box display="flex" width="80vw" flexWrap="wrap">
                {[...Array(24).keys()].map(day => (
                    <Door day={day + 1} />
                ))}
            </Box>
        </Box>
    )
}

export default App
