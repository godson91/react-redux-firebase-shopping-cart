import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

// RRF has two functions we can use for this: isLoaded and isEmpty.
// isLoaded checks whether the auth has been loaded, and we can use isEmpty to check whether the auth is empty
const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (

            // PrivateRoute will render a route component, which will in turn 
            // render its children if the user has signed in, and a redirect component from react-router if not.
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;