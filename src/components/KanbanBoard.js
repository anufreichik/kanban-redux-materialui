import React from 'react';
import KanbanCard from "./KanbanCard";
import {Grid} from "@material-ui/core";
import KanbanColumn from "./KanbanColumn";

function KanbanBoard(props) {
    return (
        <Grid container spacing={4} >
            {props.columns.map(el=>

                <Grid item xs={3} key={el._id}>
                    <KanbanColumn  columns={props.columns} cards={props.cards} column={el}/>
                </Grid>
            )}

        </Grid>
    );
}

export default KanbanBoard;