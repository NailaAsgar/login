import {createStore, combineReducers, applyMiddleware} from 'redux';
import{ Details } from './details';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            details: Details,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}