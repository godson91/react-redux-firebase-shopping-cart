export const ADD_TO_CART = "ADD_TO_CART";
export const FETCHING_ITEMS = "FETCHING_ITEMS";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";



export const fetchingItems = () => {
    return {
        type: FETCHING_ITEMS
    }
};

export const fetchItemsSuccess = (items) => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
};


// export function addToCartAction({name,image,description,price,starReview}){
//     return {
//         type: ADD_TO_CART,
//         payload: {name,image,description,price,starReview}
//     }
// }
