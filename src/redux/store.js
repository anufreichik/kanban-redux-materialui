import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import kanban from './reducer';
import thunk from "redux-thunk";

const store = createStore(kanban, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
