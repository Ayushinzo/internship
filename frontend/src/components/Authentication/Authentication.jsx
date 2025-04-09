import React, { useState } from 'react'
import './Authentication.css'
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { isLogin, setUser } from '../../redux/slice/slice.js'
import { toast } from 'react-toastify';
import { BiLoaderAlt } from "react-icons/bi";

function Authentication({ setLoginBar }) {
  const [register, setRegister] = useState(false)
  const [loadAuth, setLoadAuth] = useState(false)
  let dispatch = useDispatch()
  let selector = useSelector(state => state.login)
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })
  function onChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setData(prev => ({ ...prev, [name]: value }))
  }

  async function registerOrLoginUser(e) {
    e.preventDefault()
    try {
      setLoadAuth(true)
      let url;
      if (register) {
        url = `${import.meta.env.VITE_BACKEND_URL}/auth/register`
      }
      else {
        url = `${import.meta.env.VITE_BACKEND_URL}/auth/login`
      }
      let response = await axios.post(url, data);
      if (response.data.success) {
        toast.success(response.data.message)
        localStorage.setItem("token", response.data.token)
        dispatch(isLogin(true))
        dispatch(setUser({
          username: response.data.user.username,
          email: response.data.user.email
        }))
        setLoginBar(false)
        setData({
          username: "",
          email: "",
          password: ""
        })
        setLoadAuth(false)
      }
      else {
        toast.error(response.data.message)
        setLoadAuth(false)
      }
      setLoadAuth(false)
    } catch (error) {
      toast.error("Could not register")
    }
  }
  return (
    <div className='auth'>
      <div className="sub-auth">
        <div className='pp'>
          <p><RxCross1 className='auth-cancle' onClick={() => setLoginBar(false)} /></p>
          <h3>{register ? 'Register' : 'Login'}</h3>
          <form onSubmit={registerOrLoginUser} action="" method="get">
            {
              register &&
              <input onChange={onChange} value={data.username} type="text" name='username' placeholder='Username' required />
            }
            <input onChange={onChange} value={data.email} type="email" name='email' placeholder='Email' required />
            <input onChange={onChange} value={data.password} type="password" name='password' placeholder='Password' required />
            <div className="checkbox">
              <input type="checkbox" required /><p>I accept, the term and conditions regarding to this site</p>
            </div>
            <button type='submit' className={loadAuth && 'active'}><BiLoaderAlt className={`loadAuth ${loadAuth && 'active'}`} />{register ? 'Register' : 'Login'}</button>
          </form>
          <p className='bot'>{register ? 'Already have an account?' : 'Create a new account?'} <span onClick={() => setRegister(prev => !prev)}>click here</span></p>
        </div>
      </div>
    </div>
  )
}

export default Authentication;