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
import { Link } from 'react-router-dom'

const Auth = () => {
  const history = useHistory()
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  })
  const [appLoading, setAppLoading] = useState(false)
  const { REACT_APP_BASEURL } = process.env

  const getUser = async (id) => {
    // alert(id);
    let res = await axiosCalls(`users/${id}`, 'GET')
  }
  const loginUser = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(`${REACT_APP_BASEURL}/api/signin`, {
          email: auth.email,
          password: auth.password,
        })
        .then((res) => {
          NotificationManager.success('Success', 'Login Successful ')
          const auth = {
            firstname: res.data.firstname,
            referral: res.data.referral,
            email: res.data.email,
            lastname: res.data.lastname,
            address: res.data.address,
            id: res.data.id,
            phonenumber: res.data.phonenumber,
          }
          localStorage.setItem('user', JSON.stringify(auth))
          history.push({
            pathname: '/app',
            state: { detail: res.data.firstname },
          })
        })
    } catch (error) {
      NotificationManager.error('Error', 'Invalid Email or Password')
    }
  }

  const login = async (e) => {
    e.preventDefault()

    const emailV = validateEmail(auth.email)
    const passwordV = validatePassword(auth.password)

    if (emailV !== true) {
      return NotificationManager.error('Error', 'Invalid Email format')
    }

    if (passwordV !== true) {
      return NotificationManager.error('Error', passwordV)
    }

    const data = {
      account: auth.email,
      password: auth.password,
    }

    setAppLoading(true)
    showLoader()
    const res = await axiosCalls('auth/login', 'POST', data)
    setAppLoading(false)
    if (res) {
      hideLoader()
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      NotificationManager.success('Successs', res.message)
      const auth = {
        firstname: res?.data?.user?.firstname,
        referral: res?.data?.user?.referral,
        email: res?.data?.user?.email,
        lastname: res?.data?.user?.lastname,
        address: res?.data?.user?.address,
        id: res?.data?.user?._id,
        phonenumber: res?.data?.user?.phonenumber,
      }
      localStorage.setItem('user', JSON.stringify(auth))
      localStorage.setItem('token', res?.data?.access_token)
      localStorage.setItem('refreshToken', res?.data?.refresh_tokens)
      history.push({
        pathname: '/app',
        state: { detail: res.data?.user?.firstname },
      })
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
          <h2>Sign In</h2>
          <p>To continue, please provide a valid Email .</p>
        </div>
        <div className='formWrap'>
          <form action=''>
            <div className='inputWrap'>
              <label htmlFor=''>Email/Phone Number</label>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    email: e.target.value,
                  })
                }}
                type='text'
              />
            </div>

            <div className='inputWrap'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => {
                  setAuth({
                    ...auth,
                    password: e.target.value,
                  })
                }}
                type='password'
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
              <button onClick={login}>Continue</button>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Link
                to='/forgot'
                style={{ textDecoration: 'none', marginTop: '10px' }}
              >
                Forgot Password?
              </Link>
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
