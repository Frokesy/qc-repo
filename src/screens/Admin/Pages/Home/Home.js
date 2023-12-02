import React, { useState, useEffect, useRef } from 'react'
import { axiosCalls } from '../../../../components/_api'
import './Home.scss'
import { TbReceiptTax } from 'react-icons/tb'
import { MdOutlinePayments } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { NotificationManager } from 'react-notifications'
import LoaderImg from '../../../../assets/loader.gif'

function Home() {
  const [loading, setLoading] = useState(true)
  const [kpi, setKpi] = useState({})
  const [topBookinVal, setTopBookinVal] = useState(0)

  const fetchKPI = async () => {
    const res = await axiosCalls('admin/kpis', 'GET')
    if (res) {
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      if (isMounted.current) {
        // check if the component is still mounted
        setTopBookinVal(
          res.data.topBooking.reduce(
            (a, v) => (a = parseInt(a) + parseInt(v.value)),
            0
          )
        )
        setKpi(res.data)
        setLoading(false)
      }
    }
  }
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    fetchKPI()
    return () => {
      isMounted.current = false // cleanup function to cancel the request if the component unmounts
    }
  }, [])
  return (
    <div className='full-zone'>
      {loading ? (
        <div className='loadings'>
          <img src={LoaderImg} alt='' />
        </div>
      ) : (
        <div className='home_pagex'>
          <div className='home_tag'>
            <h1>Dashboard</h1>
            {/* <button onClick={() => setCreateZone(true)}> Create Zone Rate</button> */}
          </div>
          <div className='home_card'>
            <div className='cardx'>
              <div className='left dif'>
                <div className='round'>
                  <TbReceiptTax />
                </div>
              </div>
              <div className='right'>
                <p>Booking Count</p>
                <h2>{kpi.bookingCount.toLocaleString()}</h2>
              </div>
            </div>
            <div className='cardx'>
              <div className='left '>
                <div className='round'>
                  <BiUser />
                </div>
              </div>
              <div className='right'>
                <p>User Count</p>
                <h2>{kpi.userCount.toLocaleString()}</h2>
              </div>
            </div>
            <div className='cardx'>
              <div className='left dif'>
                <div className='round'>
                  <MdOutlinePayments />
                </div>
              </div>
              {/* <div className='right'>
                <p>Total Top Booking Value</p>
                <h2>NGN {topBookinVal.toLocaleString()}</h2>
              </div> */}
            </div>
          </div>
          <div className='home_tables'>
            <div className='left' style={{ minHeight: '60vh' }}>
              <div className='left_top'>
                <h2>Top Bookings</h2>
              </div>
              {kpi.topBooking.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Date/Time</th>
                      <th>Value</th>
                      <th>Shipment Type</th>
                      <th>Tracking ID</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kpi.topBooking.map((item, i) => (
                      <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td className='count'>
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className='count'>NGN {item.value}</td>
                        <td className='count'>{item.shipment_type}</td>
                        <td>{item.shipmentMeta.trackingId}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1>No Yop Bookings To Show</h1>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
