import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { TfiNewWindow } from 'react-icons/tfi'
import { hideLoader, showLoader } from '../../../../components/loader'
import { axiosCalls } from '../../../../components/_api'
import { NotificationManager } from 'react-notifications'
import LoaderImg from '../../../../assets/loader.gif'
import Pagination from '../../../../components/Pagination/Pagination'

function BookingStaus() {
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [zoneList, setZoneList] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  //Fetching of Zone Rates >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const fetchZone = async (page) => {
    showLoader()
    const res = await axiosCalls(
      `admin/bookings/status?page=${page}&limit=100`,
      'GET'
    )
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
    const findDetail = zoneList
      .filter((obj) => obj != null)
      .find((item) => item.shipments[0].shipmentTrackingNumber === id)
    sessionStorage.setItem(
      'pageStatus',
      JSON.stringify(findDetail.shipments[0])
    )
    history.push(`/admin/booking-status/${id}`)
  }

  return (
    <div className='full-zone'>
      <div className='home_pagex'>
        <div className='home_tag'>
          <h1>Bookings Status</h1>
        </div>
        <div className='home_tables'>
          <div className='left' style={{ minHeight: '60vh' }}>
            {loading ? (
              <div className='loadings'>
                <img src={LoaderImg} alt='' />
              </div>
            ) : (
              <>
                {zoneList.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Tracking No.</th>
                        <th>Date/Time</th>
                        <th>Status</th>
                        <th>Weight</th>
                        <th>Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {zoneList
                        .filter((obj) => obj != null)
                        .map((item, i) => (
                          <tr key={item.shipments[0].shipmentTrackingNumber}>
                            <td>{i + 1}</td>
                            <td>{item.shipments[0].shipmentTrackingNumber}</td>
                            <td className='count'>
                              {new Date(
                                item.shipments[0].shipmentTimestamp
                              ).toLocaleString()}
                            </td>
                            <td className='count'>
                              {item.shipments[0].status}
                            </td>
                            <td className='count'>
                              {item.shipments[0].totalWeight} kg
                            </td>
                            <td>{item.shipments[0].numberOfPieces}</td>
                            <td className='icons'>
                              <TfiNewWindow
                                className='put'
                                title='edit zone rate'
                                onClick={() =>
                                  ShowDetails(
                                    item.shipments[0].shipmentTrackingNumber
                                  )
                                }
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
        {/* {!loading && (
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
        )} */}
      </div>
    </div>
  )
}

export default BookingStaus
