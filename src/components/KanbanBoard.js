import React from 'react';
import KanbanCard from "./KanbanCard";
import {Grid} from "@material-ui/core";
import KanbanColumn from "./KanbanColumn";
import AddKanbanCard from "./AddKanbanCard";

function KanbanBoard(props) {
    return (
        <Grid container spacing={4} >

            {props.columns.map((el, i)=>

                <Grid item xs={3} key={el._id}>
                    <KanbanColumn  columns={props.columns} cards={props.cards} column={el} isFirst={i===0} isLast={i===props.columns.length-1}/>
                </Grid>
            )}

        </Grid>
    );
}

export default KanbanBoard;