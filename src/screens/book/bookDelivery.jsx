import React, { useState } from 'react'
import moment from 'moment'
import timeZone from 'moment-timezone'
import contries from '../../components/countries'
import zonedata from './prices'
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
import NIGStates from '../../components/nigeriaStates'
import { Modal } from 'react-responsive-modal'
import InAppNavbar from '../../components/layout/inAppNavbar'
import Swal from 'sweetalert2'

import NumberFormat from 'react-number-format'
import { SpecifyItem } from './items'
import { Newcountries, states, getLocalCities } from '../../helper/locals'
// import { City } from "country-state-city";
import { capitalizeFirstLetter } from '../../helper/capitalize'
import StateData from '../../helper/StateData'
const countryList = require('country-list')

export default function BookDelivery() {
  let countryListData = countryList.getData()
  countryListData.sort()
  var retrievedObject = localStorage.getItem('user')
  var regex = /[.,\s]/g

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
    description: '',
    city: '',
    email: '',
    state: '',
    value: '',
    pickup_address: addval ? data[addval] : '',
    pickup_hub: addval,
    pickup_number: '',
    useDefaultAddress: auth?.address,
    country: 'NG',
    delivery_address: '',
    delivery_state: '',
    delivery_name: '',
    postcode: '',
    delivery_email: '',
    delivery_number: '',
    receiverCountry: '',
    Deliverypostcode: '',
    delivery_city: '',
  })
  const [userStates, setUserStates] = useState([])
  const [RuserStates, setRUserStates] = useState([])

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
  const handleCities = (state) => {
    const PickedState = StateData.find((item) => item.state.name === state)
    setPickupCities(PickedState.state.locals)
  }

  const [trackingId, setTrackingId] = useState('')
  let newtotal = 0
  const calculateVolume = (length, width, height) => {
    const price = length * width * height * 5000
    if (delivery.weight > price) {
      setVolTotal(price)
    } else {
      setVolTotal(delivery.weight)
    }
  }
  const calculatePrice = (weight, zone) => {
    let rate
    let price
    let srate = zonedata.find((data) => data.weight == weight)
    switch (zone.Zone) {
      case 'zone1':
        rate = srate.zone1.rate
        price = srate.zone1.price
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
        price = srate.zone4.price
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
            var margin = 0.4 * 11261.53875
            var rate = margin * 0.075
            newtotal = 11261.53875 + margin + rate
            setTotal(Math.round(newtotal))
            break
          case 'zone2':
            var margin = 0.23 * 12721.92625
            var rate = margin * 0.075
            newtotal = 12721.92625 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone3':
            var margin = 0.2 * 14182.3003125
            var rate = margin * 0.075
            newtotal = 14182.3003125 + margin + rate
            setTotal(Math.round(newtotal))
            break
          case 'zone4':
            var margin = 0.18 * 16616.301875
            var rate = margin * 0.075
            newtotal = 16616.301875 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone5':
            var margin = 0.18 * 17103.08875
            var rate = margin * 0.075
            newtotal = 17103.08875 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone6':
            var margin = 0.18 * 18563.4896875
            var rate = margin * 0.075
            newtotal = 18563.4896875 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone7':
            var margin = 0.13 * 21099.9253125
            var rate = margin * 0.075
            newtotal = 21099.9253125 + rate + margin
            setTotal(newtotal)
            break
          case 'zone8':
            var margin = 0.1 * 21484.2646875
            var rate = margin * 0.075
            newtotal = 21484.2646875 + rate + margin
            setTotal(Math.round(newtotal))
            break
        }
      } else if (weight <= 1) {
        switch (newZone) {
          case 'zone1':
            var margin = 0.4 * 11326.710625
            var rate = margin * 0.075
            newtotal = 11326.710625 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone2':
            var margin = 0.23 * 12787.098125
            var rate = margin * 0.075
            newtotal = 12787.098125 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone3':
            var margin = 0.2 * 14247.4721875
            var rate = margin * 0.075
            newtotal = 14247.4721875 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone4':
            var margin = 0.18 * 16681.47375
            var rate = margin * 0.075
            newtotal = 16681.47375 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone5':
            var margin = 0.18 * 17168.260625
            var rate = margin * 0.075
            newtotal = 17168.260625 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone6':
            var margin = 0.18 * 18628.6615625
            var rate = margin * 0.075
            newtotal = 18628.6615625 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone7':
            var margin = 0.13 * 21754.3315625
            var rate = margin * 0.075
            newtotal = 21754.3315625 + rate + margin
            setTotal(Math.round(newtotal))
            break

          case 'zone8':
            var margin = 0.1 * 21549.4365625
            var rate = margin * 0.075
            newtotal = 21549.4365625 + rate + margin
            setTotal(Math.round(newtotal))
            break
        }
      } else if (weight <= 1.5) {
        switch (newZone) {
          case 'zone1':
            var margin = 0.4 * 11391.8825
            var rate = margin * 0.075
            newtotal = 11391.8825 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone2':
            var margin = 0.23 * 12852.27
            var rate = margin * 0.075
            newtotal = 12852.27 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone3':
            var margin = 0.2 * 14312.6440625
            var rate = margin * 0.075
            newtotal = 14312.6440625 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone4':
            var margin = 0.18 * 16746.645625
            var rate = margin * 0.075
            newtotal = 16746.645625 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone5':
            var margin = 0.18 * 17233.4325
            var rate = margin * 0.075
            newtotal = 17233.4325 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone6':
            var margin = 0.18 * 18693.8334375
            var rate = margin * 0.075
            newtotal = 18693.8334375 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone7':
            var margin = 0.13 * 22408.7378125
            var rate = margin * 0.075
            newtotal = 22408.7378125 + rate + margin
            setTotal(Math.round(newtotal))
            break

          case 'zone8':
            var margin = 0.1 * 21614.6084375
            var rate = margin * 0.075
            newtotal = 21614.6084375 + rate + margin
            setTotal(Math.round(newtotal))
            break
        }
      } else if (weight <= 2) {
        switch (newZone) {
          case 'zone1':
            var margin = 0.4 * 11457.054375
            var rate = margin * 0.075
            newtotal = 11457.054375 + rate + margin

            setTotal(Math.round(newtotal))
            break
          case 'zone2':
            var margin = 0.23 * 12917.441875
            var rate = margin * 0.075
            newtotal = 12917.441875 + rate + margin

            setTotal(Math.round(newtotal))
            break
          case 'zone3':
            var margin = 0.2 * 14377.8159375
            var rate = margin * 0.075
            newtotal = 14377.8159375 + rate + margin

            setTotal(Math.round(newtotal))
            break
          case 'zone4':
            var margin = 0.18 * 16811.8175
            var rate = margin * 0.075
            newtotal = 16811.8175 + rate + margin
            setTotal(Math.round(newtotal))
            break
          case 'zone5':
            var margin = 0.18 * 17298.604375
            var rate = margin * 0.075
            newtotal = 17298.604375 + rate + margin

            setTotal(Math.round(newtotal))
            break
          case 'zone6':
            var margin = 0.18 * 18759.0053125
            var rate = margin * 0.075
            newtotal = 18759.0053125 + rate + margin

            setTotal(Math.round(newtotal))
            break
          case 'zone7':
            var margin = 0.13 * 23063.1440625
            var rate = margin * 0.075
            newtotal = 23063.1440625 + rate + margin

            setTotal(Math.round(newtotal))
            break
          case 'zone8':
            var margin = 0.1 * 21679.7803125
            var rate = margin * 0.075
            newtotal = 21679.78 + rate + margin

            setTotal(Math.round(newtotal))
            break
        }
      }
    } else {
      calculatePrice(weight, zone)
    }
  }

  const displayAddress = () => {
    return <p>{addval ? data[addval] : ''}</p>
  }

  React.useEffect(() => {
    setUserStates(states('NG'))
  }, [])
  const handleBooking = async () => {
    const filterPickupCountry = Newcountries.filter((c) => {
      return c.isoCode == delivery.country
    })

    const filterreceiverCountry = Newcountries.filter((c) => {
      return c.isoCode == delivery.receiverCountry
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
          netValue: itm?.grossValue,
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
      type: 'EXPORT',
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
            countryCode: filterPickupCountry[0].isoCode,
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
            countryCode: filterreceiverCountry[0].isoCode,
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
        category: 'Eletronics',
        shipment_type: delivery.shipment_type.toUpperCase(),
        value: Number(delivery.value),
      },
      international: {
        exportDeclaration: {
          lineItems: sortSpecifiedItem,
          exportReason: 'Permanent',
          // additionalCharges: [
          //   {
          //     value: 20,
          //     typeCode: "freight",
          //   },
          // ],

          // "2022-04-12"
          invoice: {
            number: `invoice number ${Math.random()}`,
            date: moment(new Date()).format('YYYY-MM-DD'),
          },
          placeOfIncoterm: delivery.delivery_city,
          exportReasonType: 'permanent',
          shipmentType: 'personal',
        },
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
    const filterPickupCountry = Newcountries.filter((c) => {
      return c.isoCode == delivery.country
    })

    const filterreceiverCountry = Newcountries.filter((c) => {
      return c.isoCode == delivery.receiverCountry
    })

    let Newdata = {
      plannedShippingDateAndTime: `${moment(delivery.pickup_date).format(
        'YYYY-MM-DD'
      )}T${moment(delivery.pickup_date).format('hh:mm:ss')} GMT+01:00`,
      isCustomsDeclarable: true,
      document:
        delivery.shipment_type.toLocaleLowerCase() == 'document'
          ? 'document'
          : 'non_document',
      productCode: 'P',
      deliveryType: 'export',
      nextBusinessDay: true,
      customerDetails: {
        shipperDetails: {
          postalCode: delivery.postcode,
          cityName: capitalizeFirstLetter(delivery.city),
          countryCode: filterPickupCountry[0].isoCode,
          addressLine1: delivery.pickup_address,
          countyName: filterPickupCountry[0].name,
        },
        receiverDetails: {
          postalCode: delivery.Deliverypostcode,
          cityName: capitalizeFirstLetter(delivery.delivery_city),
          countryCode: filterreceiverCountry[0].isoCode,
          addressLine1: delivery.delivery_address,
          countyName: filterreceiverCountry[0].name,
        },
      },
      monetaryAmount: [
        {
          typeCode: 'declaredValue',
          value: Number(delivery.value),
          currency: 'NGN',
        },
      ],
      weight: Number(delivery.weight),
      length: Number(delivery.length),
      width: Number(delivery.width),
      height: Number(delivery.height),
    }

    showLoader()
    let ApiUrl = ''
    if (delivery.shipment_type.toLocaleLowerCase() === 'document') {
      ApiUrl = `price/single?originCountryCode=${
        filterPickupCountry[0].isoCode
      }&originPostalCode=${
        delivery.postcode
      }&originCityName=${capitalizeFirstLetter(
        delivery.city
      )}&destinationCountryCode=${
        filterreceiverCountry[0].isoCode
      }&destinationPostalCode=${
        delivery.Deliverypostcode
      }&destinationCityName=${capitalizeFirstLetter(
        delivery.delivery_city
      )}&weight=${delivery.weight}&length=${delivery.length}&width=${
        delivery.width
      }&height=${delivery.height}&plannedShippingDate=${`${moment(
        delivery.pickup_date
      ).format('YYYY-MM-DD')}`}&isCustomsDeclarable=false&nextBusinessDay=true`
    } else {
      ApiUrl = 'price/single'
    }
    const res = await axiosCalls(ApiUrl, 'POST', Newdata)
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

  const handleTab = (e) => {
    if (tab != 2) {
      e.preventDefault()
    }

    if (tab == 1) {
      if (delivery.shipment_type == '') {
        return NotificationManager.error(
          'Shipment type is required to continue',
          'Error'
        )
      }

      if (delivery.weight == '') {
        return NotificationManager.error(
          'Weight is required to continue',
          'Error'
        )
      }

      if (delivery.length == '') {
        return NotificationManager.error(
          'Length is required to continue',
          'Error'
        )
      }

      if (delivery.width == '') {
        return NotificationManager.error(
          'Width is required to continue',
          'Error'
        )
      }

      if (delivery.shipment_type == 'Document' && delivery.weight > 2) {
        // Toast("error","Weight must not be greater than 2")
        NotificationManager.error(
          'Error',
          'You seleted Document as a shipment type, weight must not be greater than 2'
        )
        return
      }

      if (delivery.height == '') {
        return NotificationManager.error(
          'height is required to continue',
          'Error'
        )
      }

      if (delivery.description == '') {
        return NotificationManager.error(
          'description is required to continue',
          'Error'
        )
      }

      if (delivery.value == '') {
        return NotificationManager.error(
          'Value is required to continue',
          'Error'
        )
      }
      setTab(2)
    }

    if (tab == 2) {
      setTab(3)
    }

    if (tab == 3) {
      if (delivery.pickup_address == '') {
        return NotificationManager.error(
          'Pick up address is required to continue',
          'Error'
        )
      }

      if (delivery.country == '') {
        return NotificationManager.error(
          'Country is required to continue',
          'Error'
        )
      }

      if (delivery.state == '') {
        return NotificationManager.error(
          'State is required to continue',
          'Error'
        )
      }

      if (delivery.city == '') {
        return NotificationManager.error(
          'City is required to continue',
          'Error'
        )
      }

      if (delivery.postcode == '') {
        return NotificationManager.error(
          'post code is required to continue',
          'Error'
        )
      }

      if (delivery.pickup_number == '') {
        return NotificationManager.error(
          'Phone number is required to continue',
          'Error'
        )
      }
      setTab(4)
    }

    if (tab == 4) {
      // handleBooking();
      if (delivery.delivery_name == '') {
        return NotificationManager.error(
          'Receiver name is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_address == '') {
        return NotificationManager.error(
          'Address is required to continue',
          'Error'
        )
      }

      if (delivery.receiverCountry == '') {
        return NotificationManager.error(
          'Country is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_state == '') {
        return NotificationManager.error(
          'Receiver state  is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_city == '') {
        return NotificationManager.error(
          'Receiver City is required to continue',
          'Error'
        )
      }

      if (delivery.Deliverypostcode == '') {
        return NotificationManager.error(
          'Receiver Postcode is required to continue',
          'Error'
        )
      }

      if (delivery.pickup_date == '') {
        return NotificationManager.error(
          'Date  is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_email == '') {
        return NotificationManager.error(
          'Receiver email  is required to continue',
          'Error'
        )
      }

      if (delivery.delivery_number == '') {
        return NotificationManager.error(
          'Receiver mobile number  is required to continue',
          'Error'
        )
      }
      getPrice()
    }

    if (tab == 5) {
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

              {tab == 1 ? <h2>Shipment Details</h2> : ''}

              {tab == 2 ? <h2>Specify items in package</h2> : ''}

              {tab == 3 ? <h2>PickUp Information</h2> : ''}

              {tab == 4 ? <h2>Delivery Information</h2> : ''}

              {tab == 5 ? (
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

              {tab == 2 ? (
                <SpecifyItem
                  handleSpecifiedItemSubmit={handleSpecifiedItemSubmit}
                  specifiedItems={specifiedItems}
                />
              ) : null}

              {tab == 3 ? (
                <div className='where-right-form-header'>
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
                            <label htmlFor=''>Select Country</label>

                            <select
                              className='where-address-input-option'
                              name='country'
                              onChange={(e) => {
                                // handleChange(e);
                                // setUserStates(states(e.target.value));
                              }}
                              value={delivery.country}
                              required
                              disabled
                            >
                              <option value=''>Select country</option>
                              {Newcountries.map((data) => {
                                return (
                                  <option value={data?.isoCode}>
                                    {data?.name}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        </div>

                        <div className='col'>
                          <div className='inputWrapBook'>
                            <label htmlFor=''>Select state</label>

                            <select
                              className='where-address-input-option'
                              name='state'
                              onChange={async (e) => {
                                handleChange(e)
                                handleCities(e.target.value)
                              }}
                              value={delivery.state}
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
                          </div>{' '}
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
                                  delivery.state == '' ||
                                  pickUpCities.length == 0
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
                              {/* <input
                                required
                                type="text"
                                placeholder="Input city"
                                name="city"
                                value={delivery.city}
                                onChange={handleChange}
                              /> */}
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

              {tab == 4 ? (
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

                              <select
                                className='where-address-input-option'
                                name='receiverCountry'
                                onChange={(e) => {
                                  handleChange(e)
                                  setRUserStates(states(e.target.value))
                                }}
                                value={delivery.receiverCountry}
                                required
                              >
                                <option value=''>Select country</option>
                                {Newcountries.map((data) => {
                                  return (
                                    <option value={data?.isoCode}>
                                      {data?.name}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                          </div>

                          <div className='col'>
                            <div className='inputWrapBook'>
                              <label htmlFor=''>Add State</label>

                              <select
                                className='where-address-input-option'
                                onChange={(e) => {
                                  handleChange(e)
                                }}
                                name='delivery_state'
                                value={delivery.delivery_state}
                                required
                              >
                                <option value=''>Select State</option>
                                {RuserStates.map((data) => {
                                  return (
                                    <option value={data?.name}>
                                      {data?.name}
                                    </option>
                                  )
                                })}
                              </select>
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
                                name='delivery_city'
                                value={delivery.delivery_city}
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

              {tab == 5 ? (
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
