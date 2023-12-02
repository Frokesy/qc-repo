import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsBuilding } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { GoPackage } from 'react-icons/go'
import { GrMapLocation } from 'react-icons/gr'
import { MdOutlineHouse, MdOutlineFamilyRestroom } from 'react-icons/md'
import {
  TbArrowBarLeft,
  TbArrowBarRight,
  TbReceiptTax,
  TbTruckDelivery,
} from 'react-icons/tb'
import { useHistory, useParams, Link } from 'react-router-dom'
import './Bookings.scss'

function BookingStatusInfo() {
  const { id } = useParams()
  const history = useHistory()
  const [SideBar, setSideBar] = useState('false')
  const [informationPage, setInformationPage] = useState('delivery')
  const [taxPayerData, setTaxPayerData] = useState({
    shipmentTrackingNumber: '',
    status: '',
    totalWeight: 0,
    unitOfMeasurements: '',
    shipmentTimestamp: '',
    numberOfPieces: 0,
    description: '',
    productCode: '',
    shipperDetails: {
      name: '',
      postalAddress: {
        cityName: '',
        countyName: '',
        postalCode: '',
        countryCode: '',
      },
      serviceArea: [
        {
          code: '',
          description: '',
        },
      ],
    },
    receiverDetails: {
      name: '',
      postalAddress: {
        cityName: '',
        countyName: '',
        postalCode: '',
        countryCode: '',
      },
      serviceArea: [
        {
          code: '',
          description: '',
          facilityCode: '',
        },
      ],
    },
  })
  const [deliveryTab, setDeliveryTab] = useState('customer')
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('pageStatus'))) {
      if (
        JSON.parse(sessionStorage.getItem('pageStatus'))
          .shipmentTrackingNumber === id
      ) {
        setTaxPayerData(JSON.parse(sessionStorage.getItem('pageStatus')))
      } else {
        sessionStorage.removeItem('pageStatus')
        history.push('/admin/bookings')
      }
    } else {
      history.push('/admin/bookings')
    }
  }, [id])

  return (
    <div className='userPage'>
      <div className='left'>
        <div className='top'>
          <div></div>
          <div className='burger'>
            <TbArrowBarLeft onClick={() => setSideBar(!SideBar)} />
          </div>
        </div>
        <div className='back'>
          <div className='back_left'>
            <BsArrowLeft
              onClick={() => {
                history.push('/admin/bookings-status')
                sessionStorage.removeItem('pageStatus')
              }}
            />
            <h1>Booking Status Info</h1>
          </div>
          <div className='back_right'>
            <p>Tracking ID: {taxPayerData.shipmentTrackingNumber}</p>
          </div>
        </div>
        <div className='user_details'>
          <div className='user_right'>
            <div className='cardx'>
              <p>Tracking Number</p>
              <h2>{taxPayerData.shipmentTrackingNumber}</h2>
            </div>
            <div className='cardx'>
              <p>Status</p>
              <h2>{taxPayerData.status}</h2>
            </div>
            <div className='cardx'>
              <p>Total Weight</p>
              <h2>
                {taxPayerData.totalWeight} kg
              </h2>
            </div>
            <div className='cardx'>
              <p>Date/Time</p>
              <h2>
                {new Date(taxPayerData.shipmentTimestamp).toLocaleString()}
              </h2>
            </div>
            <div className='cardx'>
              <p>Item No.</p>
              <h2>{taxPayerData.numberOfPieces}</h2>
            </div>
            <div className='cardx'>
              <p>Product Code</p>
              <h2>{taxPayerData.productCode}</h2>
            </div>
            <div className='cardz'>
              <p>Description</p>
              <h2>{taxPayerData.description}</h2>
            </div>
          </div>
        </div>
        <div className='information_page'>
          {informationPage === 'delivery' && (
            <div className='info'>
              <div className='info_top'>
                <div className='info-top_wrap'>
                  <div className='one'>
                    <div className='icon'>
                      <TbTruckDelivery />
                    </div>
                    <h2>Delivery Information</h2>
                  </div>
                  <div className='two'>
                    <button
                      className={deliveryTab === 'customer' ? 'active' : ''}
                      onClick={() => setDeliveryTab('customer')}
                    >
                      Shipper
                    </button>
                    <button
                      className={deliveryTab === 'reciever' ? 'active' : ''}
                      onClick={() => setDeliveryTab('reciever')}
                    >
                      Reciever
                    </button>
                  </div>
                </div>
              </div>
              {deliveryTab === 'customer' ? (
                <div className='info-wrap'>
                  <div className='mini-tag'>
                    <h2>Postal Address Customer</h2>
                  </div>
                  <div className='single_wrap'>
                    <p>Name</p>
                    <h3>{taxPayerData.shipperDetails.name}</h3>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx'>
                      <p>Postal Code</p>
                      <h3>
                        {taxPayerData.shipperDetails.postalAddress.postalCode
                          .length > 1
                          ? taxPayerData.shipperDetails.postalAddress.postalCode
                          : 'null'}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>City</p>
                      <h3>
                        {taxPayerData.shipperDetails.postalAddress.cityName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>State/County</p>
                      <h3>
                        {taxPayerData.shipperDetails.postalAddress.countyName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Country Code</p>
                      <h3>
                        {taxPayerData.shipperDetails.postalAddress.countryCode}
                      </h3>
                    </div>
                  </div>
                  <div className='mini-tag'>
                    <h2>Service Area</h2>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx fg'>
                      <p>Code</p>
                      <h3>{taxPayerData.shipperDetails.serviceArea[0].code}</h3>
                    </div>
                    <div className='cardx fg'>
                      <p>Description</p>
                      <h3>
                        {taxPayerData.shipperDetails.serviceArea[0].description}
                      </h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='info-wrap'>
                  <div className='mini-tag'>
                    <h2>Postal Address Reciever</h2>
                  </div>
                  <div className='single_wrap'>
                    <p>Name</p>
                    <h3>{taxPayerData.receiverDetails.name}</h3>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx'>
                      <p>Postal Code</p>
                      <h3>
                        {taxPayerData.receiverDetails.postalAddress.postalCode
                          .length > 1
                          ? taxPayerData.receiverDetails.postalAddress
                              .postalCode
                          : 'null'}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>City</p>
                      <h3>
                        {taxPayerData.receiverDetails.postalAddress.cityName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>State/County</p>
                      <h3>
                        {taxPayerData.receiverDetails.postalAddress.countyName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Country Code</p>
                      <h3>
                        {taxPayerData.receiverDetails.postalAddress.countryCode}
                      </h3>
                    </div>
                  </div>
                  <div className='mini-tag'>
                    <h2>Service Area</h2>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx fg'>
                      <p>Code</p>
                      <h3>
                        {taxPayerData.receiverDetails.serviceArea[0].code}
                      </h3>
                    </div>
                    <div className='cardx fg'>
                      <p>Facility Code</p>
                      <h3>
                        {
                          taxPayerData.receiverDetails.serviceArea[0]
                            .facilityCode
                        }
                      </h3>
                    </div>
                    <div className='cardx fg'>
                      <p>Description</p>
                      <h3>
                        {
                          taxPayerData.receiverDetails.serviceArea[0]
                            .description
                        }
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={SideBar ? 'right' : 'right active'}>
        <div className='close'>
          <TbArrowBarRight onClick={() => setSideBar(!SideBar)} />
        </div>
        <div className='top'></div>
        <div className='tag'>
          <h1>More Information</h1>
        </div>
        <div className='links'>
          <ul>
            <li
              className={informationPage === 'delivery' ? 'active' : ''}
              onClick={() => setInformationPage('delivery')}
            >
              Delivery Information
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BookingStatusInfo
