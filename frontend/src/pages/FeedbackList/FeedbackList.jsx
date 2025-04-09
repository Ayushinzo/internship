import React, { useEffect, useState } from 'react'
import './FeedbackList.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([])
  async function fetchFeedbacks() {
    try {
      let response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/feedback/get`)
      if (response.data.success) {
        setFeedbacks(response.data.data)
      }
      else {
        // console.log(response.data.message)
      }
    } catch (error) {
      toast.error("Could not fetch feedbacks")
    }
  }

  useEffect(() => {
    fetchFeedbacks()
  }, [])
  return (
    <div className='feedback-list'>
      <h1>Feedback List</h1>
      <div className="feedback-container">
        <div className="p">
          <div className="feed heading">
            <p>Sr. no</p>
            <p>Username</p>
            <p>Product Name</p>
            <p>Title</p>
            <p>Description</p>
          </div>
          <hr />
          {
            feedbacks.length == 0 ? <div className="no-feedback">
              <h2>No Feedback</h2>
            </div> :
              feedbacks.map((item, index) => {
                return (
                  <>
                    <div className="feed user-feedback">
                      <p>{index + 1}</p>
                      <p>{item.username}</p>
                      <p>{item.productName}</p>
                      <p>{item.title}</p>
                      <p className='feed-desc'>{item.description}</p>
                    </div>
                    <hr />
                  </>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default FeedbackList;