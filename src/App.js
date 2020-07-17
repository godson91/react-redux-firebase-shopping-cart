import React from 'react';
import ButtonAppBar from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './components/Signin';
import Footer from './components/Footer';
import { Switch,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Items from './components/Items';


const App = () =>  {
  return (
    <div  >
      <div><ButtonAppBar/></div>
        <div style = {{
      textAlign: "center"
    }}>
      
      <h1>Redux Shopping Cart App</h1>
      <Switch>
        <PrivateRoute path = "/items">
          <Items />
        </PrivateRoute>
        <Route path = "/">
          <SignIn />
        </Route>
      </Switch>
      <div><Footer/></div>

    </div>
        
    </div> 
  );
}

export default App;
