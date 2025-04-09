import React, { useState } from 'react'
import './FeedbackForm.css'
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios'
import { BiLoaderAlt } from "react-icons/bi";

function FeedbackForm({ feedbackForm, setFeedbackForm }) {
    const [feedLoader, setFeedLoader] = useState(false)
    let username = useSelector(state => state.username)
    const [feedbackData, setFeedbackData] = useState({
        username: username,
        productName: feedbackForm,
        title: "",
        description: ""
    })
    async function feedbackFormSubmit(e) {
        e.preventDefault()
        try {
            setFeedLoader(true)
            let response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/send`, feedbackData)
            if (response.data.success) {
                toast.success(response.data.message)
                setFeedbackData(prev => ({ ...prev, title: "", description: "" }))
                setFeedLoader(false)
            }
            else {
                toast.error(response.data.message)
            }
            setFeedLoader(false)
        } catch (error) {
            toast.error("Could not sent")
        }
    }
    function feedbackChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setFeedbackData(prev => ({ ...prev, [name]: value }))
    }
    return (
        <div className='feedback-form'>
            <div className="feedbackContainer">
                <div className="head">
                    <h2>Feedback Form</h2>
                    <RxCross1 onClick={() => setFeedbackForm(null)} className='feed-cancel' />
                </div>
                <h3>Product name: {feedbackForm}</h3>
                <div className="form">
                    <form onSubmit={feedbackFormSubmit} action="" method="get">
                        <input onChange={feedbackChange} type="text" name='username' placeholder='Username' required value={feedbackData.username} />
                        <input onChange={feedbackChange} value={feedbackData.title} type="text" name='title' placeholder='Title' required />
                        <textarea onChange={feedbackChange} value={feedbackData.description} name='description' placeholder='Description' required></textarea>
                        <button className={feedLoader && 'active'} type='submit'><BiLoaderAlt className={`f-loader ${feedLoader && 'active'}`}/> Send Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedbackForm;