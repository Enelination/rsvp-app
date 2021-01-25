import React, { useContext, useRef } from 'react'
import GuestContext  from '../../context/guestContext/guestContext'

const GuestSearch = () => { 
  const { searchGuest, clearSearch} = useContext(GuestContext)
  const searchValue = useRef('')
  const handleChange = e =>{
    if(searchValue.current.value !== ''){
      searchGuest(e.target.value)
    }else{
      clearSearch()
    }
  }
    return (
        <div>
        <input  type="text" onChange={handleChange} placeholder="Search Guest by name..." className="search" />
        <i className="fas fa-search search-icon" />
      </div>
    )
  }

export default GuestSearch
