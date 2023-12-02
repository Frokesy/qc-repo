import React, { useEffect } from 'react'
import Ds1 from '../../assets/ds1.png'
import Ds2 from '../../assets/ds2.png'
import Ds3 from '../../assets/ds3.png'

import book from '../../assets/order_book.png'
import track from '../../assets/tracking.png'
import locations from '../../assets/location.png'
import refer from '../../assets/refer.png'
import import_book from '../../assets/import.png'
import Ds4 from '../../assets/ds4.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLocation } from 'react-router-dom'

import InAppNavbar from '../../components/layout/inAppNavbar'
import './index.scss'
import './card.scss'
import './card.css'

import { useHistory } from 'react-router-dom'

export default function Index() {
  const location = useLocation()

  const history = useHistory()
  const [user, setUser] = React.useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    } else {
      history.push('/home')
    }
  }, [])
  return (
    <div>
      <InAppNavbar />
      <div className='app-padding'>
        <div className='dashboardHeader'>
          <h2>Hello {user ? user.firstname : 'There'},</h2>
        </div>

        <div style={{ marginTop: '50px' }}>
          The Cockpit helps you navigate through your transactions with QC
          Express
        </div>
        <div className='dashbordCard1'>
          <div className='row'>
            <div className='col'>
              <div
                className='gr-1 card column'
                onClick={() => history.push(`/book_delivery`)}
              >
                <div className='card-item' style={{ padding: '10px 0 0 15px' }}>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h2>Export</h2>
                      <p>Book shipment pickup for international deliveries</p>
                      <svg
                        width='19'
                        height='11'
                        viewBox='0 0 19 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginTop: '30px' }}
                      >
                        <path
                          d='M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z'
                          fill='black'
                        />
                      </svg>
                    </div>
                    <div className='col-md-4'>
                      <img src={book} alt='' style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div
                className='gr-1 card column'
                onClick={() => history.push(`/domestic`)}
              >
                <div className='card-item' style={{ padding: '10px 0 0 15px' }}>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h2>Domestic</h2>
                      <p>Book shipment pickup for deliveries within Nigeria</p>
                      <svg
                        width='19'
                        height='11'
                        viewBox='0 0 19 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginTop: '30px' }}
                      >
                        <path
                          d='M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z'
                          fill='black'
                        />
                      </svg>
                    </div>

                    <div className='col-md-4'>
                      <img src={refer} alt='' style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div
                className='gr-1 card column'
                onClick={() => history.push(`/import`)}
              >
                <div className='card-item' style={{ padding: '10px 0 0 15px' }}>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h2>Import</h2>
                      <p>
                        Book shipment pickup from international locations for
                        deliveries in Nigeria
                      </p>
                      <svg
                        width='19'
                        height='11'
                        viewBox='0 0 19 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginTop: '20px' }}
                      >
                        <path
                          d='M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z'
                          fill='black'
                        />
                      </svg>
                    </div>

                    <div className='col-md-4'>
                      <img src={import_book} alt='' style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>

        <div className='dashbordCard1'>
          <div className='row'>
            <div className='col'>
              <div
                className='gr-1 card column'
                onClick={() => history.push(`/refer_friend`)}
              >
                <div className='card-item' style={{ padding: '10px 0 0 15px' }}>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h2>Refer a Friend</h2>
                      <p>Please tell a friend about us</p>
                      <svg
                        width='19'
                        height='11'
                        viewBox='0 0 19 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginTop: '30px' }}
                      >
                        <path
                          d='M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z'
                          fill='black'
                        />
                      </svg>
                    </div>

                    <div className='col-md-4'>
                      <img src={refer} alt='' style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div
                className='gr-1 card column'
                onClick={() => history.push(`/tracking_page`)}
              >
                <div className='card-item' style={{ padding: '10px 0 0 15px' }}>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h2>Track Shipment</h2>
                      <p>Track your shipment</p>
                      <svg
                        width='19'
                        height='11'
                        viewBox='0 0 19 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginTop: '20px' }}
                      >
                        <path
                          d='M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z'
                          fill='black'
                        />
                      </svg>
                    </div>
                    <div className='col-md-4'>
                      <img src={track} alt='' style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div
                className='gr-1 card column'
                onClick={() => history.push(`/locate_hub`)}
              >
                <div className='card-item' style={{ padding: '10px 0 0 15px' }}>
                  <div className='row'>
                    <div className='col-md-8'>
                      <h2>Drop-off Locations</h2>
                      <p>Locate nearest drop-off points</p>
                      <svg
                        width='19'
                        height='11'
                        viewBox='0 0 19 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ marginTop: '20px' }}
                      >
                        <path
                          d='M18.7823 4.97464C18.7821 4.97442 18.7819 4.97416 18.7816 4.97394L14.9036 1.11456C14.613 0.825441 14.1431 0.826517 13.8539 1.11708C13.5648 1.40761 13.5659 1.87753 13.8564 2.16668L16.4602 4.75781H0.742188C0.332277 4.75781 0 5.09009 0 5.5C0 5.90991 0.332277 6.24219 0.742188 6.24219H16.4601L13.8565 8.83331C13.5659 9.12247 13.5648 9.59238 13.854 9.88291C14.1432 10.1735 14.6131 10.1745 14.9036 9.88544L18.7817 6.02606C18.7819 6.02584 18.7821 6.02558 18.7824 6.02536C19.073 5.73523 19.0721 5.2638 18.7823 4.97464Z'
                          fill='black'
                        />
                      </svg>
                    </div>

                    <div className='col-md-4'>
                      <img src={locations} alt='' style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
