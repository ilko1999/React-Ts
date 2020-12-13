import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(2),
            },
        },
    }),
);

function CreateUiComponent() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{boxShadow: '5px 10px 8px 10px #888888' , backgroundColor: '#FAFAFA' , height: '100px', width: '100%', position: 'fixed', bottom: '0', right: '0', }} >
                    <div className={classes.root} style = {{display: 'flex', justifyContent: 'center'}}>
                    <IconButton style = {{display: 'flex'}} color="primary" aria-label="skip to previous song">
                            <SkipPreviousRoundedIcon fontSize = 'small'/>
                        </IconButton>
                        <IconButton color="primary" aria-label="play a song">
                            <PlayArrowRoundedIcon fontSize = 'large' />
                        </IconButton>
                        <IconButton color="primary" aria-label="skip to next song">
                            <SkipNextRoundedIcon fontSize = 'small' />
                        </IconButton>
                        <Typography variant='h3' gutterBottom style={ {display: 'flex', alignItems: 'center', fontSize: '18px'}}>
                            Song name
                        </Typography>
                        <IconButton style = {{display: "flex", justifyContent: 'flex-end'}} color="secondary" aria-label="skip to next song">
                            <FavoriteBorderRoundedIcon />
                        </IconButton>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default CreateUiComponent;