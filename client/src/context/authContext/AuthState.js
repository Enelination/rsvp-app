import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setToken from '../../utils/setToken'
import { 
    SUCCESS_LOGIN,
    SUCCESS_REGISTER,
    FAIL_LOGIN,
    FAIL_REGISTER,
    SET_ERROR,
    CLEAR_ERROR,
    LOG_OUT,
    AUTH_ERROR,
    SET_USER 
} from '../types'

const AuthState = (props) => {
    const initialState={
        user:null,
        userAuth:null,
        errors:null
    }

    //get user
    const getUser = async () => {
        if(localStorage.token){
            setToken(localStorage.token)
          }
          try {
              const res = await axios.get('/auth')
              dispatch({
                  type:SET_USER,
                  payload:res.data
              })
          } catch (err) {
              dispatch({
                  type:AUTH_ERROR,
                  payload: err
              })
          }

          
    }
    
        //register user

        const registerUser = async  userData =>{
            const config ={
                header: {
                    'Content-Type':"application/json"
                }
            }

            try {
                const res = await axios.post('/register', userData, config)
                dispatch({
                    type:SUCCESS_REGISTER,
                    payload: res.data
                })
            } catch (err) {
                dispatch({
                    type:FAIL_REGISTER,
                    payload:err.response.data
                })
            }
        }
       
        
        //loginuser

        const loginUser = async userData =>{
            const config = {
                header: {
                    'Content-Type':"application/json"
                }
            }
            try {
                const res = await axios.post('/auth', userData, config)
                dispatch({
                    type:SUCCESS_LOGIN,
                    payload: res.data
                })
            } catch (err) {
                dispatch({
                    type:FAIL_LOGIN,
                    payload:err.response.data
                })
            }
            
        }
       
        const setError = err  =>{
            dispatch({
                type:SET_ERROR,
                payload:err
            })
        }

        
        const clearError = () =>{
            dispatch({
                type:CLEAR_ERROR
                
            })
        }

        //LOGOUT USER
        const logout=()=>{
            dispatch({
                type:LOG_OUT
            })
        }


    const [ state,dispatch] = useReducer(authReducer,initialState)
    return (
       <AuthContext.Provider value={{
           user: state.user,
           userAuth: state.userAuth,
           errors:state.errors,
           getUser,
           loginUser,
           logout,
           registerUser,
           setError,
           clearError
       }}>
           {props.children}
       </AuthContext.Provider>
    )
}

export default AuthState
