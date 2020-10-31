import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {Grid} from '@material-ui/core'
import KanbanBoard from "./KanbanBoard";
import {getCards, getColumns} from "../redux/actions";
import AddKanbanCard from "./AddKanbanCard";

function App(props) {
   const {cards, columns}=props;

    useEffect(
        () => {
            props.getColumns();
            props.getCards();
        }, []
    )

    return (
        <Grid container direction='column'>
            <Grid item><Header/></Grid>
            <Grid item xs={12} ><AddKanbanCard /></Grid>
            <Grid item container>
                <Grid item xs={false} sm={1}/>

                <Grid item sm={10} xs={12}>
                    <KanbanBoard cards={cards} columns={columns}/>
                </Grid>

                <Grid item xs={false} sm={1}/>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    getCards:()=>dispatch(getCards()),
    getColumns:()=>dispatch(getColumns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
