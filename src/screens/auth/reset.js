import React, { useState, useEffect } from 'react'
import './index.scss'
import './index.css'
import authBanner from '../../assets/4.jpeg'
import { useHistory } from 'react-router-dom'
import validatePassword from '../../components/validatePassword'
import validateEmail from '../../components/validateEmail'
import { NotificationManager } from 'react-notifications'
import { axiosCalls } from '../../components/_api'
import { hideLoader, showLoader } from '../../components/loader'
import axios from 'axios'

const Auth = () => {
  const history = useHistory()
  const [auth, setAuth] = useState({
    password: '',
  })

  const { REACT_APP_BASEURL } = process.env
  var retrievedObject = localStorage.getItem('id_token')
  var id = JSON.parse(retrievedObject)

  // Get the token from the URL
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')

  // Use the token as needed

  // Example usage: store the token in state or perform any other actions
  const loginUser = async (e) => {
    e.preventDefault()
    try {
      await axios
        .put(
          `https://qc-express.co/api/v1/auth/reset-password?token=${token}`,
          {
            password: auth.password,
          }
        )
        .then((res) => {
          NotificationManager.success(res.data.message)
          setTimeout(() => {
            history.push({
              pathname: '/login',
            })
          }, 2000)
        })
    } catch (error) {
      NotificationManager.error('Error', 'Invalid Email')
    }
  }

  return (
    <div className='authWrap'>
      <div className='authWrapCol1'>
        <img src={authBanner} alt='' />
      </div>
      <div className='authWrapCol2'>
        <div className='actionAuthBtn'>
          <button
            onClick={() => {
              history.push(`/home`)
            }}
          >
            Back
          </button>
        </div>
        <div className='authHeader'>
          <h2>Enter New Password</h2>
        </div>
        <div className='formWrap'>
          <form action=''>
            <div className='inputWrap'>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  })
                }}
                placeholder='Enter New Password'
                type='text'
              />
            </div>

            <div className='termsAgree'>
              <p>
                By continuing, I represent that I have read, understand, and
                fully agree to the QC Express{' '}
                <a
                  onClick={() => {
                    history.push('/terms')
                  }}
                >
                  terms of service{' '}
                </a>
                and{' '}
                <a
                  onClick={() => {
                    history.push('/privacy')
                  }}
                >
                  privacy policy.
                </a>
              </p>
            </div>

            <div className='submitBtn'>
              <button onClick={loginUser}>Continue</button>
            </div>
            <hr />
            <div style={{ textAlign: 'center' }}>
              <p>New to QC Express?</p>
            </div>
            <div className='submitBtn'>
              <button
                onClick={() => {
                  history.push(`/signup`)
                }}
                style={{ background: '#4169e2' }}
              >
                Create your QC Express account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
