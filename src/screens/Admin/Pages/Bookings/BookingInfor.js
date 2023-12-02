import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsBuilding } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { GoPackage } from 'react-icons/go'
import { GrMapLocation } from 'react-icons/gr'
import {
  TbArrowBarLeft,
  TbArrowBarRight,
  TbReceiptTax,
  TbTruckDelivery,
} from 'react-icons/tb'
import { useHistory, useParams, Link } from 'react-router-dom'
import './Bookings.scss'

function BookingInfo() {
  const { id } = useParams()
  const history = useHistory()
  const [SideBar, setSideBar] = useState('false')
  const [informationPage, setInformationPage] = useState('delivery')
  const [taxPayerData, setTaxPayerData] = useState({
    shipmentMeta: {
      trackingId: '',
      trackingUrl: '',
      packages: [
        {
          _id: '',
          referenceNumber: '',
          trackingNumber: '',
          trackingUrl: '',
          id: '',
        },
      ],
    },
    shipment_type: '',
    value: '',
    category: '',
    createdAt: '',
    number_items: 0,
    delivery_info: [
      {
        postalAddress: {
          postalCode: '',
          cityName: '',
          countryCode: '',
          addressLine1: '',
          countyName: '',
        },
        contactInformation: {
          phone: '',
          companyName: '',
          fullName: '',
          email: '',
        },
        _id: '',
        type: '',
        id: '',
      },
      {
        postalAddress: {
          postalCode: '',
          cityName: '',
          countryCode: '',
          addressLine1: '',
          countyName: '',
        },
        contactInformation: {
          phone: '',
          companyName: '',
          fullName: '',
          email: '',
        },
        _id: '',
        type: '',
        id: '',
      },
    ],
    packages: [
      {
        dimensions: {
          length: 0,
          width: 0,
          height: 0,
        },
        _id: '',
        weight: 0,
        id: '',
      },
    ],
  })
  const [deliveryTab, setDeliveryTab] = useState('customer')
  const [fileName, setFileName] = useState('')
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('pageDetail'))) {
      if (JSON.parse(sessionStorage.getItem('pageDetail'))._id === id) {
        setTaxPayerData(JSON.parse(sessionStorage.getItem('pageDetail')))
        setFileName(
          `${
            JSON.parse(sessionStorage.getItem('pageDetail')).delivery_info[0]
              .contactInformation.fullName
          }-${
            JSON.parse(sessionStorage.getItem('pageDetail')).shipmentMeta
              .trackingId
          }.pdf`
        )
      } else {
        sessionStorage.removeItem('pageDetail')
        history.push('/admin/bookings')
      }
    } else {
      history.push('/admin/bookings')
    }
  }, [id])
  function downloadPDF(pdf) {
    const linkSource = `data:application/pdf;base64,${pdf}`
    const downloadLink = document.createElement('a')
    downloadLink.href = linkSource
    downloadLink.download = fileName
    downloadLink.click()
  }

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
                history.push('/admin/bookings')
                sessionStorage.removeItem('pageDetail')
              }}
            />
            <h1>Booking Info</h1>
          </div>
          <div className='back_right'>
            <p>Tracking ID: {taxPayerData.shipmentMeta.trackingId}</p>
          </div>
        </div>
        <div className='user_details'>
          <div className='user_right'>
            <div className='cardx'>
              <p>Shipment Type</p>
              <h2>{taxPayerData.shipment_type}</h2>
            </div>
            <div className='cardx'>
              <p>Value</p>
              <h2>NGN {taxPayerData.value}</h2>
            </div>
            <div className='cardx'>
              <p>Date/Time</p>
              <h2>{new Date(taxPayerData.createdAt).toLocaleString()}</h2>
            </div>
            <div className='cardx'>
              <p>Item No.</p>
              <h2>{taxPayerData.number_items}</h2>
            </div>
            <div className='cardx'>
              <a href={taxPayerData.shipmentMeta.trackingUrl} target='_blank'>
                <button>Track</button>
              </a>
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
                      Customer
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
                    <p>Address Line</p>
                    <h3>
                      {taxPayerData.delivery_info[0].postalAddress.addressLine1}
                    </h3>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx'>
                      <p>Postal Code</p>
                      <h3>
                        {taxPayerData.delivery_info[0].postalAddress.postalCode
                          .length > 1
                          ? taxPayerData.delivery_info[0].postalAddress
                              .postalCode
                          : 'null'}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>City</p>
                      <h3>
                        {taxPayerData.delivery_info[0].postalAddress.cityName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>State/County</p>
                      <h3>
                        {taxPayerData.delivery_info[0].postalAddress.countyName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Country Code</p>
                      <h3>
                        {
                          taxPayerData.delivery_info[0].postalAddress
                            .countryCode
                        }
                      </h3>
                    </div>
                  </div>
                  <div className='mini-tag'>
                    <h2>Contact Info</h2>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx'>
                      <p>Full name</p>
                      <h3>
                        {
                          taxPayerData.delivery_info[0].contactInformation
                            .fullName
                        }
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Phone</p>
                      <h3>
                        {taxPayerData.delivery_info[0].contactInformation.phone}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Email</p>
                      <h3>
                        {taxPayerData.delivery_info[0].contactInformation.email}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Company</p>
                      <h3>
                        {taxPayerData.delivery_info[0].contactInformation
                          .companyName.length > 1
                          ? taxPayerData.delivery_info[0].contactInformation
                              .companyName
                          : 'null'}
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
                    <p>Address Line</p>
                    <h3>
                      {taxPayerData.delivery_info[1].postalAddress.addressLine1}
                    </h3>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx'>
                      <p>Postal Code</p>
                      <h3>
                        {taxPayerData.delivery_info[1].postalAddress.postalCode
                          .length > 1
                          ? taxPayerData.delivery_info[1].postalAddress
                              .postalCode
                          : 'null'}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>City</p>
                      <h3>
                        {taxPayerData.delivery_info[1].postalAddress.cityName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>State/County</p>
                      <h3>
                        {taxPayerData.delivery_info[1].postalAddress.countyName}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Country Code</p>
                      <h3>
                        {
                          taxPayerData.delivery_info[1].postalAddress
                            .countryCode
                        }
                      </h3>
                    </div>
                  </div>
                  <div className='mini-tag'>
                    <h2>Contact Info</h2>
                  </div>
                  <div className='four_wrap'>
                    <div className='cardx'>
                      <p>Full name</p>
                      <h3>
                        {
                          taxPayerData.delivery_info[1].contactInformation
                            .fullName
                        }
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Phone</p>
                      <h3>
                        {taxPayerData.delivery_info[1].contactInformation.phone}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Email</p>
                      <h3>
                        {taxPayerData.delivery_info[1].contactInformation.email}
                      </h3>
                    </div>
                    <div className='cardx'>
                      <p>Company</p>
                      <h3>
                        {taxPayerData.delivery_info[1].contactInformation
                          .companyName.length > 1
                          ? taxPayerData.delivery_info[1].contactInformation
                              .companyName
                          : 'null'}
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {informationPage === 'package-tracking' && (
            <div className='info'>
              <div className='info_top'>
                <div className='info-top_wrap'>
                  <div className='one'>
                    <div className='icon'>
                      <GrMapLocation />
                    </div>
                    <h2>Package Tracking</h2>
                  </div>
                </div>
              </div>
              <div className='info-table'>
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Reference Number</th>
                      <th>Tracking Number</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxPayerData.shipmentMeta.packages.map((item, i) => (
                      <tr key={item._id}>
                        <td>{1 + i}</td>
                        <td>{item.referenceNumber}</td>
                        <td>{item.trackingNumber}</td>
                        <td>
                          <a href={item.trackingUrl} target='_blank'>
                            <button>track</button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {informationPage === 'package-details' && (
            <div className='info'>
              <div className='info_top'>
                <div className='info-top_wrap'>
                  <div className='one'>
                    <div className='icon'>
                      <GoPackage />
                    </div>
                    <h2>Package Details</h2>
                  </div>
                </div>
              </div>
              <div className='info-table'>
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Weight</th>
                      <th>Length</th>
                      <th>Width</th>
                      <th>Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxPayerData.packages.map((item, i) => (
                      <tr key={item._id}>
                        <td>{1 + i}</td>
                        <td>{item.weight} kg</td>
                        <td>{item.dimensions.length}</td>
                        <td>{item.dimensions.width}</td>
                        <td>{item.dimensions.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={SideBar ? 'right' : 'right active'}>
        <div className='close'>
          <TbArrowBarRight onClick={() => setSideBar(!SideBar)} />
        </div>
        <div className='top'>
          <button
            onClick={() =>
              downloadPDF(taxPayerData.shipmentMeta.documents[0].content)
            }
          >
            Download Reciept
          </button>
        </div>
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
            <li
              className={informationPage === 'package-tracking' ? 'active' : ''}
              onClick={() => setInformationPage('package-tracking')}
            >
              Package Tracking
            </li>
            <li
              className={informationPage === 'package-details' ? 'active' : ''}
              onClick={() => setInformationPage('package-details')}
            >
              Package Details
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BookingInfo
