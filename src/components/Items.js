import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import CreateItem from "./CreateItem";
import {RecipeReviewCard} from './Card';


const Items = () => {
    
  const { displayName, uid } = useSelector((state) => state.firebase.auth);

  useFirestoreConnect({
    collection: `users/${uid}/items`,
    storeAs: "items",
  });

  const items = useSelector((state) => state.firestore.data.items);
  return (
    <div>
      <h3>Hello {displayName}!!</h3>
      <h4>Items</h4>
      <CreateItem />
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {items &&

          <RecipeReviewCard />
            // <li key={item.itemId}>
            //   <label>name: {item.name}</label>
            //   <label>description: {item.description}</label>
            //   <label>image: <img src={item.image}></img> </label>
            //   <label>price: {item.price}</label>
            //   <label>starReview: {item.starReview}</label>                        
            // </li>
          }
      </ul>
    </div>
  );
};
export default Items;