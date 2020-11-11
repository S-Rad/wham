import { Box, Dialog, Typography } from '@material-ui/core'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    dialog: {
        backgroundColor: 'transparent',
    },

    text: {
        color: 'white',
        textShadow: `0 0 5px red`,
        '&:hover': {
            textShadow: `0 0 5px red,
              0 0 10px #FFD733,
              0 0 20px #FFD733,
              0 0 40px #FFD733,
              0 0 60px #FFD733,
              0 0 80px #FFD733,
              0 0 100px #FFD733;`,
        },
    },
})

const Door = ({ day, imagepath }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    return (
        <>
            <Box height="100px" width="100px" display="flex" flexDirection="column" alignItems="center" onClick={e => setOpen(true)}>
                <Box display="flex" height="100%" alignItems="center" className={classes.text}>
                    <Typography variant="h2">{day}</Typography>
                </Box>
            </Box>
            <Dialog
                fullWidth
                maxWidth="lg"
                open={open}
                onClose={e => setOpen(false)}
                onClick={e => setOpen(false)}
                classes={{ paper: classes.dialog }}
            >
                <img src={imagepath} style={{ objectFit: 'scale-down' }} alt="Ein kleines weihnachtliches Bildchen." />
            </Dialog>
        </>
    )
}

export default Door
