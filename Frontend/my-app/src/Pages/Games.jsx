import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
import data from "../db"
import Carousel1 from 'better-react-carousel'
import {useDispatch, useSelector} from "react-redux"
import { setcart } from '../Redux/ProductReducer/action';
const Games = () => {
   
  const items = [
    { id: 1, title: 'item #1', img: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5038976.png" },
    { id: 2, title: 'item #2', img: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5035299.png" },
    { id: 3, title: 'item #3', img: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5021895.jpg" },
    { id: 4, title: 'item #4', img: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5038534.jpg" },
    { id: 5, title: 'item #5', img: "https://cms2.gameflycdn.com/merchandising/live/Design/default/960w/20386.jpg" }
  ]

  

   let column=4

  
  return (
    <Div>
      <h1>Games</h1>
      <div className='cordiv'>
        <Carousel className='carousel' breakPoints={items} style={{ backgroundColor: "rgb(249,249,249" }}>
          {items.map(item => <div className='initdiccorosal' key={item.id}>
            <img width="100%" height="100%" src={item.img} />
          </div>)}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <div className='products'>
        <div style={{ height: "10%", width: "100%" }}>
          <h1>Featured</h1>
        </div>
        <div style={{ height: "90%", width: "100%", border: "1px solid rgb(249,249,249)" }}>
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            {
              <Carousel1 cols={column} rows={1} gap={0} loop>
                {
                  data.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%" height="350px" src={el.avatar} />
                        {/* <h4>{el.name}</h4> */}
                        {/* <p>{el.genre}</p> */}
                        <div style={{ height: "auto", width: "100%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button  style={{ display: "flex", margin: "auto", width: "70%", justifyContent: "space-between", backgroundColor: "rgb(86,118,169", color: "white" }}>
                            <h4>See More</h4>
                            <h4>${el.price}</h4>
                          </button>
                        </div>

                      </Carousel1.Item>
                    )
                  })
                }


              </Carousel1>
            }
          </div>
        </div>


      </div>
      <br />
      <br />
      <br />
      <div className='products'>
        <div style={{ height: "10%", width: "100%" }}>
          <h1>Most Popular</h1>
        </div>
        <div style={{ height: "90%", width: "100%", border: "1px solid rgb(249,249,249)" }}>
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            {
              <Carousel1 cols={4} rows={1} gap={0} loop>
                {
                  data.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%" height="250px" src={el.avatar} />
                        {/* <h4>{el.name}</h4> */}
                        {/* <p>{el.genre}</p> */}
                        <div style={{ height: "auto", width: "100%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button style={{ display: "flex", margin: "auto", width: "70%", justifyContent: "space-between", backgroundColor: "rgb(86,118,169", color: "white" }}>
                            <h4>See More</h4>
                            <h4>${el.price}</h4>
                          </button>
                        </div>

                      </Carousel1.Item>
                    )
                  })
                }


              </Carousel1>
            }
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />

      <div className='products'>
        <div style={{ height: "10%", width: "100%" }}>
          <h1>New Releases</h1>
        </div>
        <div style={{ height: "90%", width: "100%", border: "1px solid rgb(249,249,249)" }}>
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            {
              <Carousel1 cols={4} rows={1} gap={0} loop>
                {
                  data.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%" height="250px" src={el.avatar} />
                        {/* <h4>{el.name}</h4> */}
                        {/* <p>{el.genre}</p> */}
                        <div style={{ height: "auto", width: "100%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button style={{ display: "flex", margin: "auto", width: "70%", justifyContent: "space-between", backgroundColor: "rgb(86,118,169", color: "white" }}>
                            <h4>See More</h4>
                            <h4>${el.price}</h4>
                          </button>
                        </div>

                      </Carousel1.Item>
                    )
                  })
                }


              </Carousel1>
            }
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />

      <div className='products'>
        <div style={{ height: "10%", width: "100%" }}>
          <h1>Coming Soon</h1>
        </div>


        <div style={{ height: "90%", width: "100%", border: "1px solid rgb(249,249,249)" }}>
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            {
              <Carousel1 cols={4} rows={1} gap={0} loop>
                {
                  data.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%" height="250px" src={el.avatar} />
                        {/* <h4>{el.name}</h4> */}
                        {/* <p>{el.genre}</p> */}
                        <div style={{ height: "20px", width: "100%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button style={{ display: "flex", margin: "auto", width: "70%", justifyContent: "space-between", backgroundColor: "rgb(86,118,169", color: "white" }}>
                            <h4>See More</h4>
                            <h4>${el.price}</h4>
                          </button>
                        </div>

                      </Carousel1.Item>
                    )
                  })
                }


              </Carousel1>
            }
          </div>
        </div>
      </div>



    </Div>
  )
}

export default Games


const Div = styled.div`
    height: auto;
    width: 100%;
    border: 1px solid rgb(249,249,249);
    margin: 0;
    padding: 0;
    background-color: rgb(249,249,249);

   .cordiv{
    height: 400px;
    width: 100%;
    /* border: 1px solid pink; */
    margin: auto;
    display: flex;
    align-items: center;
    background-color: white;
    color: white;
   }
   .carousel{
    height: 100%;
    width: 100%;
   }
   .initdiccorosal{
    height: 100%;
    width: 100%;
     align-items: center;
   }
    .products{
      height:auto;
      width: 100%;
      border:1px solid rgb(249,249,249)

    }

    @media only screen and (max-width: 600px) and (min-width: 400px)  {
      
    }
`