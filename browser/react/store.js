import { createStore } from 'redux';
import reducer from './reducers/root-reducer';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__());




export default store;