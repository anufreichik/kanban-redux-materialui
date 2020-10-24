import axios from 'axios';

export function getCards() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `https://nazarov-kanban-server.herokuapp.com/card`
        })
            .then(
                (res) => dispatch({type: 'SET_CARDS', payload: res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}

export function getColumns() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `https://nazarov-kanban-server.herokuapp.com/column`
        })
            .then(
                (res) => dispatch({type: 'SET_COLUMNS', payload: res.data})
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}

export function deleteCard(cardId) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://nazarov-kanban-server.herokuapp.com/card/${cardId}`
        })
            .then(
                (res) => dispatch(getCards())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}

export function addCard(card) {
    return (dispatch) => {
        axios.post(`https://nazarov-kanban-server.herokuapp.com/card`, card)
            .then(
                (res) => dispatch(getCards())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}

export function moveCard(card, columns, val) {
    return (dispatch) => {
        const statuses = columns.map(el => el.status);
        const newStatus = statuses[statuses.indexOf(card.status) + val];
        axios.patch(`https://nazarov-kanban-server.herokuapp.com/card/${card._id}`, {status: newStatus})
            .then(
                (res) => dispatch(getCards())
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}