import Flap from './utils/cardm';

import './css/theatre.css'
import { useEffect, useState } from 'react';
import { API_CLIENT } from './apiclient';
const nlap=(val)=>{
  return(
    <Flap
          imgsrc={val.link}
            sname={val.sname}
            rating={val.rating}
            location={val.location}

    />
  );
}
const Theatres=()=>{
  const[theatre,setTheatre]=useState([]);
  useEffect(()=>{
    const promise=API_CLIENT.get(process.env.REACT_APP_API_THEATRE);
    promise.then(result=>{
       setTheatre(result.data.Theatres)
  }).catch(err=>{
      alert("Theatre server problem");
  })
},[]);
  

    return(
        <> 
        <div className='heading' id='th'>Cinemas</div>
       <span className='discription'>These are some best rated cinemas near you</span> 
        <div id='theatre' >
           {theatre.map(nlap)}
        </div>
    </>
    );
}
export default Theatres;