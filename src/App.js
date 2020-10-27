import Door from './Door.js'
import { Box } from '@material-ui/core'

function App() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" width="80vw" flexDirection="column" alignItems="center">
                {[...Array(24).keys()].map(day => (
                    <Door day={day + 1} />
                ))}
            </Box>
        </Box>
    )
}

export default App
