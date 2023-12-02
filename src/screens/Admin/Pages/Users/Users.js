import React, { useState, useEffect, useRef } from 'react'
import './Users.scss'
import { useHistory } from 'react-router-dom'
import { AiFillCloseCircle, AiFillDelete } from 'react-icons/ai'
import { hideLoader, showLoader } from '../../../../components/loader'
import { axiosCalls } from '../../../../components/_api'
import { NotificationManager } from 'react-notifications'
import LoaderImg from '../../../../assets/loader.gif'

function Users() {
  const { history } = useHistory
  const [createZone, setCreateZone] = useState(false)
  const [deleteZone, setDeleteZone] = useState(false)
  const [loading, setLoading] = useState(true)
  const [adminList, setAdminList] = useState()
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [selectedAdmin, setSelectedAdmin] = useState({ name: '' })

  //Fetching of Admin users >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const fetchAdmin = async () => {
    const res = await axiosCalls('admin/?limit=20&page=1', 'GET')
    if (res) {
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      if (isMounted.current) {
        // check if the component is still mounted
        setAdminList(res.data)
        setLoading(false)
      }
    }
  }
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    fetchAdmin()
    return () => {
      isMounted.current = false // cleanup function to cancel the request if the component unmounts
    }
  }, [])
  //creating of Admin user >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const createAdmin = async () => {
    const hasNumber = /\d/.test(passwordInput)
    const hasSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
      passwordInput
    )
    if (hasNumber && hasSpecialChar) {
      const data = {
        name: nameInput,
        password: passwordInput,
        email: emailInput,
      }
      showLoader()
      const res = await axiosCalls('admin/create', 'POST', data)
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        setCreateZone(false)
        hideLoader()
        return
      }
      NotificationManager.success('Successs', res.message)
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    } else {
      NotificationManager.error(
        'Error',
        'Password must contain at least one number and a special character'
      )
    }
  }
  //Deleting of Admin user >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const selectAdmin = (id) => {
    const select = adminList.docs.find((item) => item._id === id)
    setSelectedAdmin(select)
    setDeleteZone(true)
  }
  const deleteAdmin = async () => {
    const data = {
      id: selectedAdmin._id,
    }
    showLoader()
    const res = await axiosCalls('admin/delete', 'DELETE', data)
    if (res?.er) {
      NotificationManager.error('Error', res.er.message)
      hideLoader()
      setDeleteZone(false)
      return
    }
    NotificationManager.success('Successs', res.message)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <div className='full-zone'>
      <div className='home_pagex'>
        <div className='home_tag'>
          <h1>Users</h1>
          <button onClick={() => setCreateZone(true)}>Create Admin</button>
        </div>
        <div className='home_tables'>
          <div className='left' style={{ minHeight: '60vh' }}>
            {loading ? (
              <div className='loadings'>
                <img src={LoaderImg} alt='' />
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {adminList.docs.map((data, i) => (
                    <tr key={data._id}>
                      <td>{i + 1}</td>
                      <td>{data.name}</td>
                      <td className='count'>{data.email}</td>
                      <td className='icons'>
                        <AiFillDelete
                          className='del'
                          title='delete zone rate'
                          onClick={() => selectAdmin(data._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <div className={createZone ? 'zone-create activex' : 'zone-create'}>
        <div className='close'>
          <AiFillCloseCircle onClick={() => setCreateZone(false)} />
        </div>
        <h1>Create Admin User</h1>
        <div className='form'>
          <div className='cards'>
            <p>Name</p>
            <input type='text' onChange={(e) => setNameInput(e.target.value)} />
          </div>
          <div className='cards'>
            <p>Email</p>
            <input
              type='email'
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <p>Password</p>
            <input
              type='text'
              id='password'
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className='cards'>
            <br />
            <button onClick={createAdmin}>Create</button>
          </div>
        </div>
      </div>
      <div className={deleteZone ? 'zone-create activex' : 'zone-create'}>
        <div className='close'>
          <AiFillCloseCircle onClick={() => setDeleteZone(false)} />
        </div>
        <h1>Delete Admin</h1>
        <div className='form'>
          <div className='cards'>
            <p>Are you sure you want to delete {selectedAdmin.name}?</p>
          </div>

          <div className='cards'>
            <br />
            <button className='delete' onClick={deleteAdmin}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
