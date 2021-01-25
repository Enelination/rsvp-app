import React, { useContext } from 'react'
import GuestContext from '../context/guestContext/guestContext'

const Guest = ({guest}) => {
  const {removeGuest, updateGuest, editGuest,} = useContext(GuestContext)
  const { _id ,name,phone,dietary,isConfirmed} = guest

  const handleRemove =() =>{
    removeGuest(_id)
  }

  const handleIsConfirmed = () =>{
    updateGuest({...guest, isConfirmed: !isConfirmed})
  }
    return (
        <div className="guest-card">
        <div className="card-head">
          <div >
            <label className={`${isConfirmed && 'confirm'}`}>Confirmed
              <i className={`fas fa-check-square ${isConfirmed && 'confirm'}`}>
                  <input type="checkbox" onChange={handleIsConfirmed} /> </i>
            </label>
          </div>
          <div>
            <button title="Edit Guest" onClick={()=>editGuest(guest)}>
              <i className="fas fa-user-edit"  ></i></button>
            <button title="Remove Guest" onClick={handleRemove}><i className="fas fa-trash-alt remove"></i></button>
          </div>
        </div>
        <div className="card-body">
          <h2>{name}</h2>
          <span className={'badge ' + (dietary === 'Vegan' ? 'green' : dietary === 'Non-Veg' ? 'red' : 'seaGreen')}>{dietary}</span>
          <div className="contact">
            <i className="fas fa-phone-alt"></i>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    )
  }
export default Guest
