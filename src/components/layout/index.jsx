import React, { useState } from 'react'
import { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import './layout.scss'
import Marquees from './slider'
import axios from 'axios'
import Navbar from './navbar'

export const LandingPage = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [message, setMessage] = useState('')
  const { REACT_APP_BASEURL } = process.env

  useEffect(() => {
    // var config = {
    //   method: "get",
    //   url: `${REACT_APP_BASEURL}/service-update/`,
    //   headers: {},
    // };
    // axios(config)
    //   .then(function (response) {
    //     setMessage(response.data.result.message);
    //   })
    //   .catch(function (error) {
    //   });
  }, [])

  return (
    <div className='app-wrapper'>
      {/* <>
      <Marquees>
    </Marquees>
  </> */}
      <div className='app-navbar'>
        <Navbar />
      </div>

      <div className='layout-children'>
        <div className='layout-ch'>
          <Route {...props}>{children}</Route>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export const AuthPage = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return <Route {...props}>{children}</Route>
}

export const ProtectedRoutes = ({ children, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to='/login' />}
    </Route>
  )
}
