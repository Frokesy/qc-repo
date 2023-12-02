import React, { useState } from 'react'
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
    email: '',
  })
  const [showMsg, setshowMsg] = useState(false)
  const [showError, setshowError] = useState(false)

  const { REACT_APP_BASEURL } = process.env

  const loginUser = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(`https://qc-express.co/api/v1/auth/password-reset-link`, {
          email: auth.email,
        })
        .then((res) => {
          NotificationManager.success(
            'Password reset link has been sent successfully, check your email address and finish up the reset process. '
          )
          setTimeout(() => {
            history.push({
              pathname: '/login',
            })
          }, 2000)
        })
    } catch (reponse) {
      NotificationManager.error(`Email address doesn't exist`)
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
          <h2>Forgot Password</h2>
          <p>
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
        <div className='formWrap'>
          <form action=''>
            {showError ? (
              <div className='resetBtn'>
                <button>Failed</button>
              </div>
            ) : showMsg ? (
              <div className='resetBtn'>
                <button>Reset link have been sent to your email</button>
              </div>
            ) : (
              ''
            )}
            <div className='inputWrap'>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    email: e.target.value,
                  })
                }}
                placeholder='Enter Email'
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
