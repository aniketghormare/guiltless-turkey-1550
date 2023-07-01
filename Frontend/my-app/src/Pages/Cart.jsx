import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { CART_SUCC, TOTAL_SUCC } from '../Redux/ProductReducer/actionTypes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
     const [cartrem,setcartremove]=useState(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const dispatch = useDispatch()
    const [val,setval]=useState(1)
    const navigate=useNavigate()
     let [count,setcount]=useState(0)
    const total=useSelector((store)=>{
        return store.ProductReducer.total
    })
    const cartdata = useSelector((store) => {
        return store.ProductReducer.CART
    })
    //const [total,settotal]=useState(0)
    const getcart = () => {
       
        fetch("https://aware-lime-caiman.cyclic.app/cart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data.msg)
            dispatch({ type: CART_SUCC, payload: data.msg })
           
        }).catch((err) => {
            console.log(err)
        })
    }
    const handlechnage=(val)=>{
        setval(+val)
    }
      const carttotal=()=>{
        let total=0
        for(let i=0;i<=cartdata.length-1;i++){
          total+= Number(cartdata[i].price * val)
        }
        console.log(total)
        localStorage.setItem("total",JSON.stringify(total))
        dispatch({type:TOTAL_SUCC,payload:total})
      }
  
    const cartremove= (el)=>{
        const {_id}=el
           console.log(el)
         fetch(`https://aware-lime-caiman.cyclic.app/cart/remove/${_id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
         }).then((res)=>{
            return res.json()
         }).then((data)=>{
            console.log(data)
            setcartremove(!cartrem)
            console.log("eleemet removed")
         }).catch((err)=>{
            console.log(err)
         })
    }
    useEffect(()=>{
        setcount(cartdata.length)
    },[count])
    useEffect(() => {
        getcart()
    }, [val,total,cartrem,count])
    useEffect(()=>{
        carttotal()
    },[val,count])
  
   const handlepayment=()=>{
    navigate("/payment")
   }
    
    console.log(cartdata)
    
   
    return (
        <Div>
            <div className='container'>
                <div className='total'>
                    <h3>Subtotal:${total}</h3>
                    <button onClick={handlepayment} className='btn'>CHECKOUT</button>
                </div>
                <div>
                    <p style={{ marginLeft: "0px" }}>Shipping, Tax & Coupons are applied on the next page.</p>
                </div>
                <div style={{ height: "50px", width: "100%", border: "1px solid rgb(249,249,249)", display: "flex", alignItems: "center" }}>
                    <h4>IN CART { count}</h4>
                </div>
                <hr />
                <div className='cartcontainer'>
                    {
                        cartdata.map((el, index) => {
                            return (
                                <>
                                <div className='productcontainer'>
                                    <div style={{height:"250px",width:"20%",marginTop:"20px"}}>
                                        {
                                            el.avatar?  <img width="60%" height="200px" src={el.avatar} alt="" />:<img width="60%" height="200px" src={el.Poster
                                            } alt="" />
                                        }
                                      
                                    </div>

                                    <div style={{ marginLeft: "10px", textJustify: "auto" ,width:"80%",textAlign:"justify"}}>
                                        {
                                           el.category? <h4>{el.category}</h4>:<h4>{el.Title}</h4>
                                        }
                                        
                                        <p>${el.price}</p>
                                        <p>Estimated dilivery 2 days</p>
                                        <select name="" id=""   onChange={(e)=>handlechnage(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button onClick={()=>cartremove(el)} style={{ backgroundColor: "rgb(249,249,249)", borderColor: "white", color: "rgb(191,87,32)", border: "none" }}>Remove</button>
                                    </div>
                                    
                                </div>
                               
                               <hr />
                               </>
                            )
                        })
                    }

                </div>


            </div>

        </Div>
    )
}

export default Cart

const Div = styled.div`
height: auto;
width: 100%;
border: 1px solid rgb(249,249,249);
background-color: rgb(249,249,249);
.container{
    height: auto;
    width:90%;
    border:1px solid rgb(249,249,249);
    margin: auto;

    .total{
        display: flex;
        justify-content: space-between;
    }
    .btn{
        height: 40px;
        width: auto;
        margin-top: 20px;
        background-color: rgb(191,87,32);
        color: white;
        border-color:rgb(191,87,32);
        border-radius: 5px;
    }
    .text{
        margin-left: 0px;
    }
    .productcontainer{
        height: 250px;
        width: 100%;
        border:1px solid rgb(249,249,249);
        display: flex;
    }
}

    
`