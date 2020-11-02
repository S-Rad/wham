import { Box, Dialog } from '@material-ui/core'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    dialog: {
        backgroundColor: 'transparent',
    },

    text: {
        color: 'red',
        '&:hover': { color: 'blue' },
    },
})

const Door = ({ day, imagepath }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    return (
        <>
            <Box height="100px" width="100px" display="flex" flexDirection="column" alignItems="center" onClick={e => setOpen(true)}>
                <Box display="flex" height="100%" alignItems="center" className={classes.text}>
                    {day}
                </Box>
            </Box>
            <Dialog open={open} onClose={e => setOpen(false)} onClick={e => setOpen(false)} classes={{ paper: classes.dialog }}>
                <img src={imagepath} alt="Ein kleines weihnachtliches Bildchen." />
            </Dialog>
        </>
    )
}

export default Door
