import React from 'react'
import './Products.css'
// import FeedbackForm from '../FeedbackForm/FeedbackForm'

function Products({ setFeedbackForm }) {
    const products = [
        {
            id: 1,
            image: "/television.webp",
            name: "Television",
            price: "$300",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 2,
            image: "/mixer.webp",
            name: "Mixer",
            price: "$60",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 3,
            image: "/fridge.avif",
            name: "Fridge",
            price: "$600",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 4,
            image: "/gas.webp",
            name: "Gas Stove",
            price: "$100",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 5,
            image: "/cooler.webp",
            name: "Cooler",
            price: "$90",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 6,
            image: "/laptop.avif",
            name: "Laptop",
            price: "$100",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 7,
            image: "/airConditioner.webp",
            name: "Air Conditioner (AC)",
            price: "$150",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 8,
            image: "/iron.webp",
            name: "Iron Press",
            price: "$60",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 9,
            image: "/watch.avif",
            name: "Smart Watch",
            price: "$120",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 10,
            image: "/iphone.webp",
            name: "I-phone",
            price: "$120",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 11,
            image: "/headphones.webp",
            name: "Headphones",
            price: "$120",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
        {
            id: 12,
            image: "/earbuds.webp",
            name: "Earbuds",
            price: "$120",
            count: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur nulla error quisquam natus voluptatem commodi esse, repudiandae quaerat culpa?"
        },
    ]
    return (
        <div className='products'>
            <div className="sub">
                {
                    products.map((item, index) => {
                        return (
                            <div key={index} className="product">
                                <div className="product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h2>{item.name}</h2>
                                <div className='counter'><p>-</p><p>{item.count}</p><p>+</p></div>
                                <p className='desc'>{item.description}</p>
                                <p className='price'>{item.price}</p>
                                <div className="btn">
                                    <button>Add to cart</button>
                                    <button onClick={() => setFeedbackForm(item.name)}>Provide feedback</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
