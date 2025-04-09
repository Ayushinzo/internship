import React from 'react'
import './Home.css'
import Products from '../../components/Products/Products';

function Home({ setFeedbackForm }) {
  return (
    <div className='home'>
      <div className="image"></div>
      <h1>Products</h1>
      <Products setFeedbackForm={setFeedbackForm} />
    </div>
  )
}

export default Home;