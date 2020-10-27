import { Box, Dialog } from '@material-ui/core'
import { useState } from 'react'

const Door = ({ day, imagepath }) => {
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <>
            <Box height="100px" width="100px" display="flex" flexDirection="column" alignItems="center" onClick={e => setOpen(true)}>
                <Box display="flex" height="100%" alignItems="center">
                    {day}
                </Box>
            </Box>
            <Dialog open={open} onClose={e => setOpen(false)} onClick={e => setOpen(false)}>
                Hello World
            </Dialog>
        </>
    )
}

export default Door