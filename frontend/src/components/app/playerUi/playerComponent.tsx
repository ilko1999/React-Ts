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
import './playerComponent.scss';

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
                <Typography id ="containButtons" component="div" >
                    <div className={classes.root} id= "player">
                            <IconButton  color="primary" aria-label="skip to previous song">
                            <SkipPreviousRoundedIcon className = "skips"/>
                        </IconButton>
                        <IconButton color="primary" aria-label="play a song">
                            <PlayArrowRoundedIcon className = "play" fontSize = 'large'  />
                        </IconButton>
                        <IconButton color="primary" aria-label="skip to next song">
                            <SkipNextRoundedIcon className = "skips" />
                        </IconButton>
                        <Typography variant='h3' id = "songPlaying" gutterBottom>
                            Song name
                        </Typography>                        
                        <div className = "like" >
                            <IconButton color="secondary" aria-label="like song" >
                            <FavoriteBorderRoundedIcon  fontSize = "large" />
                        </IconButton>
                        </div>
                        
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default CreateUiComponent;