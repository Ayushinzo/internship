import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { isLogin } from '../../redux/slice/slice.js'
import { MdLogout } from "react-icons/md";

function Navbar({ setLoginBar }) {
  const [navbar, setNavbar] = useState(false)
  const [logoutButton, setLogoutButton] = useState(false)
  let dispatch = useDispatch()
  let isUserLogin = useSelector(state => state.login)
  let user = useSelector(state => state.username.split(' ')[0])
  let location = useLocation()
  const { pathname } = location;
  window.onscroll = () => {
    setNavbar(false)
  }
  function logout() {
    localStorage.removeItem('token')
    dispatch(isLogin(false))
    // window.location.reload()
  }
  return (
    <div className='navbar'>
      {
        navbar ?
          <RxCross1 className='menu' onClick={() => setNavbar(false)} />
          :
          <AiOutlineMenu className='menu' onClick={() => setNavbar(true)} />
      }
      <Link exact={true} to={'/'}>LE<span>MA</span></Link>
      <nav className={`items ${navbar && 'active'}`}>
        <ul>
          <li className={pathname == '/' && 'active'}><Link onClick={() => setNavbar(false)} exact={true} to={'/'}>Home</Link></li>
          <li className={pathname == '/feedback-list' && 'active'}><Link onClick={() => setNavbar(false)} exact={true} to={'/feedback-list'}>Feedback list</Link></li>
        </ul>
      </nav>
      {
        isUserLogin ? <div className="user">
          <p>{user}</p><div className="image">
            <img src="/user.png" alt="user" onClick={() => setLogoutButton(prev => !prev)} />
            <div className={`logout ${logoutButton && 'active'}`} onClick={logout}>
              <ul>
                <li><MdLogout className='out'/> Logout</li>
              </ul>
            </div>
          </div>
        </div> :
          <button onClick={() => setLoginBar(true)}>Log in</button>
      }
    </div>
  )
}

export default Navbar;