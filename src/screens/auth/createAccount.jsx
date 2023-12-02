import React, { isValidElement, useState } from 'react'
import './index.scss'
import './index.css'
import contries from '../../components/countries'
import NIGStates from '../../components/nigeriaStates'
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
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: '',
    state: '',
    city: '',
    address: '',
    country: '',
    referral: '',
    comPassword: '',
  })

  const [tab, setTab] = useState(1)
  let [newtoken, setToken] = useState('')
  let [oldtoken, setOldToken] = useState('')

  const [appLoading, setAppLoading] = useState(false)
  const { REACT_APP_BASEURL } = process.env

  const emailVerify = async (e) => {
    e.preventDefault()

    try {
      axios
        .post(`${REACT_APP_BASEURL}/api/verify_token`, {
          email: auth.email,
        })
        .then((res) => {
          newtoken = res.data.message
          if (newtoken === 'User already exist!') {
            NotificationManager.error('Error', 'User already exist!')
            return
          } else {
            setToken(newtoken)
            setTab('tab2')
          }
        })
    } catch (e) {}
  }

  const login = async (e) => {
    e.preventDefault()

    const emailV = validateEmail(auth.email)
    const passwordV = validatePassword(auth.password)

    if (auth.firstname == '') {
      return NotificationManager.error('Error', 'first name name is required')
    }

    if (auth.lastname == '') {
      return NotificationManager.error('Error', 'last name name is required')
    }

    if (auth.username == '') {
      return NotificationManager.error('Error', 'Username name is required')
    }

    if (emailV !== true) {
      return NotificationManager.error('Error', 'Invalid Email format')
    }

    if (auth.mobile == '') {
      return NotificationManager.error('Error', 'Mobile  number is required')
    }

    if (auth.country == '') {
      return NotificationManager.error('Error', 'country is required')
    }

    if (auth.phonenumber == '') {
      return NotificationManager.error('Error', 'phone number is required')
    }

    if (auth.city == '') {
      return NotificationManager.error('Error', 'city is required')
    }

    if (auth.state == '') {
      return NotificationManager.error('Error', 'state is required')
    }

    if (auth.address == '') {
      return NotificationManager.error('Error', 'address is required')
    }

    if (passwordV !== true) {
      return NotificationManager.error('Error', passwordV)
    }

    if (auth.comPassword !== auth.password) {
      return NotificationManager.error('Error', 'Password do not match')
    }

    const data = {
      firstname: auth.firstname,
      country: auth.country,
      email: auth.email,
      lastname: auth.lastname,
      phonenumber: auth.phonenumber,
      city: auth.city,
      state: auth.state,
      address: auth.address,
      password: auth.password,
      username: auth.username,
    }

    setAppLoading(true)
    showLoader()
    const res = await axiosCalls('user/create', 'POST', data)
    setAppLoading(false)
    if (res) {
      hideLoader()
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      NotificationManager.success('Success', res.message)

      setTab(2)
      // history.push(`/login`);
    }
  }

  const verifyEmail = async (e) => {
    e.preventDefault()

    if (newtoken == '') {
      return NotificationManager.error(
        'Error',
        'Please check email for verification code'
      )
    }
    const data = {
      code: newtoken,
      email: auth.email,
    }
    setAppLoading(true)
    showLoader()
    const res = await axiosCalls('user/verify-email', 'PUT', data)
    setAppLoading(false)
    if (res) {
      hideLoader()
      if (res?.er) {
        NotificationManager.error(
          'Error',
          'Please check email for verification code'
        )
        return
      }
      NotificationManager.success('Success', 'Account verified successfully')
      history.push(`/login`)
    }
  }

  const resendOTP = async (e) => {
    e.preventDefault()

    if (auth.email == '') {
      // return NotificationManager.error(
      //   "Error",
      //   "Please check email for verification code"
      // );
    }
    // const data = {
    //   code: Number(newtoken),
    //   email: auth.email,
    // };
    setAppLoading(true)
    showLoader()
    const res = await axiosCalls(`auth/resend-otp?email=${auth.email}`, 'POST')
    setAppLoading(false)
    if (res) {
      hideLoader()
      if (res?.er) {
        NotificationManager.error('Error', res?.er?.message)
        return
      }
      // NotificationManager.success("Success", "Account verified successfully");
      // history.push(`/login`);
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

        <div className='formWrap'>
          {tab == 1 ? (
            <div style={{ alignSelf: 'center' }}>
              <div className='authHeader'>
                <h2>Input account details.</h2>
              </div>

              <form action=''>
                <div className='inputWrapWith2'>
                  <div className='inputWrapWith2Col'>
                    <label htmlFor=''>First name</label>
                    <input
                      type='text'
                      onChange={(e) => {
                        setAuth({
                          ...auth,
                          firstname: e.target.value,
                        })
                      }}
                    />
                  </div>

                  <div className='inputWrapWith2Col'>
                    <label htmlFor=''>Last name</label>
                    <input
                      type='text'
                      onChange={(e) => {
                        setAuth({
                          ...auth,
                          lastname: e.target.value,
                        })
                      }}
                    />
                  </div>
                </div>

                <div className='inputWrapBook'>
                  <label htmlFor=''>Username</label>
                  <input
                    required
                    type='text'
                    placeholder='Input username'
                    name='username'
                    value={auth.username}
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        username: e.target.value,
                      })
                    }}
                  />
                </div>

                <div className='row'>
                  <div className='inputWrapBook'>
                    <label htmlFor=''>Country</label>

                    <select
                      className='where-address-input-option'
                      name='zone'
                      onChange={(e) =>
                        setAuth({
                          ...auth,
                          country: e.target.value,
                        })
                      }
                      value={auth.country}
                      required
                    >
                      <option value=''>Select</option>
                      <option value='Nigeria'>Nigeria (Default)</option>
                      {contries.map((data) => {
                        return (
                          <option value={data.Countries}>
                            {data.Countries}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>

                <div className='inputWrapBook'>
                  <label htmlFor=''>Email</label>
                  <input
                    required
                    type='text'
                    placeholder='Input Email'
                    name='email'
                    value={auth.email}
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        email: e.target.value,
                      })
                    }}
                  />
                </div>

                <div className='inputWrap'>
                  <label htmlFor=''>Phone Number</label>
                  <input
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        phonenumber: e.target.value,
                      })
                    }}
                    type='text'
                  />
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='inputWrapBook'>
                      <label htmlFor=''>City</label>
                      <input
                        required
                        type='text'
                        placeholder='Input city'
                        name='city'
                        value={auth.city}
                        onChange={(e) => {
                          setAuth({
                            ...auth,
                            city: e.target.value,
                          })
                        }}
                      />
                    </div>{' '}
                  </div>
                  <div className='col'>
                    <div className='inputWrapBook'>
                      <label htmlFor=''>Select state</label>

                      <select
                        className='where-address-input-option'
                        name='state'
                        onChange={(e) => {
                          setAuth({
                            ...auth,
                            state: e.target.value,
                          })
                        }}
                        value={auth.state}
                        required
                      >
                        <option value=''>Select state</option>
                        {NIGStates.map((data) => {
                          return <option value={data}>{data}</option>
                        })}
                      </select>
                    </div>{' '}
                  </div>
                </div>

                <div className='row'>
                  <div className='inputWrapBook'>
                    <div className='row'>
                      <div className='inputWrapBook'>
                        <label htmlFor=''>House/APT/Flat Number</label>
                        <input
                          required
                          type='text'
                          placeholder='Please input Address'
                          name='form'
                          value={auth.address}
                          onChange={(e) => {
                            setAuth({
                              ...auth,
                              address: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>
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

                <div className='inputWrap'>
                  <label htmlFor=''>Confirm Password</label>
                  <input
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        comPassword: e.target.value,
                      })
                    }}
                    type='password'
                  />
                </div>

                {/* <div className="inputWrap">
                  <label htmlFor="">
                    Referral Code (<span>Optional</span>)
                  </label>
                  <input
                    onChange={(e) => {
                      setAuth({
                        ...auth,
                        referral: e.target.value,
                      });
                    }}
                    type="text"
                  />
                </div> */}
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
              </form>
            </div>
          ) : (
            ''
          )}

          {tab == 2 ? (
            <div>
              <div className='authHeader' style={{ marginTop: '0px' }}>
                <h2>Verify your Email</h2>
                <p style={{ margin: '0' }}>
                  Enter the 4-digit OTP sent to {auth.email}..
                </p>
                <p style={{ color: 'green', marginTop: '3px' }}>
                  Please don't reload page
                </p>
              </div>{' '}
              <form style={{ width: '480px' }}>
                <div className='row'>
                  <div
                    id='otp'
                    class='inputs d-flex flex-row justify-content-center mt-2'
                  >
                    <input
                      class='m-2 text-center form-control rounded'
                      type='text'
                      maxLength='6'
                      onChange={(e) => {
                        setToken(e.target.value)
                      }}
                      name='token'
                    />
                  </div>
                </div>

                <div className='btnsfd'>
                  <button
                    className='where-address-button'
                    onClick={verifyEmail}
                  >
                    Continue
                  </button>
                </div>
                <p
                  onClick={resendOTP}
                  style={{
                    fontSize: '13px',
                    color: 'orange',
                    textAlign: 'center',
                  }}
                >
                  Dint get OTP? Resend
                </p>
              </form>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
