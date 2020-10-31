import React from 'react';
import {Grid, Toolbar} from "@material-ui/core";
import KanbanCard from "./KanbanCard";
import Badge from '@material-ui/core/Badge';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddKanbanCard from "./AddKanbanCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
    gridBg: {background:'#f6f6f6'},
    titleText:{fontFamily:"Arial, Verdana, Suns", fontSize:"12px"},
}))

function KanbanColumn(props) {
    const {cards, column, isFirst, isLast} = props;
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.gridBg}  >
            <Grid item ></Grid>
            <Grid item xs={12}>
                <span className={classes.titleText}>{column.status.toUpperCase()}</span>
                <Badge color="secondary" badgeContent={cards.filter(el => el.status === column.status).length}>
                    <AssignmentIcon fontSize='small'/>
                </Badge>
            </Grid>

            <Grid item xs={12}>
                {cards.filter(el => el.status === column.status).map(el =>
                    <Grid container spacing={3} key={el._id}>
                        <Grid item xs={12}>
                            <KanbanCard card={el} isLastColumn={isLast} isFirstColumn={isFirst}/>
                        </Grid>
                    </Grid>
                )}

            </Grid>
        </Grid>
    );
}

export default KanbanColumn;