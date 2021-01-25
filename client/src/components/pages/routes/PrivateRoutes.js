import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../../../context/authContext/authContext'


const PrivateRoutes = ({component :Component, ...rest}) => {
    const {userAuth} = useContext(AuthContext)
    return (
        <Route 
        {...rest}
        render={props => !userAuth ? (<Redirect to='/login' />) : (<Component {...props} />)}
        
        />
    )
}

export default PrivateRoutes
