import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {ArrowBack, ArrowDownward, ArrowForward, ArrowUpward} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import {changePriority, deleteCard, moveCard, updateCard} from "../redux/actions";
import {connect} from "react-redux";
import UpdateKanbanCard from "./UpdateKanbanCard";

const useStyles = makeStyles({
    root: {
        minWidth: 120,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function KanbanCard(props) {
    //CARD FROM PROPS
    const {card} = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const [openEditCardDialog, setOpenEditCardDialog] = useState(false);
    const handleClick = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDelete = (cardId) => {
        props.deleteCard(cardId);
        setAnchorEl(null);
    };

    const hideMenu = () => {
        setAnchorEl(null);
    }
    const handleEdit = () => {
        setAnchorEl(null);
        setOpenEditCardDialog(true);
    };

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {card.status.toUpperCase().slice(0, 1)}
                        </Avatar>
                    }
                    action={
                        <>
                            <IconButton aria-label="settings" onClick={handleClick} aria-haspopup="true"
                                        aria-controls="simple-menu">
                                <MoreVertIcon/>
                            </IconButton>
                            {
                                openEditCardDialog &&
                                <UpdateKanbanCard card={card} updateCard={props.updateCard} hideMenu={hideMenu}
                                                  setOpenEditCardDialog={setOpenEditCardDialog}/>
                            }

                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                <MenuItem onClick={() => handleDelete(card._id)}>Delete</MenuItem>
                            </Menu>
                        </>
                    }
                    title={card.name}
                    subheader={card.description}
                />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Priority- {card.priority}
                    <IconButton aria-label="settings" onClick={() => props.updatePriority(card._id, card.priority - 1)}
                                disabled={card.priority === 1}  >
                        <ArrowUpward fontSize='small'/>
                    </IconButton>
                    <IconButton aria-label="settings" onClick={() => props.updatePriority(card._id, card.priority + 1)}
                                disabled={card.priority === 10}  >
                        <ArrowDownward fontSize='small'/>
                    </IconButton>
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container direction='row' justify='space-between' alignItems="center">
                    <IconButton aria-label="settings" onClick={() => props.moveCard(card, props.columns, -1)}  disabled={props.isFirstColumn}>
                        <ArrowBack fontSize='small'/>
                    </IconButton>

                    <IconButton aria-label="settings" onClick={() => props.moveCard(card, props.columns, 1)} disabled={props.isLastColumn}>
                        <ArrowForward fontSize='small'/>
                    </IconButton>
                </Grid>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    columns: state.columns
});
const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    moveCard: (card, columns, val) => dispatch(moveCard(card, columns, val)),
    updateCard: (card) => dispatch(updateCard(card)),
    updatePriority: (cardId, val) => dispatch(changePriority(cardId, val))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KanbanCard);