import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { CART_SUCC } from '../Redux/ProductReducer/actionTypes'
import { useState } from 'react'

const Cart = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkMWVhYzc2Y2I4OTg1MzU2YWNjODkiLCJ1c2VyIjoiQW5pa2V0IiwiaWF0IjoxNjg3MDAzNzMyLCJleHAiOjE2ODc2MDg1MzJ9.6b5pIvD-6qYORF9JQ9zE853_Ubj9pHS7rHksAhiBwFY"
    const dispatch = useDispatch()
    let [count,setcount]=useState(1)
    
    const cartdata = useSelector((store) => {
        return store.ProductReducer.CART
    })
    const [total,settotal]=useState(0)
    const getcart = () => {
        fetch("http://localhost:4500/cart", {
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

    const totalfun=()=>{
        let finalsum=0;
        for(let i=0;i<=cartdata.length-1;i++){
             finalsum+= (Number(cartdata[i].price)* Number(count))

        }
        settotal(finalsum)
       
        
        
    }

    useEffect(() => {
        getcart()
    }, [])
    useEffect(() => {
        totalfun()
    }, [count])
    const handlechnage=(val)=>{
        setcount(+val)
       
    }
    console.log(cartdata)
    return (
        <Div>
            <div className='container'>
                <div className='total'>
                    <h3>Subtotal:${total}</h3>
                    <button className='btn'>CHECKOUT</button>
                </div>
                <div>
                    <p style={{ marginLeft: "0px" }}>Shipping, Tax & Coupons are applied on the next page.</p>
                </div>
                <div style={{ height: "50px", width: "100%", border: "1px solid rgb(249,249,249)", display: "flex", alignItems: "center" }}>
                    <h4>IN CART { }</h4>
                </div>
                <hr />
                <div className='cartcontainer'>
                    {
                        cartdata.map((el, index) => {
                            return (
                                <>
                                <div className='productcontainer'>
                                    <div style={{height:"250px",width:"20%",marginTop:"20px"}}>
                                        <img width="60%" height="200px" src={el.avatar} alt="" />
                                    </div>

                                    <div style={{ marginLeft: "10px", textJustify: "auto" ,width:"80%",textAlign:"justify"}}>
                                        <h4>{el.category}</h4>
                                        <p>{el.price}</p>
                                        <p>Estimated dilivery 2 days</p>
                                        <select name="" id=""  onChange={(e)=>handlechnage(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button style={{ backgroundColor: "rgb(249,249,249)", borderColor: "white", color: "rgb(191,87,32)", border: "none" }}>Remove</button>
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