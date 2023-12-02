import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import apd1 from '../../assets/apd1.png'
import country from '../../assets/nigeria.png'
import networking from '../../assets/placeholder.png'
import team from '../../assets/gbolahan.jpeg'
import team2 from '../../assets/teamtes.png'

import team_2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
import international from '../../assets/pin.png'
import hero3 from '../../assets/auth.jpeg'
import hero2 from '../../assets/4.jpeg'
import apd2 from '../../assets/apd2.png'
import { Link } from 'react-router-dom'
import ps from '../../assets/ps.svg'
import as from '../../assets/as.svg'
import { useHistory } from 'react-router-dom'
import Slideshow from './slider.js'
import pasta from '../../assets/pasta.png'
import './index.css'
import './slider.css'
import axios from 'axios'

import './hero.css'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  fontFamily: 'Poppins',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  borderBottom: '2px solid #000',

  flexDirection: 'row-reverse',
  borderRadius: '5%',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))
const { REACT_APP_BASEURL } = process.env

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(6),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: '#fff',
  color: '#373737',
  fontSize: '12px',
}))

export default function Index() {
  const [loading, setLoading] = useState(false)
  const [confirmemail, setEmailConfirm] = useState(false)
  const [erroremail, setErrorConfirm] = useState(false)

  const [email, setEmail] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  var settings = {
    dots: true,
    draggable: true,
    autoplay: true,
    dots: true,
    lazyLoad: 'ondemand',
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    // centerPadding: $(".slick").find(".col3-home-slideChild").outerWidth() / 2,
    // infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  }

  const [expanded, setExpanded] = React.useState('')
  const [user, setUser] = React.useState('')

  const history = useHistory()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  const handleEmail = ({ target }) => {
    setEmail({ ...email, [target.name]: target.value })
  }

  const handleSupportEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      axios
        .post(`${REACT_APP_BASEURL}/api/email/create-email`, {
          name: email.name,
          email: email.email,
          subject: email.subject,
          message: email.message,
        })
        .then((res) => {
          setLoading(false)
          setEmailConfirm(true)
        })
    } catch (e) {
      setErrorConfirm(true)
    }
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-7 pt-5 heroscreen pt-lg-0 order-2 order-lg-1 d-flex align-items-center'>
              <div data-aos='zoom-out'>
                <h1>
                  Welcome to our world of seamless and simplified delivery
                </h1>
                <h2>
                  Your one-stop-shop for best-in-class delivery locally and
                  internationally
                </h2>
                <div className='text-center text-lg-start'>
                  <img src={ps} width='30%'></img>
                  <img src={as} width='30%'></img>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 order-1 order-lg-2 hero-img'
              data-aos='zoom-out'
              data-aos-delay='300'
            >
              <img src={pasta} className='img-fluid animated' alt='' />
            </div>
          </div>
        </div>

        <svg
          className='hero-waves'
          xmlns='http://www.w3.org/2000/svg'
          xmnlsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28 '
          preserveAspectRatio='none'
        >
          <defs>
            <path
              id='wave-path'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='wave1'>
            <use
              xlinkHref='#wave-path'
              x='50'
              y='3'
              // fill="rgba(255,255,255, .1)"
            />
          </g>
          <g className='wave2'>
            <use
              xlinkHref='#wave-path'
              x='50'
              y='0'
              // fill="rgba(255,255,255, .2)"
            />
          </g>
          <g className='wave3'>
            <use xlinkHref='#wave-path' x='50' y='9' fill='#fff' />
          </g>
        </svg>
      </section>
      <div className='col4-home app-padding'>
        <div className='row' style={{ width: '100%' }}>
          <div className='col-md-6'>
            <h2>
              Domestic &<br /> International shipping
            </h2>
            <p style={{ fontSize: '1.2rem' }}>
              Book a pickup directly from your location or from your 3rd party
              customer for delivery in more than 220 countries around the world
            </p>
          </div>
          <div className='col-md-6'>
            <Slideshow></Slideshow>
          </div>
        </div>
      </div>
      <section
        id='pricing'
        className='pricing section-bg'
        style={{ padding: '30px', padding: '30px' }}
      >
        <div className='container' style={{ maxWidth: '100%' }}>
          <div className='row' data-aos='fade-left'>
            <div className='col-lg-4 col-md-6 mt-4 mt-md-0'>
              <div className='box' data-aos='zoom-in' data-aos-delay='100'>
                <div style={{ height: '280px' }}>
                  <img src={networking} width='30%'></img>
                  <h4>Intracity</h4>
                  <p>Deliveries within cities in Nigeria.</p>
                </div>
                <div className='btn-wrap'>
                  <Link to='/login'>
                    <button className='btn-buy'>Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-md-0'>
              <div
                className='box featured'
                data-aos='zoom-in'
                data-aos-delay='200'
              >
                <div style={{ height: '280px' }}>
                  <img src={country} width='30%'></img>
                  <h4>Country</h4>
                  <p>Deliveries across states and regions in Nigeria.</p>
                </div>

                <div className='btn-wrap'>
                  <Link to='/login'>
                    <button className='btn-buy'>Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-md-0'>
              <div className='box' data-aos='zoom-in' data-aos-delay='300'>
                <div style={{ height: '280px' }}>
                  <img src={international} width='30%'></img>
                  <h4>International</h4>
                  <p>Deliveries across international borders.</p>
                </div>
                <div className='btn-wrap'>
                  <Link to='/login'>
                    <button className='btn-buy'>Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='col6-home app-padding' id='features'>
        <div
          className='col6-home-img-col1'
          data-aos='zoom-out'
          data-aos-delay='300'
          style={{ width: '100%' }}
        >
          <div className='row'>
            <div className='col img-hide'>
              <img
                src={hero3}
                className='img-fluid animated'
                alt=''
                style={{ width: '70%', marginTop: '-30px' }}
              />
            </div>

            <div className='col'>
              <div className='col6-home-col2'>
                <h2>
                  An eCommerce technology company providing best-in-class
                  delivery solutions.
                </h2>

                <div className='col6-home-col2HR'></div>
                <ul>
                  <li>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                        fill='#4169E2'
                      />
                      <path
                        d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                        fill='#EBF0F3'
                      />
                    </svg>
                    <p style={{ fontSize: '1.2rem' }}>
                      Quick pick-up once booking is confirmed
                    </p>
                  </li>
                  <li>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                        fill='#4169E2'
                      />
                      <path
                        d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                        fill='#EBF0F3'
                      />
                    </svg>
                    <p style={{ fontSize: '1.2rem' }}>
                      {' '}
                      Excellent local and global reach
                    </p>
                  </li>
                  <li>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                        fill='#4169E2'
                      />
                      <path
                        d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                        fill='#EBF0F3'
                      />
                    </svg>
                    <p style={{ fontSize: '1.2rem' }}>
                      Secured shipping locally and globally
                    </p>
                  </li>
                  <li>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                        fill='#4169E2'
                      />
                      <path
                        d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                        fill='#EBF0F3'
                      />
                    </svg>
                    <p style={{ fontSize: '1.2rem' }}>
                      One global team/network
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col6-home app-padding'>
        <div className='col6-home-col2'>
          <h2>Simplified document and parcel delivery at your fingertips.</h2>

          <div className='col6-home-col2HR'></div>
          <ul>
            <li>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                  fill='#4169E2'
                />
                <path
                  d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                  fill='#EBF0F3'
                />
              </svg>
              <p style={{ fontSize: '1.2rem' }}>One stop shop</p>
            </li>
            <li>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                  fill='#4169E2'
                />
                <path
                  d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                  fill='#EBF0F3'
                />
              </svg>
              <p style={{ fontSize: '1.2rem' }}>One-touch shipping</p>
            </li>
            <li>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                  fill='#4169E2'
                />
                <path
                  d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                  fill='#EBF0F3'
                />
              </svg>
              <p style={{ fontSize: '1.2rem' }}>
                Door-to-door logistics solutions
              </p>
            </li>

            <li>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.49998 15C11.6421 15 15 11.6421 15 7.49998C15 3.35786 11.6421 0 7.49998 0C3.35786 0 0 3.35786 0 7.49998C0 11.6421 3.35786 15 7.49998 15Z'
                  fill='#4169E2'
                />
                <path
                  d='M11.4518 3.52808L6.14987 8.83005L3.54823 6.2285L2.22729 7.54924L6.14987 11.4719L12.7728 4.84882L11.4518 3.52808Z'
                  fill='#EBF0F3'
                />
              </svg>
              <p style={{ fontSize: '1.2rem' }}>Most cost-effective shipping</p>
            </li>
          </ul>
        </div>

        <div className='col6-home-img-col1 img-hide'>
          <img
            src={hero2}
            alt=''
            style={{ width: '70%', marginTop: '-50px' }}
          />
        </div>
      </div>
      <section class='home-testimonial'>
        <div class='container-fluid'>
          <div class='row d-flex justify-content-center testimonial-pos'>
            <div class='col-md-12 d-flex justify-content-center'>
              <h2>What Our Customers say</h2>
            </div>
          </div>
          <section class='home-testimonial-bottom'>
            <div class='container testimonial-inner'>
              <div class='row d-flex justify-content-center'>
                <div class='col-md-6 style-3'>
                  <div class='tour-item '>
                    <div class='tour-desc bg-white'>
                      <div
                        class='tour-text text-center'
                        style={{ fontSize: '1rem' }}
                      >
                        &ldquo;I heard about QC Express and sent a customer's
                        parcel through them. The experience was delightful as
                        the package was delivered even before the promised
                        delivery date. I have found a trusted partner to help us
                        manage package delivery to our numerous
                        customers.&rdquo;
                      </div>
                      <div
                        class='d-flex justify-content-center pt-2 pb-2'
                        style={{ fontSize: '1rem' }}
                      >
                        <img class='tm-people' src={team2} alt='' />
                      </div>
                      <div
                        class='link-name d-flex justify-content-center'
                        style={{ fontSize: '1rem' }}
                      >
                        Faderera
                      </div>
                      <div class='link-position d-flex justify-content-center'>
                        CEO, Faderera Fabrics
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-6 style-3'>
                  <div class='tour-item '>
                    <div class='tour-desc bg-white'>
                      <div
                        class='tour-text text-center'
                        style={{ fontSize: '1rem' }}
                      >
                        &ldquo;QC Express is an amazing and reliable platform.
                        Thank you for the seamless pickup and delivery, looking
                        forward more transactions with the platform.&rdquo;
                      </div>
                      <div
                        class='d-flex justify-content-center pt-2 pb-2'
                        style={{ fontSize: '1rem', marginTop: '20px' }}
                      >
                        <img class='tm-people' src={team} alt='' />
                      </div>
                      <div
                        class='link-name d-flex justify-content-center'
                        style={{ fontSize: '1rem' }}
                      >
                        Gbolahan Salami
                      </div>
                      <div class='link-position d-flex justify-content-center'>
                        CEO, Digicomme
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='faq section-bg pt-4' id='faq'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <p>Frequently Asked Questions</p>
          </div>

          <div className='faq-list'>
            <ul>
              <li data-aos='fade-up'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  className='collapsed'
                  data-bs-target='#faq-list-1'
                  style={{ fontSize: '1.2rem' }}
                >
                  How do I create a QC Express Account?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-1'
                  className='collapse show'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Simply log on to the QC Express platform and sign up. An
                    account is created for you instantly upon the completion of
                    the short form on our platform.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='100'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-2'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  How do I book a shipment pick-up?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-2'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Easy. Just log on the QC Express platform and click on
                    “request a pick-up”
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='200'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-3'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  What destinations can I ship to?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-3'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    We deliver to all locations within Nigeria and over 220
                    countries globally. Please consult our coverage areas on our
                    website.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='300'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-4'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Can I send anything on QC Express?
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-4'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Please consult our Restricted and Prohibited items list on
                    the QC Express platform/website.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-5'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  How do I calculate my charges?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-5'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    A delivery charge is automatically calculated for you once
                    you specify the weight, pick-up and delivery locations on
                    our platform.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-6'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Can I estimate the size and weight of a parcel?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-6'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    No. Actual weights of shipments must be determined before
                    shipping
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-7'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Can I use my own packaging when shipping?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-7'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Yes. You are primarily responsible for packaging
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-8'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  I need to cancel a shipment, what should I do?
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-8'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Please contact Customer Service at:
                    support@quartzclassic.com
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-9'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Can I change or cancel a pickup I scheduled online?
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-9'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    No. Please contact Customer Service at:
                    support@quartzclassic.com
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-10'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  What should I do if the courier can’t take a parcel and I was
                  already charged for the shipment?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-10'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    This doesn't happen often, but if a courier arrived but
                    could not take the parcel, it could be because it contains a
                    prohibited item or didn’t have the necessary paperwork
                    ready. We’ll help you arrange a new pickup or refund. Please
                    contact Customer Service at: support@quartzclassic.com
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-11'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  The courier could not take my shipment because it is too
                  big/heavy for their vehicle. What should I do?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-11'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    If your shipment is very large in size or heavy in weight:
                    It may require special pickup equipment and a different
                    vehicle. Please contact us to reschedule your pickup.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-12'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  I have tracked a shipment and been told to contact Customer
                  Service. Why is this?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-12'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    This usually occurs if the information we have is
                    insufficient to track the shipment for you. The address may
                    be incorrect, and we require clarification or some
                    additional information may be required. The matter can be
                    resolved very quickly by contacting Customer Service.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-13'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  My shipment is showing “Custom status updated” from the
                  destination, even though the shipment just left the country.
                  What does this mean?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-13'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    This status provides an indication of the clearance
                    processing from the destination. Please click in to the
                    further details (+) to open and see additional information
                    available. This checkpoint allows you to see very early if
                    there is additional information required by customs for
                    clearance.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-14'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  If I do not have my tracking number, is it still possible to
                  track my shipment?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-14'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Yes, under certain conditions. We strongly advise you to
                    make a record of your tracking number however, if you have
                    the shipper's reference number, you can use our online
                    Shipper’s Reference Tracking service.  
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-15'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  How are customs duties calculated?{' '}
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-15'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    The calculation of duties depends on the assessable value of
                    a dutiable shipment. For the purpose of this calculation,
                    dutiable goods are given a classification code that is known
                    as the Harmonized System code. Whether a shipment is a gift
                    or not, it must still go through an import procedure as
                    determined by custom’s law in the destination country. The
                    shipment is cleared through customs based on the origin
                    country, the value and quantity, but not its purpose.
                    Dutiable shipments are subject to a customs duty, which is a
                    tariff or tax imposed on goods when transported across
                    international borders. This system has been assigned by the
                    World Customs Organization and continues to evolve.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-16'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Who is responsible for payment of duties and taxes?
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-16'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    The payment of duties and taxes are typically the
                    responsibility of the receiver.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-17'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Why is the receiver being asked to pay Customs duties and
                  taxes? <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-17'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Duties and taxes are levied by Customs in the destination
                    country and the receiver is responsible for paying them. The
                    Carrier will collect payment from the receiver prior to
                    delivery. Generally, we are unable to deliver parcels until
                    these have been paid.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-18'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  I’m sending a gift – can I pay duties and taxes instead of the
                  receiver? <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-18'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    You need an account to pay duties and taxes for the
                    receiver.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-19'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Why doesn’t QC include duties and taxes in its prices?
                  <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-19'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    The customs authorities in the destination country determine
                    whether any duties and taxes are applicable when the parcel
                    arrives. This is based on the information provided on the
                    shipping label (or waybill) and customs paperwork – in
                    particular the shipment contents, declared value and weight.
                  </p>
                </div>
              </li>

              <li data-aos='fade-up' data-aos-delay='400'>
                <i className='bx bx-help-circle icon-help'></i>{' '}
                <a
                  data-bs-toggle='collapse'
                  data-bs-target='#faq-list-20'
                  className='collapsed'
                  style={{ fontSize: '1.2rem' }}
                >
                  Why do I need to pay customs duty if I received a shipment as
                  a gift? <i className='bx bx-chevron-down icon-show'></i>
                  <i className='bx bx-chevron-up icon-close'></i>
                </a>
                <div
                  id='faq-list-20'
                  className='collapse'
                  data-bs-parent='.faq-list'
                >
                  <p style={{ fontSize: '1.2rem' }}>
                    Whether a shipment is a gift or not, it must still go
                    through an import procedure as determined by custom’s law in
                    the destination country. The shipment is cleared through
                    customs based on the origin country, the value and quantity,
                    but not its purpose. You will need to pay customs duty and
                    taxes only if the value of the gift is above a stated local
                    threshold.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id='contact' className='contact'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <p>Contact Us</p>
          </div>

          <div className='row'>
            <div
              className='col-lg-4'
              data-aos='fade-right'
              data-aos-delay='100'
            >
              <div className='info'>
                <div className='address'>
                  <i className='bi bi-geo-alt'></i>
                  <h4>Location:</h4>
                  <p>
                    14A Olatunji Close, Off Continental Way, Ikosi GRA IV,
                    Magodo, Lagos-Nigeria.
                  </p>
                </div>

                <div className='email'>
                  <i className='bi bi-envelope'></i>
                  <h4>Email:</h4>
                  <p>customercare@quartzclassic.com</p>
                </div>

                <div className='phone'>
                  <i className='bi bi-phone'></i>
                  <h4>Call:</h4>
                  <p>
                    +234 912 049 9852–7, +234 802 0549 655, +234 802 290 2446
                  </p>
                </div>
              </div>
            </div>

            <div
              className='col-lg-8 mt-5 mt-lg-0'
              data-aos='fade-left'
              data-aos-delay='200'
            >
              <form role='form' className='php-email-form'>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      onChange={handleEmail}
                      placeholder='Your Name'
                      required
                    />
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      onChange={handleEmail}
                      placeholder='Your Email'
                      required
                    />
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    onChange={handleEmail}
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='form-group mt-3'>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    onChange={handleEmail}
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
                <div className='my-3'>
                  {loading ? <div className='loading'>Loading</div> : ''}
                  {erroremail ? (
                    <div className='error-message'>Something went wrong</div>
                  ) : (
                    ''
                  )}
                  {confirmemail ? (
                    <div
                      className='alert alert-success alert-dismissible '
                      role='alert'
                    >
                      Message sent Successfully
                      <button
                        type='submit'
                        class='btn btn-success'
                        data-dismiss='alert'
                        style={{
                          background: '#fff',
                          color: 'green',
                          float: 'right',
                          margin: '-10px',
                        }}
                      >
                        x
                      </button>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className='text-center'>
                  <button type='submit' onClick={handleSupportEmail}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          width: '100%',
          backgroundColor: '#446ce4',
          overflow: 'hidden ',
          marginTop: '3%',
        }}
      >
        <div className='footerHome app-padding'>
          <div className='row'>
            <div className='col-md-6' style={{ marginTop: '' }}>
              <div className='footerHomeCol1' style={{ color: '#fff' }}>
                <h2 style={{ color: '#fff' }}>
                  Enjoy best in class pickup and delivery solutions from the
                  professionals
                </h2>
                <p style={{ fontSize: '20px' }}>
                  Book a pickup directly from your location or from your 3rd
                  party customer for delivery in more than 220 countries around
                  the world
                </p>
                <div className='downloadOPtionsfooter'>
                  <img src={apd1} alt='' />
                  <img src={apd2} alt='' />
                </div>
              </div>
            </div>

            <div className='col-md-3' style={{ marginTop: '5%' }}>
              <div
                className='footerHomeCol2'
                style={{
                  color: '#fff',
                  marginLeft: '20%',
                }}
              >
                <div
                  class='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                  style={{ display: 'block', background: 'none' }}
                >
                  <Link
                    class='dropdown-item'
                    style={{ color: '#fff' }}
                    to='/terms'
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    class='dropdown-item'
                    style={{ color: '#fff' }}
                    onClick={() => {
                      history.push('/privacy')
                    }}
                  >
                    Privacy and Policy
                  </Link>
                  <a
                    class='dropdown-item'
                    style={{ color: '#fff' }}
                    onClick={() => {
                      history.push('/about_us')
                    }}
                  >
                    About Us
                  </a>
                  <a
                    class='dropdown-item'
                    href='#contact'
                    style={{ color: '#fff' }}
                  >
                    Contact Us
                  </a>
                  <a
                    class='dropdown-item'
                    href='#'
                    style={{ color: '#fff' }}
                    onClick={() => {
                      history.push('/login')
                    }}
                  >
                    Cockpit
                  </a>

                  {/* <a class="dropdown-item" href="#">Something else here</a> */}
                </div>
              </div>
            </div>
            <div className='col-md-3' style={{ marginTop: '3%' }}>
              <div
                className='footerHomeCol2'
                style={{
                  color: '#fff',
                  marginLeft: '20%',
                }}
              >
                <div class='mapouter'>
                  <div class='gmap_canvas'>
                    <iframe
                      width='300'
                      height='300'
                      id='gmap_canvas'
                      src='https://maps.google.com/maps?q=Magodo,%20Lagos-Nigeria.&t=&z=13&ie=UTF8&iwloc=&output=embed'
                      frameborder='0'
                      scrolling='no'
                      marginheight='0'
                      marginwidth='0'
                    />
                    <a href='https://www.whatismyip-address.com/divi-discount/'></a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
