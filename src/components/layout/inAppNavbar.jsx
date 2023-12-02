import React, { useEffect, useState } from 'react'
import { Logo } from '../../assets/svg'
import { useHistory } from 'react-router-dom'
import './nav.css'
import ps from '../../assets/ps.svg'
import as from '../../assets/as.svg'
import { WindowSharp } from '@mui/icons-material'

export default function InAppNavbar() {
  const history = useHistory()
  const [user, setUser] = useState({})
  const logout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    } else {
      history.push('/')
    }
  }, [])

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light'
      style={{ zIndex: '999999' }}
    >
      <li onClick={() => history.push(`/home`)} style={{ listStyle: 'none' }}>
        <Logo />
      </li>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto' style={{ margin: '10px' }}>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Shipment
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                className='dropdown-item'
                onClick={() => {
                  history.push('/book_delivery')
                }}
              >
                Book Shipment
              </li>
              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                onClick={() => {
                  history.push('/locate_hub')
                }}
                className='dropdown-item'
              >
                Drop-off Location
              </li>
              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                className='dropdown-item'
                onClick={() => {
                  history.push('/tracking_page')
                }}
              >
                Track Shipment
              </li>

              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                className='dropdown-item'
                onClick={() => {
                  history.push('/refer_friend')
                }}
              >
                Tell a friend
              </li>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Account
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                className='dropdown-item'
                onClick={() => {
                  history.push('/book_delivery')
                }}
              >
                {`Hello, ${user ? user.firstname : 'There'}`}
              </li>
              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                onClick={() => {
                  history.push('/account')
                }}
                className='dropdown-item'
              >
                Account Settings
              </li>
              <li
                style={{ marginLeft: '0px', marginTop: '10px' }}
                onClick={() => {
                  history.push('/account')
                }}
                className='dropdown-item'
              >
                Shipping History
              </li>
            </div>
          </li>
        </ul>
        <div className='form-inline my-2 my-lg-0 logout'>
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
            onClick={logout}
            style={{ margin: '' }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
