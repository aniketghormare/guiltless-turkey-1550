import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
const Movies = () => {
  const items = [
    { id: 1, title: 'item #1',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/20392.jpg" },
    { id: 2, title: 'item #2',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5039862.jpg"  },
    { id: 3, title: 'item #3',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5040064.jpg"  },
    { id: 4, title: 'item #4',img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5039866.jpg"  },
    { id: 5, title: 'item #5' ,img:"https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/20394.jpg" }
  ]
  return (
    <Div>  
      <h1>Movies</h1>
      <div className='cordiv'>
        <Carousel className='carousel' breakPoints={items}>
          {items.map(item => <div className='initdiccorosal' key={item.id}>
            <img width="100%" height="100%" src={item.img}/>
          </div>)}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <div className='products'>
        <h1>Featured</h1>
      </div>
      <br />
      <br />
      <br />
      <div className='products'>
      <h1>Most Popular</h1>
      </div>
      <br />
      <br />
      <br />

      <div className='products'>
      <h1>New Releases</h1>
      </div>
      <br />
      <br />
      <br />

      <div className='products'>
      <h1>Coming Soon</h1>
      </div>



    </Div>
  )
}

export default Movies


const Div = styled.div`
    height: auto;
    width: 100%;
    border: 1px solid red;
    margin: 0;
    padding: 0;

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
      height:300px;
      width: 100%;
      border:1px solid red

    }
`