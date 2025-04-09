import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Authentication from './components/Authentication/Authentication'
import Home from './pages/Home/Home'
import FeedbackList from './pages/FeedbackList/FeedbackList'
import { ToastContainer } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { isLogin, setUser } from './redux/slice/slice'
import axios from 'axios'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'
import { toast } from 'react-toastify'
import Authenticate from './components/Authenticate/Authenticate'

function App() {
  const [loginBar, setLoginBar] = useState(false)
  const [feedbackForm, setFeedbackForm] = useState(null)
  let dispatch = useDispatch()
  let r = useSelector(state => state)
  function pp() {
    console.log(r, isUserLogin)
  }

  async function getUser() {
    try {
      let response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/getUser`, {
        headers: {
          'Authorization': `bearer ${localStorage.getItem('token')}`
        }
      })
      if (response.data.success) {
        const { username, email } = response.data.decoded;
        dispatch(setUser({
          username: username,
          email: email
        }))
        dispatch(isLogin(true))
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser()
    }
    else {
      dispatch(isLogin(false))
    }
  }, [])
  return (
    <div className='main'>
      {
        feedbackForm &&
        <FeedbackForm feedbackForm={feedbackForm} setFeedbackForm={setFeedbackForm} />
      }
      {
        loginBar &&
        <Authentication setLoginBar={setLoginBar} />
      }
      {/* <button onClick={pp}>click me</button> */}
      <ToastContainer
        theme='colored'
        autoClose={3000}
        position='top-right'
      />
      <Navbar setLoginBar={setLoginBar} />
      <div className='content'>
        <Routes>
          <Route path='/' exact={true} element={<Home setFeedbackForm={setFeedbackForm} />} />
          <Route path='/feedback-list' exact={true} element={<Authenticate><FeedbackList /></Authenticate>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;