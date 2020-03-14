import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute  = ({component: Component, userInSession, ...rest}) => {
  console.log('aqui component', userInSession)
    console.log('aqui userinsession', userInSession)
    console.log('aqui rest', rest)
      return (
        <Route
          {...rest}
          render={ props  => {
              if(userInSession){
                return <Component {...props} rest={rest} loggedInUser={userInSession}/>
              } else {
                return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
              }
            }
          }
        />
      )
  }
  export default ProtectedRoute;