import React from 'react'
import styled from 'styled-components'

export const Collective = () => {
  return (
    <DIV>
        <div style={{height:"63px"}}>
            <h2>GameFly now sells consoles, controllers, games, and collectibles for gamers</h2>
        </div>
        <div>
        <div className="parent">
            <div className="child">
                <h3>New Games</h3>
                <img src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-new-games.png" alt="new games" />
                <button>Shop Now</button>
            </div>
            <div className="child">
                <h3>Controllers & Accessories</h3>
                <img src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-controllers.png" alt="new games" />
                <button>Shop Now</button>
            </div>
            <div className="child">
                <h3>Collectibles</h3>
                <img src="https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-collectibles.png" alt="new games" />
                <button>Shop Now</button>
            </div>
            <div className="child">
                <img style={{width:"240px",height:"120px"}} src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-shipping-light.png" alt="new games" />
                <p>We Rush Your Games To You <br />FREE Shipping</p>
            </div>
            <div className="child">
                <img style={{width:"240px",height:"120px"}} src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discs-light.png" alt="new games" />
                <p>Swap Games Anytime <br />Thousands To Choose From</p>
            </div>
            <div className="child">
                <img style={{width:"240px",height:"120px"}} src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discount-light.png" alt="new games" />
                <p>Keep The Games You Love <br /> With A Great Discount</p>
            </div>
            
        </div>
        </div>
            <div className='spl' style={{marginTop:"40px"}}>
                <span>RENT THOUSANDS OF GAMES & MOVIES <button>Start Free Trial</button> NO LATE FEES.  CANCEL ANYTIME.</span>
            </div>
            <div>
                <h4>Video Game Rentals & Used Video Games | GameFly</h4>
            </div>
            <div>
                <h5>GameFly is America’s go-to source for new and classic movie and video game rentals. With thousands of titles to choose from, you can rent films or new and used video games without worrying about any late fees. If you like your rented game or movie enough, you can even choose to keep it from us for a low, pre-owned price. Not happy with your rental? Send it back and we’ll rush your next movie or video game rental to your doorstep for free, so you can watch your flick or get your game on ASAP. Whether you play one of today’s hottest systems or enjoy the nostalgia of systems past, you’ll find all the best new and used video games at GameFly. Start your free trial today!</h5>
            </div>
    </DIV>
  )
}
const DIV = styled.div`
    height: 200vh;
    background-color: white;
    margin-top: 85vh;

    h2{
        padding-top:20px;
        font-size: 26px;
        font-weight: 600;
        line-height: 31px;
        text-align: center;
        background-color: #FFFFFF;
        color: #000000;
    }
    .parent h3{
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        background-color: #FFFFFF;
        color: #252525;
    }
    .parent img{
        height: 300px;
        width: 380px;
        max-width: 100%;
        text-align: center;
    }
    .parent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
}

.child {
  /* border: 1px solid red; */
  padding: 20px;
  text-align: center;
}
button{
    height: 35px;
    width: 220px;
    background-color: tomato;
    color: #FFFFFF;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}
p{
    font-size: 17px;
    text-align: center;
    background-color: #FFFFFF;
    color: #7D7D7D;
}
span{
    margin-top:100px;
    padding-left: 150px;
        font-size: 20px;
        font-weight: 700;
        line-height: 31px;
        text-align: center;
        background-color: #FFFFFF;
        color: #000000;
        justify-content: center;
}
button {
    width: 110px;
    color: #ffffff;
    background-color: tomato;
    margin-left: 15px;
    padding: 8px 16px;
    margin-right: 10px;
    font-size: 14px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
  .spl button{
    width: 249px;
        height: 56px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1.2px;
        background-color: tomato;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
  }
  h4{
    padding-left: 12px;
    margin-top: 40px;
    font-size: 17px;
    font-weight: 600;
    background-color: #FFFFFF;
    color: #000000;
  }
  h5{
    padding-left: 12px;
    font-weight: 200;
    margin-top: 10px;
    font-size: 14px;
    background-color: #FFFFFF;
    color: #817d7d;
  }
`