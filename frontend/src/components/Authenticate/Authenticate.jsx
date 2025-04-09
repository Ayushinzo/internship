import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Authenticate({ children }) {
    let selector = useSelector(state => state.login)
    let navigate = useNavigate()
    useEffect(() => {
        if(!selector){
            toast.info('Please login first')
            navigate('/')
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default Authenticate
