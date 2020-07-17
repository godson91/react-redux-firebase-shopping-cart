import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import faker from 'faker';

const CreateItem = () => {

  const [presentItem,setPresentItem] = useState();
  
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  const handleChange = ({ 
      currentTarget:
       { name, value }
    }) => {
            if (name === "name"){
                return setPresentItem(value);
            }
  };
  const addNewItem = (item) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("items")
      .add({
        name: item,
        image: faker.image.avatar(),
        description: "",
        price: 0,
        starReview: 0
      })
      .then((docRef) => {
        docRef.update({
          itemID: docRef.id,
        });
      });
    setPresentItem([]);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={presentItem}
          onChange={handleChange}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            addNewItem(presentItem);
          }}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};
export default CreateItem;