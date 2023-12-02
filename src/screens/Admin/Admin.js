import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopBar from '../../components/TopBar/TopBar'
import { useParams } from 'react-router-dom'
import './Admin.scss'
import Users from './Pages/Users/Users'
import EditUser from './Pages/Users/EditUser'
import Zone from './Pages/Zone/Zone'
import Home from './Pages/Home/Home'
import Bookings from './Pages/Bookings/Bookings'
import BookingInfo from './Pages/Bookings/BookingInfor'
import BookingStaus from './Pages/Bookings/BookingStatus'
import BookingStatusInfo from './Pages/Bookings/BookingStatusInfo'

function AdminPage() {
  const { page } = useParams()
  const user = JSON.parse(localStorage.getItem('user'))
  const dashboardPage = () => {
    switch (page) {
      case 'home':
        return <Home />
      case 'users':
        return <Users />
      case 'edit-user':
        return <EditUser />
      case 'zone':
        return <Zone />
      case 'bookings':
        return <Bookings />
      case 'booking':
        return <BookingInfo />
      case 'bookings-status':
        return <BookingStaus />
      case 'booking-status':
        return <BookingStatusInfo />
      default:
        return <h1>Page not found</h1>
    }
  }
  return (
    <div className='main-dashboard'>
      <TopBar user={user} />
      <div className='main_body'>
        <Sidebar page={page} user={user} />
        <div className='main_container'>{dashboardPage()}</div>
      </div>
    </div>
  )
}

export default AdminPage
