import React, {useEffect} from 'react';
import server, { findItems } from '../client/server';
import {connect,useSelector, useDispatch} from 'react-redux';
import faker from 'faker';

const HomePage = (props) => {
    const dispatch = useDispatch();
    
   
    const fetchItems = () => dispatch(findItems());

    useEffect(() => {
        fetchItems();
    }, []);

    const items = useSelector(state => state.items.items);

    // const itemlist = () => items.map((item, key) => {
    
    // return (
    //     <div className="ui center aligned container">
    //         <ul>
    //             {items.map(itenm)}
    //         </ul>
            
    //     </div>
    // )
}


export default HomePage;

