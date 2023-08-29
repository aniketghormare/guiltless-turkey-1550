// import axios from "axios"
// import { GET_FAILURE, GET_PRODUCT_ID_SUCCESS, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

// export const getMovies=(query)=>(dispatch)=>{
//     dispatch({type:GETMOVIE_REQUEST})
//     axios.get(`http://localhost:8080/movie`,query)
//     .then((res)=>{
//         console.log(res.data)
//         dispatch({type:GET_SUCCESS,payload:res.data})
//     })
//     .catch((err)=>{
//         dispatch({type:GET_FAILURE})
//     })
// }
import axios from "axios";
import {
  GET_FAILURE_MOVIE,
  GET_REQUEST_MOVIE,
  GET_SUCCESS_MOVIE,
} from "./actionTypes";

export const getMovies = (query) => (dispatch) => {
  dispatch({ type: GET_REQUEST_MOVIE });
  axios
    .get("https://gamezy-borsejugal23.onrender.com/movies", query)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_SUCCESS_MOVIE, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE_MOVIE });
    });
};
