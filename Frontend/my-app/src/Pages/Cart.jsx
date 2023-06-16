import React from 'react'
import styled from 'styled-components'

const Cart = () => {
    return (
        <Div>
            <div className='container'>
                <div className='total'>
                    <h3>Subtotal:{ }</h3>
                    <button className='btn'>CHECKOUT</button>
                </div>
                <div>
                <p style={{marginLeft:"0px"}}>Shipping, Tax & Coupons are applied on the next page.</p>
                </div>
                <div style={{height:"50px",width:"100%",border:"1px solid pink",display:"flex",alignItems:"center"}}>
                    <h4>IN CART {}</h4>
                </div>
                <hr />
                <div className='cartcontainer'>
                      <div className='productcontainer'>
                            <img src="https://th.bing.com/th/id/OIP.YWRq3bUojas8krMK6PfFAgHaLH?pid=ImgDet&w=197&h=295&c=7&dpr=1.5" alt="" />
                            <div style={{marginLeft:"10px"}}>
                                <h4>NAME</h4>
                                <p>Price</p>
                                <p>estimated dilivery</p>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button style={{backgroundColor:"white",borderColor:"white",color:"rgb(191,87,32)",border:"none"}}>Remove</button>
                            </div>
                      </div>
                </div>
                

            </div>

        </Div>
    )
}

export default Cart

const Div = styled.div`
height: 100vh;
width: 100%;
border: 1px solid red;
.container{
    height: 100vh;
    width:90%;
    border:1px solid pink;
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
        height: 200px;
        width: 100%;
        border:1px solid green;
        display: flex;
    }
}

    
`