import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductReducer/action";
import "../Product/Product.css"
const Product=()=>{
    // const [getdata,setgetdata]=useState([]);
    const {isLoading,products,isError}=useSelector((store)=>{
        return {
        isLoading:store.gameProductreducer.isLoading,
        products:store.gameProductreducer.products,
        isError:store.gameProductreducer.isError
        }
    });
    console.log()
    const dispatch=useDispatch();

   
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return <div>
        <br />
        <div></div>
        <div className="products">
            {isLoading?<h1>loading...</h1>:isError?<h1>something went wrong</h1>:products.map((item)=>{
                return <div key={item.id}>
                    <img src={item.avatar} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price}</p>
                    <br />
                    <br />
                    <button>START FREE TRIAL</button>
                </div>
            })}

        </div>

    </div>
}

export default Product