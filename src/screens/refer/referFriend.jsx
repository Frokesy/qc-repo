import React from 'react'
import './index.scss'
// import trackingfleximg from "../../assets/trackingfleximg.png";
import arrowvec from '../../assets/arrowvec.png'
import cancelvec from '../../assets/cancelvec.png'
import refergift from '../../assets/surprise.png'
// import greatervec from "../../assets/greatervec.png";
import { useHistory } from 'react-router-dom'
export default function ReferFriend() {
  const history = useHistory()
  const referral = localStorage.getItem('user')
  return (
    <div className='refer-friend-cont'>
      <div className='refer-friend-arrow'>
        <div className='refer-arrow'>
          <img
            src={arrowvec}
            onClick={() => {
              history.goBack()
            }}
          />
        </div>
        <div className='refer-cancel'>
          <img
            src={cancelvec}
            onClick={() => {
              history.goBack()
            }}
          />
        </div>
      </div>
      <div className='refer-friend-state-cont'>
        <div>
          <img src={refergift} style={{ width: '10%' }} />
        </div>

        <div
          className='container'
          style={{ width: '30%', textAlign: 'center', margin: 'auto' }}
        >
          <p style={{ fontSize: '20px' }}>Refer a friend Earn NGN 1,000</p>
          <p>
            Your friend will also receive NGN 1,000 they can use on their first
            shipment when they sign up.
          </p>
          <form>
            <div class='row'>
              <div className='col-md-9'>
                <input type='text' class='form-control' placeholder='qwedfrt' />
              </div>
              <div class='col-md-2'>
                <button
                  type='submit'
                  class='btn btn-primary'
                  style={{ background: 'rgb(8, 21, 221)' }}
                >
                  Copy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
