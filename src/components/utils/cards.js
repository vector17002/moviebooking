import '../css/card.css';
import React from 'react';
import { useState } from 'react';

const Card =(props)=>{

  const [isActive, setIsActive] = useState(false);
 const wish = ()=>{

  setIsActive(current => !current);
}
  return (
  <div className="card">
    <img src={props.imgsrc} alt="default" className="card_img"/>
    <div className="card_info">
        <span className="card_category">Rating:{props.rating}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={'booking'} >
            <button>Book Now</button>
        </a>
  <button className='wishlist' onClick={wish} style={{backgroundColor: isActive ? 'red' : 'white',color: isActive ?  'white' :'black'}} ><i className="uil uil-heart"></i></button>
    </div>
 </div>)
}
export default Card;