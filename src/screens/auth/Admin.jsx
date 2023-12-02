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

const Admin = () => {
  const history = useHistory()
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  })
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

    // showLoader()
    const res = await axiosCalls('admin/login', 'POST', data)
    if (res) {
      hideLoader()
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      NotificationManager.success('Successs', res.message)
      const auth = {
        name: res?.data?.admin?.name,
        id: res?.data?.admin?._id,
        email: res?.data?.admin?.email,
      }
      localStorage.setItem('user', JSON.stringify(auth))
      localStorage.setItem('token', res?.data?.access_token)
      localStorage.setItem('refreshToken', res?.data?.refresh_tokens)
      window.location.replace('/admin/home')
    }
  }

  return (
    <div className='authWrap'>
      <div className='authWrapCol1'>
        <img src={authBanner} alt='' />
      </div>
      <div className='authWrapCol2 diff'>
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
          <h2>Admin Sign In</h2>
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
            <div className='submitBtn'>
              <button onClick={login}>Continue</button>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin
