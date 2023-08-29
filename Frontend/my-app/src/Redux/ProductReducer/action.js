
import axios from "axios"
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

export const getProducts=(query)=>(dispatch)=>{
    dispatch({type:GET_REQUEST})
    axios.get(`https://gamezy-borsejugal23.onrender.com/games`,query)
    .then((res)=>{
        console.log(res)
        dispatch({type:GET_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_FAILURE})
    })
}


