import React, { useState } from 'react'
import contries from '../../components/countries'
import zonedata from './import'
import './index.scss'
import './button.css'
import mainhalf from '../../assets/auth.jpeg'
import arrowvec from '../../assets/arrow-left.png'
import { PaystackButton } from 'react-paystack'
// import arrowvec from "../../assets/arrowvec.png";
import { NotificationManager } from 'react-notifications'
import { hideLoader, showLoader } from '../../components/loader'
import { axiosCalls } from '../../components/_api'
import { useHistory } from 'react-router-dom'
import NIGStates from '../../components/nigeriaStates'
import { Modal } from 'react-responsive-modal'
import InAppNavbar from '../../components/layout/inAppNavbar'
import axios from 'axios'

import NumberFormat from 'react-number-format'

export default function BookDelivery() {
  var retrievedObject = localStorage.getItem('user')
  const { REACT_APP_BASEURL } = process.env

  var auth = JSON.parse(retrievedObject)

  const [addval, setAddVal] = useState('')
  const [datas, setDatas] = useState('')
  const [total, setTotal] = useState(0)
  let newtotal = 0
  const calculatePrice = (weight, zone) => {
    let rate
    let price
    let srate = zonedata.find((data) => data.weight == weight)
    switch (zone.Zone) {
      case 'zone1':
        rate = srate.zone1.rate
        price = parseInt(srate.zone1.price)
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone2':
        rate = srate.zone2.rate
        price = srate.zone2.price
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone3':
        rate = srate.zone3.rate
        price = srate.zone3.price
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone4':
        rate = srate.zone4.rate
        price = parseInt(srate.zone4.price)
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone5':
        rate = srate.zone5.rate
        price = srate.zone5.price
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone6':
        rate = srate.zone6.rate
        price = srate.zone6.price
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone7':
        rate = srate.zone7.rate
        price = srate.zone7.price
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
      case 'zone8':
        rate = srate.zone8.rate
        price = srate.zone8.price
        var margin = rate * price
        var wrate = margin * 0.075
        newtotal = price + wrate + margin
        setTotal(Math.round(newtotal))
        break
    }
  }
  const calculateShipping = (country, weight, type) => {
    let zone = contries.find((zone) => zone.Countries === country)
    const newZone = zone.Zone
    weight = parseFloat(weight)
    if (type == 'Document' && weight <= 2) {
      if (weight <= 0.5) {
        switch (newZone) {
          case 'zone1':
            var margin = 0.25 * 11256.3
            var rate = margin * 0.075
            newtotal = 11256.3 + margin + rate
            setTotal(Math.round(newtotal))
            break
          case 'zone2':
            var margin = 0.25 * 12599.87
            var rate = margin * 0.075
            newtotal = 12599.87 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone3':
            var margin = 0.25 * 13943.43
            var rate = margin * 0.075
            newtotal = 13943.43 + margin + rate
            setTotal(Math.round(newtotal))
            break
          case 'zone4':
            var margin = 0.25 * 16182.71
            var rate = margin * 0.075
            newtotal = 16182.71 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone5':
            var margin = 0.25 * 16630.55
            var rate = margin * 0.075
            newtotal = 16630.55 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone6':
            var margin = 0.25 * 17974.11
            var rate = margin * 0.075
            newtotal = 17974.11 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone7':
            var margin = 0.25 * 20307.62
            var rate = margin * 0.075
            newtotal = 20307.62 + rate + margin
            setTotal(newtotal)
            break
          case 'zone8':
            var margin = 0.25 * 21203.34
            var rate = margin * 0.075
            newtotal = 21203.34 + rate + margin
            setTotal(Math.round(newtotal))
            break
        }
      } else if (weight <= 1) {
        switch (newZone) {
          case 'zone1':
            var margin = 0.25 * 11316.26
            var rate = margin * 0.075
            newtotal = 11316.26 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone2':
            var margin = 0.25 * 12659.83
            var rate = margin * 0.075
            newtotal = 12659.83 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone3':
            var margin = 0.25 * 14003.39
            var rate = margin * 0.075
            newtotal = 14003.39 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone4':
            var margin = 0.25 * 16242.67
            var rate = margin * 0.075
            newtotal = 16242.67 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone5':
            var margin = 0.25 * 16690.51
            var rate = margin * 0.075
            newtotal = 16690.51 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone6':
            var margin = 0.25 * 18034.07
            var rate = margin * 0.075
            newtotal = 18034.07 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone7':
            var margin = 0.25 * 20909.67
            var rate = margin * 0.075
            newtotal = 20909.67 + rate + margin
            setTotal(Math.round(newtotal))
            break

          case 'zone8':
            var margin = 0.25 * 21805.4
            var rate = margin * 0.075
            newtotal = 21805.4 + rate + margin
            setTotal(Math.round(newtotal))
            break
        }
      }
    } else {
      calculatePrice(weight, zone)
    }
  }

  const history = useHistory()
  const [delivery, setDelivery] = useState({
    shipment_type: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    country: '',
    description: '',
    number_items: '',
    value: '',
    pickup: '',
    pickup_hub: addval,
    pickup_number: '',
    useDefaultAddress: auth?.address,
    delivery_address: '',
    delivery_state: '',
    delivery_name: '',
    delivery_email: '',
    delivery_number: '',
  })
  const handleBooking = () => {
    try {
      axios
        .post(`${REACT_APP_BASEURL}/api/book/create-booking`, {
          category: 'Import',
          shipment_type: delivery.shipment_type,
          weight: delivery.weight,
          length: delivery.length,
          width: delivery.width,
          height: delivery.height,
          description: delivery.description,
          number_items: delivery.number_items,
          value: delivery.value,
          pickup_hub: delivery.pickup,
          pickup_address: delivery.pickup_address,
          useDefaultAddress: auth.useDefaultAddress,
          country: delivery.country,
          delivery_address: delivery.delivery_address,
          delivery_name: delivery.delivery_name,
          delivery_email: delivery.delivery_email,
          delivery_number: delivery.delivery_number,
          email: auth.email,
        })
        .then((res) => {
          NotificationManager.success('Success', 'Booking Created Successful ')
          localStorage.setItem('user', JSON.stringify(auth))
          history.push({
            // pathname: "/login",
            // state: { detail: res.data.firstname },
          })
        })
    } catch (error) {
      if (error.response) {
      }
    }
  }

  const [modalConfirm, setModalConfirm] = useState(false)
  const [tab, setTab] = useState(1)

  const [prohabittedItem, setprohabittedItem] = useState(false)

  const [showbtn, setShowbtn] = useState(false)

  const [payementDetails, setPaymentDetails] = useState({})

  const [continues, setContinues] = useState(false)
  const [selectValue, setselectValue] = useState('')

  const makePaymentBackend = () => {
    const data = {
      amount: payementDetails.Amount,
      email: 'elizabeth@digicomme.com',
    }
    const res = axiosCalls(`ship/${payementDetails.quoteid}`, 'Post', data)
    if (res) {
      if (res.er) {
        return
      }
      return res
    }
  }
  // const displayAddress = () => {
  //   return <p>{addval ? data[addval] : ""}</p>;
  // };

  const getticket = (ticketId) => {
    const res = axiosCalls(`fixture/${ticketId}`, 'GET')
    if (res) {
      if (res.er) {
        return
      }
      return res
    }
  }

  const handleOnSuccess = (e) => {
    handleBooking()
    setModalConfirm(true)
    // makePaymentBackend();
  }

  const handleOnClose = () => {
    NotificationManager.error('Payment error', 'Please retry again')
  }

  const toggleProhabittedModal = () => {
    setprohabittedItem(!prohabittedItem)
  }

  const handleChange = ({ target }) => {
    setDelivery({ ...delivery, [target.name]: target.value })
  }

  const handleTab = (e) => {
    e.preventDefault()
    if (tab == 1) {
      e.preventDefault()
      setTab(2)
    }

    if (tab == 2) {
      e.preventDefault()
      setTab(3)
    }

    if (tab == 3) {
      e.preventDefault()
      calculateShipping(
        delivery.country,
        delivery.weight,
        delivery.shipment_type
      )
      setTab(4)
    }

    if (tab == 4) {
      e.preventDefault()

      BookDel()
    }
  }

  const BookDel = async (e) => {
    // showLoader();
    const data = {
      fromaddress: delivery.fromaddress ? delivery.fromaddress : 'Fara Park',
      zone: delivery.zone ? delivery.zone : 'South East',
      weight: 3.5,
      length: delivery.length ? delivery.length : 3.5,
      breath: delivery.breath ? delivery.breath : 3.5,
      deliverylocation: delivery.deliverylocation
        ? delivery.deliverylocation
        : 'Fara Park',
      itemname: delivery.itemname ? delivery.itemname : 'Shoe',
      recipientname: delivery.recipientname ? delivery.recipientname : 'Tracy',
      recipientnumber: delivery.recipientnumber
        ? delivery.recipientnumber
        : '08169530309',
    }
    setTab(4)

    setPaymentDetails(1000000)
  }

  return (
    <>
      <InAppNavbar />

      <div className='where-cont' style={{ overflow: 'scroll' }}>
        {tab > 1 ? (
          <div
            className='cancelBtn'
            onClick={() => {
              setTab(tab - 1)
            }}
          >
            <img
              src={arrowvec}
              style={{ background: '#000' }}
              alt=''
              onClick={() => {
                setTab(tab - 1)
              }}
            />
          </div>
        ) : (
          <div
            className='cancelBtn'
            onClick={() => {
              history.push({
                pathname: '/app',
                state: { detail: auth.lastname },
              })
            }}
          >
            <img src={arrowvec} alt='' />
          </div>
        )}
        <div className='row' style={{ margin: 'auto' }}>
          <div className='col-md-6 leftwhere'>
            <div
              className='where-left-flex'
              style={{ marginTop: '-160px', width: '100%' }}
            >
              <img src={mainhalf} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='where-right-main' style={{ width: '100%' }}>
              {tab == 1 ? <h2>Shipment Details</h2> : ''}

              {tab == 2 ? <h2>PickUp Information</h2> : ''}

              {tab == 3 ? <h2>Delivery Information</h2> : ''}

              {tab == 4 ? (
                <h2 style={{ fontSize: '24px' }}>Shipment Summary</h2>
              ) : (
                ''
              )}

              <p className='where-right-sub' style={{ textAlign: 'center' }}>
                {/* {tab == 1 ? " Get Started" : ""} */}
              </p>

              {tab == 1 ? (
                <div className='where-right-form-header'>
                  <form>
                    <div className='inputWrapBook'>
                      <select
                        className='where-address-input-option'
                        name='shipment_type'
                        onChange={handleChange}
                        value={delivery.shipment_type}
                        required
                      >
                        <option
                          value=''
                          style={{ color: 'rgba(36, 66, 46, 0.75)' }}
                        >
                          {' '}
                          Select Shipment Type
                        </option>
                        <option value='Document'>Document</option>
                        <option value='Package'>Package</option>
                      </select>
                    </div>
                    <div className='inputWrapBook'>
                      <label htmlFor=''>Weight (KG)</label>
                      <input
                        required
                        type='number'
                        name='weight'
                        min='0.5'
                        onChange={handleChange}
                        value={delivery.weight}
                      />
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Length (CM)</label>
                          <input
                            required
                            type='number'
                            min='0.5'
                            name='length'
                            onChange={handleChange}
                            value={delivery.length}
                          />
                        </div>
                      </div>

                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Width (CM)</label>
                          <input
                            required
                            type='number'
                            name='width'
                            min='0.5'
                            onChange={handleChange}
                            value={delivery.width}
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Height (CM)</label>
                          <input
                            required
                            type='number'
                            name='height'
                            min='0.5'
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='inputWrapBook'>
                      <input
                        required
                        type='text'
                        row='3'
                        placeholder='Give a detailed description of what you are shipping'
                        name='description'
                        onChange={handleChange}
                        value={delivery.description}
                      />
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Number of Items</label>
                          <input
                            required
                            type='number'
                            min='0.5'
                            name='number_items'
                            onChange={handleChange}
                            value={delivery.number_items}
                          />
                        </div>
                      </div>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Value</label>
                          <input
                            required
                            type='number'
                            placeholder=''
                            min='0.5'
                            name='value'
                            onChange={handleChange}
                            value={delivery.value}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='inputWrapBook'>
                      <button
                        type='button'
                        onClick={() => {
                          setprohabittedItem(true)
                        }}
                        className='btn-danger'
                        style={{ width: '30%' }}
                      >
                        Prohibited Items
                      </button>
                    </div>
                    <div className='btnsfd'>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          value=''
                          id='flexCheckChecked'
                          checked={continues ? true : false}
                          onClick={() => {
                            setContinues(!continues)
                          }}
                        />
                        <label class='form-check-label' for='flexCheckChecked'>
                          By ticking the box, you agree that you have read and
                          understood the prohibited list
                        </label>
                      </div>
                      {continues ? (
                        <button
                          onClick={handleTab}
                          className='where-address-button'
                          style={{ backgroundColor: '#000' }}
                        >
                          Continue
                        </button>
                      ) : (
                        <button
                          onClick={toggleProhabittedModal}
                          style={{ backgroundColor: '#ccc' }}
                          disabled
                          className='where-address-button'
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              ) : (
                ''
              )}

              {tab == 2 ? (
                <div className='where-right-form-header'>
                  {/* <h3>Add new address</h3> */}

                  <form>
                    <div>
                      <p
                        style={{
                          fontSize: '18px',
                          color: '#4169E2',
                          fontWeight: '800',
                          fontFamily: 'Playfair Display',
                          padding: '15px 0 0 0',
                        }}
                      ></p>
                    </div>

                    <div className='row'>
                      <div className='inputWrapBook'>
                        <label htmlFor=''>
                          Full address including Flat/apartment Number
                        </label>
                        <input
                          required
                          type='text'
                          placeholder=''
                          name='pickup_address'
                          value={delivery.pickup_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>City</label>
                          <input
                            required
                            type='text'
                            placeholder='Input city'
                            name='city'
                            value={delivery.city}
                            onChange={handleChange}
                          />
                        </div>{' '}
                      </div>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Select state</label>
                          <input
                            required
                            type='text'
                            placeholder='Input State'
                            name='state'
                            value={delivery.state}
                            onChange={handleChange}
                          />
                        </div>{' '}
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Country</label>

                          <select
                            className='where-address-input-option'
                            name='country'
                            onChange={handleChange}
                            value={delivery.country}
                            required
                          >
                            {contries.map((data) => {
                              return (
                                <option value={data.Countries}>
                                  {data.Countries}
                                </option>
                              )
                            })}
                          </select>
                        </div>
                      </div>

                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Post code</label>
                          <input
                            required
                            type='text'
                            placeholder='0039282'
                            onChange={({ target }) => {
                              setDelivery({
                                ...delivery,
                                postcode: target.value,
                              })
                            }}
                            value={delivery.postcode}
                          />
                        </div>
                      </div>
                      <div className='inputWrapBook'>
                        <label htmlFor=''>Phone Number</label>
                        <input
                          required
                          type='text'
                          placeholder='Input Phone Number'
                          name='pickup_number'
                          value={delivery.pickup_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <div className='inputWrapBook'>
                          <label htmlFor=''>Date</label>
                          <input
                            required
                            type='date'
                            onChange={({ target }) => {
                              setDelivery({
                                ...delivery,
                                date: target.value,
                              })
                            }}
                            value={delivery.date}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='btnsfd'>
                      <button
                        onClick={handleTab}
                        className='where-address-button'
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                ''
              )}

              {tab == 3 ? (
                <div style={{ alignSelf: 'center', width: '80%' }}>
                  <div className='where-right-form-header'>
                    {/* <h3>Add new address</h3> */}

                    <form>
                      <div></div>

                      <>
                        <div className='row'>
                          <div className='inputWrapBook'>
                            <input
                              required
                              type='text'
                              placeholder='Input Name'
                              name='delivery_name'
                              value={delivery.delivery_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>House/APT/Flat Number</label>
                            <input
                              required
                              type='text'
                              placeholder=''
                              name='delivery_address'
                              value={delivery.delivery_address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>Country</label>
                              <input
                                required
                                type='text'
                                value='Nigeria'
                                disabled
                              />
                            </div>
                          </div>

                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>Add State</label>
                              <input
                                required
                                type='text'
                                placeholder='Input State'
                                name='delivery_state'
                                value={delivery.delivery_state}
                                onChange={handleChange}
                              />
                            </div>{' '}
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>City</label>
                              <input
                                required
                                type='text'
                                placeholder='Input city'
                                name='city'
                                value={delivery.city}
                                onChange={handleChange}
                              />
                            </div>{' '}
                          </div>

                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>Post code</label>
                              <input
                                required
                                type='text'
                                placeholder='0039282'
                                onChange={({ target }) => {
                                  setDelivery({
                                    ...delivery,
                                    postcode: target.value,
                                  })
                                }}
                                value={delivery.postcode}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>Phone Number</label>
                              <input
                                required
                                type='text'
                                placeholder='Input Phone Number'
                                name='delivery_number'
                                value={delivery.delivery_number}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>Email</label>
                              <input
                                required
                                type='text'
                                placeholder='Input Email'
                                name='delivery_email'
                                value={delivery.delivery_email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </>

                      <div className='btnsfd'>
                        <button
                          onClick={handleTab}
                          className='where-address-button'
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                ''
              )}

              {tab == 4 ? (
                <div className='sumaryWrap'>
                  <div></div>
                  <div
                    className='row'
                    style={{
                      display: 'flex',
                      color: 'rgba(36, 66, 46, 0.75)',
                      fontSize: '18px',
                      fontFamily: 'Gilroy-Bold',
                    }}
                  >
                    <div
                      style={{ marginTop: '10px', fontWeight: 'Bold' }}
                    ></div>

                    <div className='col'>
                      <address>
                        <div style={{ marginTop: '10px' }}>
                          Order Description
                        </div>
                        <div style={{ marginTop: '10px' }}>WEIGHT</div>
                        <div style={{ marginTop: '10px' }}>LENGTH</div>
                        <div style={{ marginTop: '10px' }}>WIDTH</div>
                        <div style={{ marginTop: '10px' }}>HEIGHT</div>
                      </address>
                    </div>
                    <div className='col text-right'>
                      <address style={{ float: 'right' }}>
                        <div style={{ marginTop: '10px' }}>
                          {delivery.description}
                        </div>

                        <div style={{ marginTop: '10px' }}>
                          {delivery.itemname}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          {delivery.weight}KG
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          {delivery.length}CM
                        </div>

                        <div style={{ marginTop: '10px' }}>
                          {delivery.width}CM
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          {delivery.height}CM
                        </div>
                      </address>
                    </div>
                  </div>

                  <div className='databdd'>
                    <address>
                      <div style={{ marginTop: '10px' }}>Pickup</div>
                      <div style={{ marginTop: '10px' }}>Pickup Name</div>
                    </address>
                    <div className='col text-right'>
                      <address style={{ float: 'right' }}>
                        <div>{delivery.country}</div>
                        <div>
                          {auth.lastname} {auth.firstname}
                        </div>
                      </address>
                    </div>
                  </div>

                  <div className='databdd'>
                    <address>
                      <div style={{ marginTop: '10px' }}>Delivery Location</div>
                      <div style={{ marginTop: '10px' }}>Recipient Name</div>
                      <div style={{ marginTop: '10px' }}>Recipient Number</div>
                    </address>
                    <div className='col text-right'>
                      <address style={{ float: 'right' }}>
                        <div>{'Nigeria'}</div>
                        <div style={{ marginTop: '10px' }}>
                          {delivery.delivery_name}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          {' '}
                          {delivery.delivery_number}
                        </div>
                      </address>
                    </div>
                  </div>

                  <div className='acceptText'>
                    <p>
                      By continuing, I represent that the declaration above is a
                      proper and accurate description of the contents of my
                      package.
                    </p>
                  </div>
                  <div className='row'>
                    <div
                      className='col-md-8'
                      style={{
                        fontSize: '20px',
                        width: '80%',
                        fontWeight: 'bold',
                      }}
                    >
                      Shipping Cost
                    </div>
                    <div
                      className='col-md-4'
                      style={{
                        width: '20%',
                        fontSize: '24px',
                        display: 'flex',
                      }}
                    >
                      <span>&#8358;</span>
                      <NumberFormat
                        value={total + 1}
                        className='foo'
                        thousandSeparator={true}
                      />
                    </div>
                  </div>
                  <div>
                    <div className='paymentTotalbtn'>
                      <PaystackButton
                        reference={new Date().getTime().toString()}
                        email={'tracyamara07@gmail.com'}
                        amount={total * 100}
                        publicKey={process.env.REACT_APP_PAYSTACK_KEY}
                        text='PROCEED TO PAYMENT'
                        onSuccess={handleOnSuccess}
                        onClose={handleOnClose}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='prohabitedItems'>
            <Modal
              open={modalConfirm}
              // onClose={toggleProhabittedModal}
              center
              showCloseIcon={false}
            >
              <div className='prohabwrap' style={{ textAlign: 'center' }}>
                <div>
                  <p
                    style={{
                      fontSize: '32px',
                      color: '#4169E2',
                      fontWeight: '800',
                      fontFamily: 'Playfair Display',
                      padding: '15px 0 0 0',
                    }}
                  >
                    Payment Successful
                  </p>
                </div>
                <div className='probitrbody'>
                  <br />
                  <small>
                    Track ID: <b>#053456788</b>
                  </small>

                  <div className='row'>
                    <div className='col'>
                      <button
                        onClick={() => {
                          history.push({
                            pathname: '/app',
                            state: { detail: auth.lastname },
                          })
                          setModalConfirm(false)
                        }}
                      >
                        Go back to Cockpit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div className='prohabitedItems'>
            <Modal
              open={prohabittedItem}
              onClose={toggleProhabittedModal}
              center
              showCloseIcon={false}
            >
              <div className='prohabwrap'>
                <h2>The underlisted items are Prohibited Items</h2>

                <div className='probitrbody'>
                  <ul>
                    <li>
                      Our Courier partners do not have the operational
                      capability to transport such items.
                    </li>

                    <li>
                      Animal or animal’s products contained within Appendix 1 of
                      CITES are prohibited from carriage. The CITES Convention
                      (Convention on International Trade in Endangered Species
                      of Wild Fauna and Flora) is an international agreement
                      between governments concerning the international trade in
                      specimens of wild animals or plants
                      https://www.cites.org/eng. Animal or animal’s products not
                      contained within Appendix 1 of CITES can usually be
                      shipped but may require an export license from the issuing
                      government. See under restricted.
                    </li>

                    <li>
                      These items are prohibited for carriage as the network is
                      not designed to be sufficiently secure for such
                      transportation. It could lead to our Courier partner’s
                      people or property becoming targets of criminal activity.{' '}
                    </li>

                    <li>
                      These items are prohibited for carriage as the network is
                      not designed to be sufficiently secure for such
                      transportation. It could lead to our Courier partner’s
                      people or property becoming targets of criminal activity.
                      The relevant local Authority is to be notified if the
                      amount of cash found exceeds the relevant threshold for
                      notification. - Travellers Cheques & Activated Credit
                      Cards As an exception, certain selected and approved
                      customers who have significant volumes of core network
                      shipments may be permitted to transport Travellers Cheques
                      & Activated Credit Cards (GSOP Shipment and Product
                      Handling Policy and Standards 2.2.14 Travellers Cheques &
                      Activated Credit Cards).
                    </li>

                    <li>
                      These items are prohibited for carriage as our Courier
                      partner’s network is not designed to be sufficiently
                      secure for such transportation. It could lead to its
                      people or property becoming targets of criminal activity.
                    </li>
                    <li>
                      These items are prohibited for carriage in our Courier
                      partner’s network as in many territories special handling
                      and licenses are required for the carrier. Restrictions
                      also apply in airports worldwide for the airside handling
                      of such items. Under x-ray replica firearms resemble real
                      guns and may cause disruption and delay in the screening
                      process.
                    </li>

                    <li>
                      Any goods considered to be illegal are prohibited for
                      carriage as our Courier partners could be held financially
                      and criminally responsible for the movement of such goods.
                      This can include items that are country-specific (e.g. the
                      importation of alcohol and pornography including
                      sex-dolls) and commodities considered to be illegal
                      internationally, such as counterfeit goods and narcotics
                      (e.g. Heroin, Cocaine, Fentanyl and chemicals that may be
                      precursors to narcotic manufacture).
                    </li>
                    <li>
                      Counterfeit goods in breach of intellectual property
                      rights (IPR) are prohibited and carrying them may cause
                      serious harm to the reputation of our Courier partners. As
                      per our policy, all IPR / counterfeit goods and
                      commodities are illegal and are therefore prohibited for
                      carriage.
                    </li>
                  </ul>
                  <input
                    class='form-check-input pl-4'
                    type='checkbox'
                    checked={showbtn}
                    onClick={() => {
                      setShowbtn(true)
                    }}
                    value=''
                    id='flexCheckDefault'
                  />
                  <label class='form-check-label' for='flexCheckDefault'>
                    I Understand
                  </label>
                  {showbtn ? (
                    <button
                      onClick={toggleProhabittedModal}
                      style={{ backgroundColor: '#000' }}
                    >
                      Close
                    </button>
                  ) : (
                    <button
                      onClick={toggleProhabittedModal}
                      style={{ backgroundColor: '#ccc' }}
                      disabled
                    >
                      Close
                    </button>
                  )}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}
