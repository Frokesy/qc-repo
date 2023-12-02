import React from 'react'
import './Sidebar.scss'
import { RiHome5Line, RiLogoutCircleRLine } from 'react-icons/ri'
import { GiMoneyStack, GiReceiveMoney } from 'react-icons/gi'
import { FaUserTie } from 'react-icons/fa'
import { TbBusinessplan, TbList } from 'react-icons/tb'
import {
  RiExchangeFundsFill,
  RiBankLine,
  RiBookletFill,
  RiBookletLine,
} from 'react-icons/ri'
import { useGlobalContext } from '../../Context/Context'
import { useHistory } from 'react-router-dom'

function Sidebar({ page, user }) {
  const { toggleSidebar, handleSidebarToggle } = useGlobalContext()
  const history = useHistory()

  return (
    <div className={toggleSidebar ? 'sidebar' : 'sidebar active'}>
      <div className='columns'>
        <div
          className={page === 'home' ? 'rowd active' : 'rowd'}
          onClick={() => {
            history.push('/admin/home')
            handleSidebarToggle()
          }}
        >
          <div className='icon'>
            <RiHome5Line />
          </div>
          <p>Dashboard</p>
        </div>
        {user.name === 'superadmin' && (
          <div
            className={page === 'users' ? 'rowd active' : 'rowd'}
            onClick={() => {
              history.push('/admin/users')
              handleSidebarToggle()
            }}
          >
            <div className='icon'>
              <FaUserTie />
            </div>
            <p>Admin</p>
          </div>
        )}
        <div
          className={page === 'zone' ? 'rowd active' : 'rowd'}
          onClick={() => {
            history.push('/admin/zone')
            handleSidebarToggle()
          }}
        >
          <div className='icon'>
            <RiExchangeFundsFill />
          </div>
          <p>Zone Rates</p>
        </div>
        <div
          className={
            page === 'bookings' || page === 'booking' ? 'rowd active' : 'rowd'
          }
          onClick={() => {
            history.push('/admin/bookings')
            handleSidebarToggle()
          }}
        >
          <div className='icon'>
            <RiBookletFill />
          </div>
          <p>Bookings</p>
        </div>
        {/* <div
          className={page === 'bookings-status' ? 'rowd active' : 'rowd'}
          onClick={() => {
            history.push('/admin/bookings-status')
            handleSidebarToggle()
          }}
        >
          <div className='icon'>
            <RiBookletLine />
          </div>
          <p>Bookings Status</p>
        </div> */}
        <div
          className='rowd'
          onClick={() => {
            history.push('/admin/login')
            localStorage.clear()
            sessionStorage.clear()
          }}
        >
          <div className='icon'>
            <RiLogoutCircleRLine />
          </div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
