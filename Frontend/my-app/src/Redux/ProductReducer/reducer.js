import { GET_FAILURE, GET_PRODUCT_ID_SUCCESS, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

const initialstate={
    isLoading:false,
    isError:false,
    products:[],
    // singleproduct:[]
}
export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
      case GET_REQUEST:{
        return{...state,isLoading:true,isError:false}
      }
      case GET_SUCCESS:{
        return {...state,isLoading:false,isError:false,products:payload}
      }
      case GET_FAILURE:{
        return {...state,isLoading:false,isError:true}
      }
      // case GET_PRODUCT_ID_SUCCESS:{
      //   return{...state,isLoading:false,singleproduct:payload}
      // }
      default: return state
    }
}