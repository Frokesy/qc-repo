import React from 'react'

function EditUser() {
  return (
    <div className='deposit'>
      <div className='home_tag'>
        <h1>Edit User</h1>
      </div>
      <div className='deposit-wrap'>
        <div>
          <form action=''>
            <div className='cards'>
              <p>Name</p>
              <div className='inputy'>
                <p>name</p>
              </div>
            </div>
            <div className='cards'>
              <p>Email</p>
              <div className='inputy'>
                <p>email</p>
              </div>
            </div>
            <div className='cards'>
              <p>Phone</p>
              <div className='inputy'>
                <p>phone</p>
              </div>
            </div>
            <div className='cards'>
              <p>Status</p>
              <div className='inputy'>
                <p>HEY</p>
              </div>
            </div>
            <div className='cards'>
              <p>Password</p>
              <div className='inputy'>
                <p>password</p>
              </div>
            </div>
            <div className='cards'>
              <p>Deposit</p>
              <div className='inputy'>
                <p>$wallet</p>
              </div>
            </div>
            <div className='cards'>
              <p>Daily Profit</p>
              <div className='inputy'>
                <p>$profit</p>
              </div>
            </div>
            <div className='cards'>
              <p>Balance</p>
              <div className='inputy'>
                <p>avilable</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser
