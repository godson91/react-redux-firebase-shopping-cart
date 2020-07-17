import server from '../server';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

export const createItem = (itemValues) => async dispatch => {
    server.post('/items', itemValues);
}