import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar,IconButton,Typography,Button} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(()=>({
    toolbarStyles: {background:'#0376ca'},
    typographyStyles:{flex:1}
}))

function Header(props) {
const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbarStyles} >
                <Typography variant="h6" className={classes.typographyStyles} >
                    Kanban Inc.
                </Typography>
                <FacebookIcon  fontSize={'medium'}/>
                <LinkedInIcon fontSize={'medium'}/>
               <YouTubeIcon fontSize={'medium'}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;