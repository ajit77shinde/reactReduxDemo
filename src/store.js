import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducer/simpleReducer';

export default function configureStore(initialstate ={}) {
return createStore(
    RootReducer,
    applyMiddleware(thunk)
)

}