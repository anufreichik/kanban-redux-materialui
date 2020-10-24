const initialState = {
  cards: [],
  columns:[]
};

const kanban = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        cards:action.payload
      }
    case 'SET_COLUMNS':
      return {
        ...state,
        columns:action.payload
      }

    default:
      return state;
  }
};

export default kanban;
