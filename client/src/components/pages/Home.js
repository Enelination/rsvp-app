import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authContext/authContext'
import GuestCounter from '../guests/GuestCounter'
import GuestFilter from '../guests/GuestFilter'
import Guests from '../guests/Guests'
import GuestSearch from '../guests/GuestSearch'
import GuestsForm from '../guests/GuestsForm'


const Home = () => {
    const {getUser} = useContext(AuthContext)
    useEffect(()=>{
        getUser()
    },[])
    return (
        <div className='app-container'>
            <div className='main'>
                <div className='filter'>
                    <GuestFilter/>
                    <GuestSearch/>
                </div>
            <GuestsForm/>
            <GuestCounter/>
            
            </div>
            <Guests/>
        </div>
    )
}

export default Home
