import {FETCHING_ITEMS, FETCH_ITEMS_SUCCESS} from '../client/actions/actionTypes';

const itemReducer =(

    state = {
        items: [],
    },action
) => {
    switch(action.type) {
        case FETCHING_ITEMS:
            return {...state, loading: true};
        case FETCH_ITEMS_SUCCESS:
            return {...state, loading: false, items: [...action.payload]};
        default:
            return state;
}
     
};




export default itemReducer;
