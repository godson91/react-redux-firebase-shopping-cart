import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";



// const intialState = {};

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyD5dr_dgN-AN84VTF5BaDs60q9vIyAzXLc",
    authDomain: "shopping-cart-c5642.firebaseapp.com",
    databaseURL: "https://shopping-cart-c5642.firebaseio.com",
    projectId: "shopping-cart-c5642",
    storageBucket: "shopping-cart-c5642.appspot.com",
    messagingSenderId: "999853699131",
    appId: "1:999853699131:web:86e9c3a7d5929816446c1e",
    measurementId: "G-W1F3Y7S50W"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };

  
const store = createStore(reducers, applyMiddleware(thunk,logger));
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};
ReactDom.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,

document.querySelector('#root'))


// google cliend id for Oauth for my Cart Cog Demo App
// 79165076782-ghicu26jci14glcl080abmdg0ktva3at.apps.googleusercontent.com

//client secret for Oauth Server Use
//4Mc79ciwDbQJITnYb8P4oTcw

