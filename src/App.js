import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routes from './Routes'
import $ from 'jquery'
import { NotificationContainer } from 'react-notifications'
import 'sweetalert2/src/sweetalert2.scss'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    $(window).on('load', function () {
      //everything is loaded
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })
  }, [])
  const AppLoad = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
        }}
      >
        <h2 style={{ color: 'white', fontSize: '17px' }}>
          Loading website content...
        </h2>
        <br />
        {/* <p style={{ color: "white", fontSize: "12px" }}>
          Getting page content ready
        </p> */}
      </div>
    )
  }

  const ReturnApp = () => {
    return (
      <div>
        <div
          style={
            loading
              ? { display: 'block', background: '#0f151a' }
              : { display: 'none' }
          }
        >
          <AppLoad />
        </div>

        <div
          style={
            loading
              ? { display: 'none' }
              : { display: 'block', height: '100%', width: '100%' }
          }
        >
          <NotificationContainer />
          <Routes />
        </div>
      </div>
    )
  }

  return <ReturnApp />
}

export default App
