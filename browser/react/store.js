import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root-reducer';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(ReduxThunk,createLogger()));
//, window.__REDUX_DEVTOOLS_EXTENSION__()



export default store;