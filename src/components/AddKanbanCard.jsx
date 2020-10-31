import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {Add} from "@material-ui/icons";
import {Dialog, DialogTitle,  DialogContent, TextField, DialogActions} from "@material-ui/core";
import {addCard } from "../redux/actions";
import {connect} from "react-redux";

function AddKanbanCard(props) {
    const [open, setOpen] = React.useState(false);
    const [nameInput, setNameInput]=useState('');
    const [descriptionInput, setDescriptionInput]=useState('');
    const [statusInput, setStatusInput]=useState('todo');

    const addCardButtonHandler = ()=>{
        const card = {name:nameInput, description:descriptionInput, status:statusInput, priority:1}
        props.addCard(card);
        setNameInput('');
        setDescriptionInput('');
        setStatusInput('todo');
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button size = 'small' color='default'  startIcon={<Add fontSize='small'/>} onClick={handleClickOpen }>
                Add New Card...
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Card Name"
                        type="text"
                        fullWidth
                        onChange={(e)=>setNameInput(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Card Description"
                        type="text"
                        fullWidth
                        onChange={(e)=>setDescriptionInput(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" >
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={addCardButtonHandler} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    addCard: (card) => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddKanbanCard);
