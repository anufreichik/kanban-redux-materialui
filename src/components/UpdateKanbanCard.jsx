import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";


function UpdateKanbanCard(props) {
    const {card, updateCard, setOpenEditCardDialog} = props;

    const [open, setOpen] = React.useState(false);
    const [nameInput, setNameInput] = useState(card.name);
    const [descriptionInput, setDescriptionInput] = useState(card.description);
    const [statusInput, setStatusInput] = useState(card.status);


    const handleClose = () => {
        //setOpen(false);
        setOpenEditCardDialog(false)
    };

    const updateOnClick = () => {
        const newCard = {_id: card._id, name: nameInput, description: descriptionInput, status: statusInput}
        updateCard(newCard);
        //setOpen(false);
        setOpenEditCardDialog(false)
    }

    return (
        <>


            <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Card Name"
                        type="text"
                        fullWidth
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Card Description"
                        type="text"
                        fullWidth
                        value={descriptionInput}
                        onChange={(e) => setDescriptionInput(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={updateOnClick} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default UpdateKanbanCard;