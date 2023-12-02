import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { NotificationManager } from 'react-notifications'

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  const token = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect
              to={{ pathname: '/admin/login', state: { from: props.location } }}
            />
          </>
        )
      }
    />
  )
}

export default ProtectedRoute
