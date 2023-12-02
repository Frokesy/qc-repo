import React from 'react'
import './TopBar.scss'
import { RiUser3Line, RiArrowDownSLine } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../../Context/Context'
import Logo from '../../assets/logo.png'
function TopBar({ user }) {
  const { handleSidebarToggle } = useGlobalContext()
  return (
    <div className='topbar'>
      <div className='logo'>
        <div className='toggle'>
          <FaBars onClick={handleSidebarToggle} />
        </div>
        <img src={Logo} alt='' />
      </div>
      <div className='rest'>
        <div className='page_name'></div>
        <div className='may_account'>
          <div className='account_head'>
            <RiUser3Line className='user' />
            <p>{user.name}</p>
          </div>
          <div className='account_body'>
            <ul>
              <li>Hey</li>
              <li>Hey</li>
              <li>Hey</li>
              <li>Hey</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
