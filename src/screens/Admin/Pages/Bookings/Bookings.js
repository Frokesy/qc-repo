import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { TfiNewWindow } from 'react-icons/tfi'
import { hideLoader, showLoader } from '../../../../components/loader'
import { axiosCalls } from '../../../../components/_api'
import { NotificationManager } from 'react-notifications'
import LoaderImg from '../../../../assets/loader.gif'
import Pagination from '../../../../components/Pagination/Pagination'

function Bookings() {
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [zoneList, setZoneList] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  //Fetching of Zone Rates >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const fetchZone = async (page) => {
    showLoader()
    const res = await axiosCalls(`admin/bookings?page=${page}&limit=10`, 'GET')
    if (res) {
      if (res?.er) {
        NotificationManager.error('Error', res.er.message)
        return
      }
      if (isMounted.current) {
        // check if the component is still mounted
        setZoneList(res.data)
        setLoading(false)
        hideLoader()
      }
    }
  }
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    fetchZone(1)
    return () => {
      isMounted.current = false // cleanup function to cancel the request if the component unmounts
    }
  }, [])

  const paginantionClick = (page) => {
    fetchZone(page)
  }
  const ShowDetails = (id) => {
    const findDetail = zoneList.docs.find((item) => item._id === id)
    sessionStorage.setItem('pageDetail', JSON.stringify(findDetail))
    history.push(`/admin/booking/${id}`)
  }

  return (
    <div className='full-zone'>
      <div className='home_pagex'>
        <div className='home_tag'>
          <h1>Bookings</h1>
        </div>
        <div className='home_tables'>
          <div className='left' style={{ minHeight: '60vh' }}>
            {loading ? (
              <div className='loadings'>
                <img src={LoaderImg} alt='' />
              </div>
            ) : (
              <>
                {zoneList.docs.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Date/Time</th>
                        <th>Value</th>
                        <th>Shipment Type</th>
                        <th>Tracking ID</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {zoneList.docs.map((item, i) => (
                        <tr key={item._id}>
                          <td>{i + 1}</td>
                          <td className='count'>
                            {new Date(item.createdAt).toLocaleString()}
                          </td>
                          <td className='count'>NGN {item.value}</td>
                          <td className='count'>{item.shipment_type}</td>
                          <td>{item.shipmentMeta.trackingId}</td>
                          <td className='icons'>
                            <TfiNewWindow
                              className='put'
                              title='edit zone rate'
                              onClick={() => ShowDetails(item._id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <h1>No Zones To Show</h1>
                )}
              </>
            )}
          </div>
        </div>
        {!loading && (
          <Pagination
            className='pagination-bar'
            currentPage={currentPage}
            totalCount={zoneList.totalPages}
            pageSize={10}
            onPageChange={(page) => {
              setCurrentPage(page)
              paginantionClick(page)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Bookings
