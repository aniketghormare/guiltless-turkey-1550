import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';

//import data from "../db"
import Carousel1 from 'better-react-carousel'
import { useDispatch, useSelector } from 'react-redux';
import { MOVIES_SUCC } from '../Redux/ProductReducer/actionTypes';
const Movies = () => {
  const [data, setdata] = useState([])
  const dispatch=useDispatch()
  const moviedata=useSelector((store)=>{
   return store.ProductReducer.Movies
  })
  const items = [
    { id: 1, title: 'item #1',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/20392.jpg" },
    { id: 2, title: 'item #2',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5039862.jpg"  },
    { id: 3, title: 'item #3',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5040064.jpg"  },
    { id: 4, title: 'item #4',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5039866.jpg"  },
    { id: 5, title: 'item #5' ,img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/20394.jpg" }
  ]
  const token =  JSON.parse(localStorage.getItem("token"))
  let column = 5
  const getgames = () => {
    fetch("http://localhost:4500/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then((res) => {
      return res.json()
    }).then((data) => {
      dispatch({type:MOVIES_SUCC,payload:data.movie})
      setdata(data.movie)
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getgames()
  }, [])
  const handlecart=(el)=>{
    
    console.log(el)
    fetch("http://localhost:4500/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body:JSON.stringify(el)
    }).then((res) => {
      return res.json()
    }).then((data) => {
     // dispatch({type:CART_SUCC})
      //setdata(data.cart)
      console.log(data)
      console.log("added cart")
      alert("Product Added To The Cart")
    }).catch((err) => {
      console.log(err)
    })
  }
  console.log(data)
  return (
    <Div>
      <h1>Movies</h1>
      <div className='cordiv'>
        <Carousel className='carousel' breakPoints={items} style={{ backgroundColor: "rgb(249,249,249" }}>
          {items.map(item => <div className='initdiccorosal' key={item.id}>
            <img width="100%"alt="img"  height="100%" src={item.img} />
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
          <div style={{}}>
            {
              <Carousel1 cols={column} rows={1} loop>
                {
                  moviedata.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%"alt="img"  height="260px" src={el.Poster} />
                        <h4>{el.Title.substring(0,70)}</h4>
                        <p>{el.Year}</p>
                        <div style={{ display: "flex", height: "auto", width: "80%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button onClick={()=>handlecart(el)} style={{ display: "flex", width: "100%", margin: "auto", borderRadius: "5px", justifyContent: "space-between", backgroundColor: "rgb(255,75,43)",borderColor:"rgb(255,75,43)", color: "white" }}>
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
          <div style={{}}>
            {
              <Carousel1 cols={column} rows={1} loop>
                {
                  moviedata.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%"alt="img"  height="260px" src={el.Poster} />
                        <h4>{el.Title.substring(0,70)}</h4>
                        <p>{el.Year}</p>
                        <div style={{ display: "flex", height: "auto", width: "80%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button style={{ display: "flex", width: "100%", margin: "auto", borderRadius: "5px", justifyContent: "space-between", backgroundColor: "rgb(255,75,43)",borderColor:"rgb(255,75,43)", color: "white" }}>
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
          <div style={{}}>
            {
              <Carousel1 cols={column} rows={1} loop>
                {
                  moviedata.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%"alt="img" height="260px" src={el.Poster} />
                        <h4>{el.Title.substring(0,70)}</h4>
                        <p>{el.Year}</p>
                        <div style={{ display: "flex", height: "auto", width: "80%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button style={{ display: "flex", width: "100%", margin: "auto", borderRadius: "5px", justifyContent: "space-between",  backgroundColor: "rgb(255,75,43)",borderColor:"rgb(255,75,43)", color: "white" }}>
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
          <div style={{}}>
            {
              <Carousel1 cols={column} rows={1} loop>
                {
                  moviedata.map((el, index) => {
                    return (
                      <Carousel1.Item style={{ height: "100%", width: "200px" }}>
                        <img width="80%"alt="img"  height="260px" src={el.Poster} />
                        <h4>{el.Title.substring(0,70)}</h4>
                        <p>{el.Year}</p>
                        <div style={{ display: "flex", height: "auto", width: "80%", border: "1px solid rgb(249,249,249)", margin: "auto" }}>
                          <button style={{ display: "flex", width: "100%", margin: "auto", borderRadius: "5px", justifyContent: "space-between", backgroundColor: "rgb(255,75,43)",borderColor:"rgb(255,75,43)", color: "white" }}>
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

export default Movies


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