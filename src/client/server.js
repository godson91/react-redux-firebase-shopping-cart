import axios from 'axios';
import {fetchingItems, fetchItemsSuccess} from './actions/actionTypes';

const findItems =  ()  => {
    //Folloing a thunk pattern in which one or more dispatch functions can be called asynchronously
    //This anonymous function is provided to the dispatch functionw when dispatch(findCharacters()) is called
    return  dispatch => {
        dispatch(fetchingItems());
         axios.get('http://localhost:3001/items')
        .then(response => dispatch(fetchItemsSuccess(response.data)));
        // .catch(err => dispatch(fetchCharactersFailed(err)));
    }
}

export {findItems}
// export default axios.create({
//     baseURL: 'http://localhost:3001'
// });

