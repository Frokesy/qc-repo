import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layout/inAppNavbar'
import axios from 'axios'

export default function Account() {
  const [user, setUser] = useState([])
  const [update, setUpdate] = useState({
    firstname: user?.firstname,
    lastname: user?.lastname,
    email: user?.email,
    phonenumber: user?.phonenumber,
    state: user?.state,
    address: user?.address,
  })
  const { REACT_APP_BASEURL } = process.env
  const getUsers = () => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      var config = {
        method: 'get',
        url: `${REACT_APP_BASEURL}/api/user-profile/${foundUser.id}`,
        headers: { token: foundUser.token },
      }
      axios(config)
        .then(function (response) {
          setUser(response.data.msg)
        })
        .catch(function (error) {})
    }
  }

  useEffect(() => {
    try {
      getUsers()
    } catch (e) {
    }
  }, [])

  const handleChange = ({ target }) => {
    setUpdate({ ...update, [target.name]: target.value })
  }

  const handleUpdate = () => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      axios
        .put(`${REACT_APP_BASEURL}/api/update-user/${foundUser.id}`, {
          firstname: update.firstname,
          lastname: update.lastname,
          email: update.email,
          phonenumber: update.phonenumber,
          state: update.state,
          address: update.address,
        })
        .then(function (response) {
          setUser(response.data.msg)
        })
        .catch(function (error) {})
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <section className='py-5 my-5'>
        <div className='container'>
          <h1 className='mb-5'>Account Settings</h1>
          <div className='bg-white shadow rounded-lg d-block d-sm-flex'>
            <div
              className='profile-tab-nav border-right'
              style={{ width: '30%' }}
            >
              <div className='p-4'>
                <div className='img-circle text-center mb-3'>
                  {/* <img src="img/user2.jpg" alt="Image" className="shadow" /> */}
                </div>
                {/* <h4 className="text-center">{user.firstname}</h4> */}
              </div>
              <div
                className='nav flex-column nav-pills'
                id='v-pills-tab'
                role='tablist'
                aria-orientation='vertical'
              >
                <a
                  className='nav-link active'
                  id='account-tab'
                  data-toggle='pill'
                  href='#account'
                  role='tab'
                  aria-controls='account'
                  aria-selected='true'
                >
                  <i className='fa fa-home text-center mr-1'></i>
                  View Account
                </a>

                <a
                  className='nav-link'
                  id='security-tab'
                  data-toggle='pill'
                  href='#security'
                  role='tab'
                  aria-controls='security'
                  aria-selected='false'
                >
                  <i className='fa fa-user text-center mr-1'></i>
                  Edit Account
                </a>

                <a
                  className='nav-link'
                  id='password-tab'
                  data-toggle='pill'
                  href='#password'
                  role='tab'
                  aria-controls='password'
                  aria-selected='false'
                >
                  <i className='fa fa-setting text-center mr-1'></i>
                  Change Password
                </a>
              </div>
            </div>

            <div
              className='tab-content p-4 p-md-5'
              id='v-pills-tabContent'
              style={{ width: '60%' }}
            >
              <div
                className='tab-pane fade show active'
                id='account'
                role='tabpanel'
                aria-labelledby='account-tab'
              >
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>First Name</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        value={user?.firstname}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Last Name</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        value={user?.lastname}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='text'
                        className='form-control'
                        value={user?.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Phone number</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        value={user?.phonenumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>State</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        value={user?.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>country</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        value={'Nigeria'}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Address</label>
                      <input
                        type='text'
                        className='form-control'
                        value={user?.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Referral Code</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        value={user?.referral}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='tab-pane fade'
                id='security'
                role='tabpanel'
                aria-labelledby='security-tab'
              >
                <h3 className='mb-4'>Account Settings</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>First Name</label>
                      <input
                        type='text'
                        className='form-control'
                        name='firstname'
                        placeholder={user?.firstname}
                        value={update.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Last Name</label>
                      <input
                        type='text'
                        className='form-control'
                        name='lastname'
                        placeholder={user?.lastname}
                        value={update.lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='text'
                        className='form-control'
                        name='email'
                        placeholder={user?.email}
                        value={update.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Phone number</label>
                      <input
                        type='text'
                        className='form-control'
                        phone='phonenumber'
                        placeholder={user?.phonenumber}
                        value={update.phonenumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>State</label>
                      <input
                        type='text'
                        className='form-control'
                        name='state'
                        placeholder={user?.state}
                        value={update.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>country</label>
                      <input
                        type='text'
                        disabled
                        name='country'
                        className='form-control'
                        value={'Nigeria'}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Address</label>
                      <input
                        type='text'
                        className='form-control'
                        name='address'
                        placeholder={user?.address}
                        value={update.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Referral Code</label>
                      <input
                        type='text'
                        disabled
                        className='form-control'
                        placeholder={user?.referral}
                        value={update.referral}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className='btn btn-primary mt-2'
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button className='btn btn-light ml-2'>Cancel</button>
                </div>
              </div>

              <div
                className='tab-pane fade'
                id='password'
                role='tabpanel'
                hftr53
                aria-labelledby='password-tab'
              >
                <h3 className='mb-4'>Update Password</h3>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label>New Password</label>
                      <input
                        type='text'
                        className='form-control'
                        name='firstname'
                        placeholder={user?.firstname}
                        value={update.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className='btn btn-primary mt-2'
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button className='btn btn-light ml-2'>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
