import * as ActionTypes from './ActionTypes';


export const Details = (state = { isLoading: true,
    errMess: null,
    details:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DETAILS:
            return {...state, isLoading: false, errMess: null, details: action.payload};

        case ActionTypes.DETAILS_LOADING:
            return {...state, isLoading: true, errMess: null, details: []}

        case ActionTypes.DETAILS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};