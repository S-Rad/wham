import { Box } from '@material-ui/core'

const Door = ({ day, imagepath }) => (
    <Box height="100px" width="100px" display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" height="100%" alignItems="center">
            {day}
        </Box>
    </Box>
)

export default Door
