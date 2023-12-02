import React, { useState } from 'react'
import moment from 'moment'
// import timeZone from "moment-timezone";
import contries from '../../components/countries'
import './index.scss'
import './button.css'
import mainhalf from '../../assets/auth.jpeg'
import arrowvec from '../../assets/left-arrow.png'
import { PaystackButton } from 'react-paystack'
// import arrowvec from "../../assets/arrowvec.png";
import { NotificationManager } from 'react-notifications'
import { hideLoader, showLoader } from '../../components/loader'
import { axiosCalls } from '../../components/_api'
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import InAppNavbar from '../../components/layout/inAppNavbar'
import Swal from 'sweetalert2'
import NumberFormat from 'react-number-format'
import { SpecifyItem } from './items'
import NigeriaStates from './nigeriaStates'
import { capitalizeFirstLetter } from '../../helper/capitalize'
import { getLocalCities } from '../../helper/locals'
import StateData from '../../helper/StateData'
const countryList = require('country-list')

export default function BookDelivery() {
  let countryListData = countryList.getData()
  countryListData.sort()
  var retrievedObject = localStorage.getItem('user')

  var auth = JSON.parse(retrievedObject)
  const data = {
    'IKOSI/MAGODO':
      '14A Olatunji Close, Ikosi GRA IV, Off CMD Road, Magodo Lagos',
    'LAGOS ISLAND':
      '66, Campbell Street, Lagos Island, Lagos - Ground floor. (Beside Western House)',
    'Redemption Camp': 'F3&F4 CRM shopping complex, Redemption camp Mowe',
    'DHL IKOYI': '32 Awolowo Road,Ikoyi Lagos',
    'DHL APAPA': '24B, creek rd, apapa, lagos',
    'DHL SURULERE': '15, Adeniran Ogunsanya, street, Surulere,Lagos',
    'DHL AKIN ADESOLA': 'Plot 1302A, Akin Adesola str, victoria island, lagos',
    'DHL BROAD STREET': '6, Davies str, off broad str, lagos island',
    'DHL MURI OKUNOLA':
      'Sandilad Arcade, 230 Muri Okunola str, victoria island',
    'DHL CHERUB MALL': 'Cherub Mall,Km 18 lekki/epe e/way, lagos',
    'DHL LEKKI': 'Block 12, plot 13A, Admiralty way. Lekki Phase 1.',
    'DHL ISOLO': 'DHL House, Oshodi Apapa expressway. Toyota Bus stop. Isolo.',
    'DHL AWOLOWO WAY': 'Trinity plaza, 79 Awolowo way. Ikeja',
    'DHL GRA IKEJA': '41 Joel Ogunaike',
    'DHL ALLEN': '45 Allen Avenue, ikeja',
    'DHL Badagry':
      'KM 26, Lagos Badagry Expressway, Alafia bus stop, adjacent FGC, Ijanikin',
    'DHL HERITAGE HOUSE': 'Plot 2201 Sultan Abubakar way, Wuze zone 3, Abuja',
    'DHL GARIKI': 'N0 1 Abeokuta street, Area 8,Gariki Abuja.',
    'DHL WUZE 2': '79 Ademola Adetokunbo street. Wuze 2 Abuja',
    'DHL HAFSAT PLAZA': 'Constitution Avenue, Central Business district Abuja.',
    'DHL PORT HARCOURT':
      'No 14, Chief Nwuke street, Trans Amadi, Port Harcourt.',
    'DHL IBADAN': '47 Ring road, Ibadan',
    'DHL Kano': '139, Murtala Mohammed Way, Kano',
    'DHL Katsina': '2, IBB Way, Kofar Kaura, Katsina',
    'DHL Jos': '23, Rwangpam Street, Jos',
    'DHL Sokoto': '16, Abdullahi Fodio, Sokoto',
    'DHL Bauchi': '6, Yandoka Road, beside Total Filling Station, Bauchi',
    'DHL Gombe':
      'Jakadafare Street, Opp PDP Office by Govt House junction Gombe. ',
    'DHL Yola': '83, Mohammed Mustapha Way,  Nasarawo jimeta Yola',
    'DHL Maiduguri': '75, Sir Kashim Ibrahim Way, Maiduguri',
    'DHL Lokoja':
      'Suite 225, Salihu Ibrhim Road, Adjascent Federal Medical Center, Lokoja',
    'DHL Kaduna': '16, Ahmadu Bello Way, Kaduna',
    'DHL Zaria':
      'Kola Bookshop House, Agoro, Tundun Wada, Zaria & ABU Bookshop, Samaru',
    'DHL Minna': "IICO Building, 5 Muazu MOH'D Road, Minna",
    'DHL Lafia': 'No 1, Riza Plaza, Opp State CID H/Q, Lafia',
    'DHL Makurdi':
      '24, Iyorchia Ayu, Inside NIIMA Hotel Premises, Wurukum, Makurdi',
    'DHL Aba': 'No.8, Factory Road, Aba, Abia State',
    'DHL Umuahia': '20, Ojike street by Azikiwe Road Umuahia',
    'DHL Uyo': '41 Oron Road, Uyo, Akwa Ibom',
    'DHL Eket': '7 Grace Bille Road, Eket, Akwa Ibom',
    'DHL Calabar':
      '46 Ndidem Usang Iso Road/Mariam, Calabar Cross Rivers State',
    'DHL Bonny Island': '5 Shell Road Bonny, Rivers State',
    'DHL Yenagoa': 'Opposite NDDC Office, Kpansa, Yenagoa. Bayelsa State',
    'DHL Warri': '56,Effurun/Sapele Road, Effurun Delta State',
    'DHL Sapele': '57 Okpe Road, Sapele, Delta State',
    'DHL Benin': '62 Airport Road, Akenzua Junction, Benin City, Edo state.',
    'DHL Asaba': '305 Nnebisi Road, Asaba, Delta State',
    'DHL Onitsha': '75 Old Market Road, Onitsha. Anambra State',
    'DHL Nnewi': '104, old onitsha Road, Nnewi',
    'DHL Nsukka': 'RM 104 GS Building, University of Nigeria, Nsukka',
    'DHL Abakaliki':
      '44 Ogoja Road Opposite Vegas, Beside Access Bank, Abakaliki - Ebonyi State',
    'DHL Enugu': "2A O'Cononr Street, Asata, Enugu State",
    'DHL Owerri': '29 Weathral Road, Imo State',
    'DHL Akure/ADO': '45, Oyemekun Road, Akure, Ondo State.',
    'DHL Ilorin': 'Taiwo Road, Ilorin, Kwara State.',
    'DHL Abeokuta': '6 LALUBU STREET, Abeokuta',
    'DHL Ife/OSO': 'Obafemi Awolowo University Campus, Ile Ife, Osun State.',
    'DHL Ota': 'ILO AWELA ROAD, TOLL GATE SANGO OTTA-OGUN STATE',
    'DHL Mowe': 'Plot 44, Lagos Ibadan Express, Mowe ',
  }
  const [addval, setAddVal] = useState('')
  const [datas, setDatas] = useState('')
  const [total, setTotal] = useState(0)
  const [voltotal, setVolTotal] = useState(0)
  const history = useHistory()
  const pickup = data[addval]
  const [delivery, setDelivery] = useState({
    shipment_type: '',
    weight: '',
    length: '',
    width: '',
    pickup_date: '',
    height: '',
    country: 'Nigeria',
    description: '',
    city: '',
    email: '',
    value: '',
    pickup_address: addval ? data[addval] : '',
    pickup_hub: addval,
    pickup_number: '',
    useDefaultAddress: auth?.address,
    delivery_address: '',
    delivery_state: '',
    delivery_name: '',
    delivery_email: '',
    delivery_number: '',
    receiverCountry: 'Nigeria',
    Deliverypostcode: '',
    delivery_city: '',
  })

  const [modalConfirm, setModalConfirm] = useState(false)
  const [tab, setTab] = useState(1)

  const [prohabittedItem, setprohabittedItem] = useState(false)

  const [showbtn, setShowbtn] = useState(false)

  const [payementDetails, setPaymentDetails] = useState({})
  const [showNewAddress, setshowNewAddress] = useState(false)
  const [showAddress, setShowAddress] = useState(false)
  const [showPickup, setshowPickup] = useState(false)
  const [continues, setContinues] = useState(false)
  const [selectValue, setselectValue] = useState('')
  const [specifiedItems, setSpecifiedItems] = useState([
    {
      itemName: '',
      description: '',
      itemQuantity: '',
      netValue: '',
      grossValue: '',
      itemValue: '',
    },
  ])
  const [pickUpCities, setPickupCities] = useState([])
  const [deliveryCities, setDeliveryCities] = useState([])
  const [trackingId, setTrackingId] = useState('')

  let newtotal = 0

  const handleCities = (state) => {
    const PickedState = StateData.find((item) => item.state.name === state)
    setPickupCities(PickedState.state.locals)
  }
  const handleBooking = async () => {
    const filterPickupCountry = contries.filter((c) => {
      return c.name === delivery.country
    })

    const filterreceiverCountry = contries.filter((c) => {
      return c.name === delivery.receiverCountry
    })

    let sortSpecifiedItem = specifiedItems.map((itm) => {
      return {
        number: 1,
        quantity: {
          unitOfMeasurement: 'PCS',
          value: itm?.itemQuantity,
        },
        price: itm?.itemValue,
        description: itm?.description,
        weight: {
          netValue: itm?.netValue,
          grossValue: itm?.grossValue,
        },
        commodityCodes: [
          {
            typeCode: 'outbound',
            value: 'HS1234567890',
          },
        ],
        exportReasonType: 'permanent',
        manufacturerCountry: 'NG',
      }
    })

    const Newdata = {
      type: 'DOMESTIC',
      shipmentData: {
        plannedShippingDateAndTime: `${moment(delivery.pickup_date).format(
          'YYYY-MM-DD'
        )}T${moment(delivery.pickup_date).format('hh:mm:ss')} ${new Date()
          .toLocaleDateString('en-US', {
            day: '2-digit',
            timeZoneName: 'short',
          })
          .slice(4)
          .slice(0, -2)}+01:00`,
        // plannedShippingDateAndTime: `${moment(delivery.pickup_date)
        //   .utcOffset(0, false)
        //   .format()} `,
        declaredValue: delivery.value,
        sender: {
          postalAddress: {
            postalCode: delivery.postcode,
            cityName: capitalizeFirstLetter(delivery.city),
            countryCode: filterPickupCountry[0].code,
            addressLine1: delivery.pickup_address,
            countyName: filterPickupCountry[0].name,
          },
          contactInformation: {
            phone: delivery.pickup_number,
            companyName: 'DigiComme',
            fullName: `${auth.firstname} ${auth.lastname}`,
            email: auth.email,
          },
        },
        receiver: {
          postalAddress: {
            postalCode: delivery.Deliverypostcode,
            cityName: capitalizeFirstLetter(delivery.delivery_city),
            countryCode: filterreceiverCountry[0].code,
            addressLine1: delivery.delivery_address,
            countyName: filterreceiverCountry[0].name,
          },
          contactInformation: {
            phone: delivery.delivery_number,
            companyName: 'DigiComme',
            fullName: delivery.delivery_name,
            email: delivery.delivery_email,
          },
        },
        packages: [
          {
            weight: Number(delivery.weight),
            dimensions: {
              length: Number(delivery.length),
              width: Number(delivery.width),
              height: Number(delivery.height),
            },
          },
        ],
        description: delivery.description,
      },
      bookingData: {
        category: 'Products',
        shipment_type: delivery.shipment_type.toUpperCase(),
        value: Number(delivery.value),
      },
    }

    showLoader()
    const res = await axiosCalls('booking/create', 'POST', Newdata)
    if (res) {
      hideLoader()
      if (res.er) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: res?.er?.message?.detail || res?.er?.message,
          // footer: '<a href="">Why do I have this issue?</a>',
        })

        return
      }
      // shipmentMeta

      setTrackingId(res.data)
      setModalConfirm(true)
    }
  }

  const getPrice = async () => {
    const filterPickupCountry = contries.filter((c) => {
      return c.name === delivery.country
    })

    const filterreceiverCountry = contries.filter((c) => {
      return c.name === delivery.receiverCountry
    })

    if (delivery.shipment_type === 'Document' && delivery.weight > 2) {
      // Toast("error","Weight must not be greater than 2")
      NotificationManager.error('Error', 'Weight must not be greater than 2')
      return
    }

    let Newdata = {
      plannedShippingDateAndTime: `${moment(delivery.pickup_date).format(
        'YYYY-MM-DD'
      )}T${moment(delivery.pickup_date).format('hh:mm:ss')} GMT+01:00`,
      isCustomsDeclarable: false,
      document:
        delivery.shipment_type.toLocaleLowerCase() === 'document'
          ? 'document'
          : 'non_document',
      nextBusinessDay: true,
      deliveryType: 'domestic',
      customerDetails: {
        shipperDetails: {
          postalCode: delivery.postcode,
          cityName: capitalizeFirstLetter(delivery.city),
          countryCode: 'NG',
          addressLine1: delivery.pickup_address,
          // countyName: filterPickupCountry[0].name,
          countyName: delivery.state,
        },
        receiverDetails: {
          postalCode: delivery.Deliverypostcode,
          cityName: capitalizeFirstLetter(delivery.delivery_city),
          countryCode: 'NG',
          addressLine1: delivery.delivery_address,
          // countyName: filterreceiverCountry[0].name,
          countyName: delivery.delivery_state,
        },
      },
      weight: Number(delivery.weight),
      length: Number(delivery.length),
      width: Number(delivery.width),
      height: Number(delivery.height),
    }

    showLoader()
    const res = await axiosCalls('price/single', 'POST', Newdata)
    if (res) {
      hideLoader()
      if (res.er) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: res?.er?.message?.detail || res?.er?.message,
        })

        return
      }
      let l = JSON.stringify(res?.data)
      setTotal(res?.data)
      setTab(5)
      // handleBooking();
    }

    // var regex = /[.,\s]/g;

    // var result = str.replace(regex, '');

    // document.write(result);
  }

  // const getPrice = async () => {
  //   const filterPickupCountry = contries.filter((c) => {
  //     return c.name === delivery.country;
  //   });

  //   const filterreceiverCountry = contries.filter((c) => {
  //     return c.name === delivery.receiverCountry;
  //   });

  //   let Newdata = {
  //     plannedShippingDateAndTime: `${moment(delivery.pickup_date).format(
  //       "YYYY-MM-DD"
  //     )}T${moment(delivery.pickup_date).format("hh:mm:ss")} GMT+01:00`,
  //     isCustomsDeclarable: true,
  //     isCustomsDeclarable: false,
  //     document: delivery.shipment_type,
  //     nextBusinessDay: true,
  //     deliveryType: "domestic",
  //     customerDetails: {
  //       shipperDetails: {
  //         postalCode: delivery.postcode,
  //         cityName: delivery.city,
  //         countryCode: filterPickupCountry[0].code,
  //         addressLine1: delivery.pickup_address,
  //         countyName: filterPickupCountry[0].name,
  //       },
  //       receiverDetails: {
  //         postalCode: delivery.Deliverypostcode,
  //         cityName: delivery.delivery_city,
  //         countryCode: filterreceiverCountry[0].code,
  //         addressLine1: delivery.delivery_address,
  //         countyName: filterreceiverCountry[0].name,
  //       },
  //     },

  //     weight: Number(delivery.weight),
  //     length: Number(delivery.length),
  //     width: Number(delivery.width),
  //     height: Number(delivery.height),
  //   };

  //   showLoader();
  //   const res = await axiosCalls("price/single", "POST", Newdata);
  //   if (res) {
  //     hideLoader();
  //     if (res.er) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: res?.er?.message?.detail || res?.er?.message,
  //       });

  //       return;
  //     }
  //     setTotal(res?.data?.products[0]?.totalPrice[0]?.price);
  //     setTab(5);
  //     // handleBooking();
  //   }
  // };

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

  // const handleTab = (e) => {
  //   if (tab != 2) {
  //     e.preventDefault();
  //   }

  //   if (tab === 1) {
  //     setTab(2);
  //   }

  //   if (tab === 2) {
  //     setTab(3);
  //   }

  //   if (tab === 3) {
  //     setTab(4);
  //   }

  //   if (tab === 4) {
  //     // handleBooking();
  //     getPrice();
  //   }

  //   if (tab === 5) {
  //     BookDel();
  //   }
  // };

  const handleTab = (e) => {
    if (tab !== 2) {
      e.preventDefault()
    }

    if (tab === 1) {
      if (delivery.shipment_type === '') {
        return NotificationManager.error(
          'Shipment type is required to continue',
          'Error'
        )
      }

      if (delivery.weight === '') {
        return NotificationManager.error(
          'Weight is required to continue',
          'Error'
        )
      }

      if (delivery.length === '') {
        return NotificationManager.error(
          'Length is required to continue',
          'Error'
        )
      }

      if (delivery.width === '') {
        return NotificationManager.error(
          'Width is required to continue',
          'Error'
        )
      }

      if (delivery.shipment_type === 'Document' && delivery.weight > 2) {
        // Toast("error","Weight must not be greater than 2")
        NotificationManager.error(
          'Error',
          'You seleted Document as a shipment type, weight must not be greater than 2'
        )
        return
      }

      if (delivery.height === '') {
        return NotificationManager.error(
          'height is required to continue',
          'Error'
        )
      }

      if (delivery.description === '') {
        return NotificationManager.error(
          'description is required to continue',
          'Error'
        )
      }
      if (delivery.value === '') {
        return NotificationManager.error(
          'Value is required to continue',
          'Error'
        )
      }
      setTab(2)
    }

    if (tab === 2) {
      setTab(3)
    }

    if (tab === 3) {
      if (delivery.pickup_address === '') {
        return NotificationManager.error(
          'Pick up address is required to continue',
          'Error'
        )
      }

      if (delivery.country === '') {
        return NotificationManager.error(
          'Country is required to continue',
          'Error'
        )
      }

      if (delivery.state === '') {
        return NotificationManager.error(
          'State is required to continue',
          'Error'
        )
      }

      if (delivery.city === '') {
        return NotificationManager.error(
          'City is required to continue',
          'Error'
        )
      }

      if (delivery.postcode === '') {
        return NotificationManager.error(
          'post code is required to continue',
          'Error'
        )
      }

      if (delivery.pickup_number === '') {
        return NotificationManager.error(
          'Phone number is required to continue',
          'Error'
        )
      }
      setTab(4)
    }

    if (tab === 4) {
      // handleBooking();
      if (delivery.delivery_name === '') {
        return NotificationManager.error(
          'Receiver name is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_address === '') {
        return NotificationManager.error(
          'Address is required to continue',
          'Error'
        )
      }

      if (delivery.receiverCountry === '') {
        return NotificationManager.error(
          'Country is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_state === '') {
        return NotificationManager.error(
          'Receiver state  is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_city === '') {
        return NotificationManager.error(
          'Receiver City is required to continue',
          'Error'
        )
      }

      if (delivery.Deliverypostcode === '') {
        return NotificationManager.error(
          'Receiver Postcode is required to continue',
          'Error'
        )
      }

      if (delivery.pickup_date === '') {
        return NotificationManager.error(
          'Date  is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_email === '') {
        return NotificationManager.error(
          'Receiver email  is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_number === '') {
        return NotificationManager.error(
          'Receiver mobile number  is required to continue',
          'Error'
        )
      }
      getPrice()
    }

    if (tab === 5) {
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

  hideLoader()

  const handleSpecifiedItemSubmit = (data) => {
    // setTab()
    setSpecifiedItems(data.items)
    handleTab()
  }

  return (
    <>
      <InAppNavbar />

      <div className='where-cont' style={{ overflow: 'scroll' }}>
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
              {tab > 1 ? (
                <div
                  className='cancelBtn'
                  onClick={() => {
                    setTab(tab - 1)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '33px',
                  }}
                >
                  <img
                    src={arrowvec}
                    alt=''
                    onClick={() => {
                      setTab(tab - 1)
                    }}
                    style={{ width: '25px' }}
                  />
                  <p
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      marginLeft: '6px',
                      color: '#EA6F23',
                      cursor: 'pointer',
                      fontWeight: '500',
                    }}
                  >
                    Previous tab
                  </p>
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
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '33px',
                  }}
                >
                  <img
                    src={arrowvec}
                    alt=''
                    onClick={() => {
                      setTab(tab - 1)
                    }}
                    style={{ width: '25px' }}
                  />
                  <p
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      marginLeft: '6px',
                      color: '#EA6F23',
                      cursor: 'pointer',
                      fontWeight: '500',
                    }}
                  >
                    Home
                  </p>
                </div>
              )}

              {tab === 1 ? <h2>Shipment Details</h2> : ''}

              {tab === 2 ? <h2>Specify items in package</h2> : ''}

              {tab === 3 ? <h2>PickUp Information</h2> : ''}

              {tab === 4 ? <h2>Delivery Information</h2> : ''}

              {tab === 5 ? (
                <h2 style={{ fontSize: '24px' }}>Shipment Summary</h2>
              ) : (
                ''
              )}

              <p className='where-right-sub' style={{ textAlign: 'center' }}>
                {/* {tab === 1 ? " Get Started" : ""} */}
              </p>

              {tab === 1 ? (
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
                            // min="0.5"
                            value={delivery.height}
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

              {tab === 2 ? (
                <SpecifyItem
                  handleSpecifiedItemSubmit={handleSpecifiedItemSubmit}
                  specifiedItems={specifiedItems}
                />
              ) : null}

              {tab === 3 ? (
                <div className='where-right-form-header'>
                  {/* <h3>Add new address</h3> */}

                  <form>
                    <>
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
                            <label htmlFor=''>Select state</label>

                            <select
                              className='where-address-input-option'
                              name='state'
                              value={delivery.state}
                              onChange={async (e) => {
                                handleChange(e)
                                handleCities(e.target.value)
                              }}
                              required
                            >
                              <option value=''>Select State</option>
                              {StateData.map((data) => {
                                return (
                                  <option value={data?.state.name}>
                                    {data?.state.name}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col'>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>City</label>
                            <select
                              className='where-address-input-option'
                              name='city'
                              onChange={(e) => {
                                handleChange(e)
                              }}
                              value={delivery.city}
                              required
                              disabled={
                                delivery.state === '' ||
                                pickUpCities.length === 0
                                  ? true
                                  : false
                              }
                            >
                              <option value=''>Select City</option>
                              {pickUpCities.map((data) => {
                                return (
                                  <option value={data?.name}>
                                    {data?.name}
                                  </option>
                                )
                              })}
                            </select>
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
                    </>
                    {/* ) : (
                      ""
                    )} */}

                    {/* <p
                      style={{
                        fontSize: "18px",
                        color: "#4169E2",
                        fontWeight: "800",
                        fontFamily: "Playfair Display",
                        padding: "15px 0 0 0",
                      }}
                    >
                      <div class="form-group">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            onClick={() => {
                              setshowPickup(!showPickup);
                              setshowNewAddress(false);
                              setShowAddress(false);
                            }}
                            checked={showPickup ? true : false}
                          />
                          <label class="form-check-label" for="gridCheck">
                            Use Dropoff Locations?
                          </label>
                        </div>
                      </div>{" "}
                    </p> */}

                    {/* {showPickup ? (
                      <div className="row">
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Select Hub</label>
                            <select
                              className="where-address-input-option"
                              onChange={(e) => {
                                setselectValue(e.target.value);
                              }}
                              value={selectValue}
                              required
                            >
                              <option value="">--SELECT--</option>
                              <option value="lagos">LAGOS</option>
                              <option value="abuja">ABUJA</option>
                              <option value="other">OTHER LOCATIONS</option>
                            </select>
                          </div>
                        </div>
                        <div className="col">
                          <div className="inputWrapBook">
                            <label htmlFor="">Select Hub</label>
                            <select
                              className="where-address-input-option"
                              onChange={(e) => {
                                setAddVal(e.target.value);
                                setDatas(displayAddress());
                              }}
                              value={addval}
                              required
                            >
                              {selectValue === "lagos" ? (
                                <>
                                  <option value="">--SELECT--</option>
                                  <option value="LAGOS ISLAND">
                                    LAGOS ISLAND
                                  </option>
                                  <option value="Redemption Camp">
                                    Redemption Camp
                                  </option>
                                  <option value="DHL IKOYI">DHL IKOYI</option>
                                  <option value="DHL APAPA">DHL APAPA</option>
                                  <option value="DHL SURULERE">
                                    DHL SURULERE
                                  </option>
                                  <option value="DHL AKIN ADESOLA">
                                    DHL AKIN ADESOLA
                                  </option>
                                  <option value="DHL BROAD STREET">
                                    DHL BROAD STREET
                                  </option>
                                  <option value="DHL MURI OKUNOLA">
                                    DHL MURI OKUNOLA
                                  </option>
                                  <option value="DHL CHERUB MALL">
                                    DHL CHERUB MALL
                                  </option>
                                  <option value="DHL LEKKI">DHL LEKKI</option>
                                  <option value="DHL ISOLO">DHL ISOLO</option>
                                  <option value="DHL AWOLOWO WAY">
                                    DHL AWOLOWO WAY
                                  </option>
                                  <option value="DHL GRA IKEJA">
                                    DHL GRA IKEJA
                                  </option>
                                  <option value="DHL ALLEN">DHL ALLEN</option>
                                  <option value="DHL Badagry">
                                    DHL Badagry
                                  </option>
                                </>
                              ) : (
                                ""
                              )}

                              {selectValue === "abuja" ? (
                                <>
                                  <option value="DHL HERITAGE HOUSE">
                                    DHL HERITAGE HOUSE
                                  </option>
                                  <option value="DHL GARIKI">DHL GARIKI</option>

                                  <option value="DHL WUZE 2">DHL WUZE 2</option>
                                  <option value="DHL HAFSAT PLAZA">
                                    DHL HAFSAT PLAZA
                                  </option>
                                  <option value="DHL AMINU KANO">
                                    DHL AMINU KANO
                                  </option>
                                  <option value="DHL PORT HARCOURT">
                                    DHL PORT HARCOURT
                                  </option>
                                </>
                              ) : (
                                ""
                              )}

                              {selectValue === "other" ? (
                                <>
                                  <option value="DHL IBADAN">DHL IBADAN</option>
                                  <option value="DHL Kano">DHL Kano</option>

                                  <option value="DHL Katsina">
                                    DHL Katsina
                                  </option>
                                  <option value="DHL Jos">DHL Jos</option>
                                  <option value="DHL Sokoto">DHL Sokoto</option>
                                  <option value="DHL Bauchi">DHL Bauchi</option>
                                  <option value="DHL Gombe">DHL Gombe</option>
                                  <option value="DHL Yola">DHL Yola</option>

                                  <option value="DHL Maiduguri">
                                    DHL Maiduguri
                                  </option>
                                  <option value="DHL Lokoja">DHL Lokoja</option>
                                  <option value="DHL Kaduna">DHL Kaduna</option>
                                  <option value="DHL Zaria">DHL Zaria</option>
                                  <option value="DHL Minna">DHL Minna</option>
                                  <option value="DHL Lafia">DHL Lafia</option>

                                  <option value="DHL Makurdi">
                                    DHL Makurdi
                                  </option>
                                  <option value="DHL Aba">DHL Aba</option>
                                  <option value="DHL Umuahia">
                                    DHL Umuahia
                                  </option>
                                  <option value="DHL Uyo">DHL Uyo</option>
                                  <option value="DHL Eket">DHL Eket</option>
                                  <option value="DHL Calabar">
                                    DHL Calabar
                                  </option>
                                  <option value="DHL Bonny Island">
                                    DHL Bonny Island
                                  </option>
                                  <option value="DHL Yenogoa">
                                    DHL Yenogoa
                                  </option>
                                  <option value="DHL Sokoto">DHL Sokoto</option>
                                  <option value="DHL Warri">DHL Warri</option>
                                  <option value="DHL Sapele">DHL Sapele</option>
                                  <option value="DHL Benin">DHL Benin</option>
                                  <option value="DHL Asaba">DHL Asaba</option>
                                  <option value="DHL Onitsha">
                                    DHL Onitsha
                                  </option>
                                  <option value="DHL Nnewi">DHL Nnewi</option>
                                  <option value="DHL Nsuka">DHL Nsuka</option>
                                  <option value="DHL Abakaliki">
                                    DHL Abakaliki
                                  </option>
                                  <option value="DHL Enugu">DHL Enugu</option>

                                  <option value="DHL Owerri">DHL Owerri</option>
                                  <option value="DHL Akure/ADO">
                                    DHL Akure/ADO
                                  </option>
                                  <option value="DHL Ilorin">DHL Ilorin</option>
                                  <option value="DHL Abeokuta">
                                    DHL Abeokuta
                                  </option>
                                  <option value="DHL Ife">DHL Ife</option>
                                  <option value="DHL Ota">DHL Ota</option>
                                  <option value="DHL Mowe">DHL Mowe</option>
                                </>
                              ) : (
                                ""
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="inputWrapBook">
                          <input type="hidden" value={displayAddress()} />
                          {displayAddress()}
                        </div>
                      </div>
                    ) : (
                      ""
                    )} */}

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

              {tab === 4 ? (
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
                              <label htmlFor=''>Select State</label>

                              <select
                                className='where-address-input-option'
                                name='delivery_state'
                                value={delivery.delivery_state}
                                onChange={async (e) => {
                                  handleChange(e)
                                  setDeliveryCities(
                                    await getLocalCities(e.target.value)
                                  )
                                }}
                                required
                              >
                                <option value=''>Select State</option>
                                {NigeriaStates.map((data) => {
                                  return <option value={data}>{data}</option>
                                })}
                              </select>
                            </div>{' '}
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>City</label>
                              {/* <input
                                required
                                type="text"
                                placeholder="Input city"
                                name="delivery_city"
                                value={delivery.delivery_city}
                                onChange={handleChange}
                              /> */}

                              <select
                                className='where-address-input-option'
                                name='delivery_city'
                                onChange={(e) => {
                                  handleChange(e)
                                }}
                                value={delivery.delivery_city}
                                required
                                disabled={
                                  delivery?.delivery_state === '' ||
                                  deliveryCities.length === 0
                                    ? true
                                    : false
                                }
                              >
                                <option value=''>Select City</option>
                                {deliveryCities.map((data) => {
                                  return (
                                    <option value={data?.name}>
                                      {data?.name}
                                    </option>
                                  )
                                })}
                              </select>
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
                                    Deliverypostcode: target.value,
                                  })
                                }}
                                value={delivery.Deliverypostcode}
                              />
                            </div>
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
                                    pickup_date: target.value,
                                  })
                                }}
                                value={delivery.pickup_date}
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

              {tab === 5 ? (
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
                      <div style={{ marginTop: '10px' }}>Pickup Location</div>
                      <div style={{ marginTop: '10px' }}>Recipient Name</div>
                      <div style={{ marginTop: '10px' }}>Recipient Number</div>
                    </address>
                    <div className='col text-right'>
                      <address style={{ float: 'right' }}>
                        <div>
                          {delivery.pickup_address} {delivery.state}{' '}
                          {delivery.city}
                          {/* {delivery.receiverCountry} */}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          {auth.firstname} {auth.lastname}
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          {' '}
                          {delivery.pickup_number}
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
                        <div>
                          {delivery.delivery_address} {delivery.delivery_state}{' '}
                          {delivery.delivery_city}
                          {/* {delivery.receiverCountry} */}
                        </div>
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
                        value={total}
                        className='foo'
                        thousandSeparator={true}
                      />
                    </div>
                  </div>
                  <div>
                    <div className='paymentTotalbtn'>
                      <PaystackButton
                        reference={new Date().getTime().toString()}
                        email={auth?.email}
                        amount={(total * 100).toFixed(0)}
                        publicKey={
                          'pk_test_3de3e1d2ebe11f74d69ea6ff22341d681a7dc5d5'
                        }
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
                    Track ID: <b>#{trackingId?.shipmentMeta?.trackingId}</b>
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
