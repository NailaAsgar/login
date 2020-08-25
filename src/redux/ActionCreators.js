import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';



export const fetchDetails = () => (dispatch) => {    //this is thunk 

    dispatch(detailsLoading(true));

    return fetch(baseUrl + 'details')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText)  //creting error object in java script specifying the error
                error.response = response;
                throw error;
            }
        },
        error => {       //dont hear anything back from the server, so thats where u have to handle the error.
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())  //convert incoming response to json. it is a call back function
        .then(details => dispatch(addDetails(details)))
        .catch(error => dispatch(detailsFailed(error.message)));
}

export const detailsLoading = () => ({
    type: ActionTypes.DETAILS_LOADING
});

export const detailsFailed = (errmess) => ({   //this is function which returns something.
    type: ActionTypes.DETAILS_FAILED,  //returning action object
    payload: errmess
});

export const addDetails = (details) => ({
    type: ActionTypes.ADD_DETAILS,
    payload: details
});