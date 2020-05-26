//@ts-check
import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    const isLogged = JSON.parse(localStorage.getItem("logged"));
    return (
        <Route
        {...rest}
        render={({ location }) =>
          isLogged ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
      );
}
