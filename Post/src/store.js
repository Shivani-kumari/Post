import { combineReducers, createStore, applyMiddleware } from 'redux';
import CurdReducer from './redux/reducer/CurdReducer'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    curd:CurdReducer
})
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
