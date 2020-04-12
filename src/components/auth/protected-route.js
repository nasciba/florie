import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedInUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (loggedInUser || sessionStorage.loggedUser) {
          return <Component {...props} rest={rest} loggedInUser={loggedInUser} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default ProtectedRoute;