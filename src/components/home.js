import { useState,useEffect } from 'react';
import Card from './utils/cards';
import './css/home.css'
import { API_CLIENT } from './apiclient';
const ncard=(val)=>{
    return(
        <Card
            imgsrc={val.imgsrc}
            sname={val.sname}
            rating={val.rating}
         />
    )
}


const Home=()=>{
    const [data , setData] = useState([]);
    const[updata,setUpdata]=useState([]);
    useEffect(()=>{
        const promise = API_CLIENT.get(process.env.REACT_APP_API_MOVIES);
        promise.then(result=>{
            setData(result.data.Sdata);
            setUpdata(result.data.updata);
        }).catch(err=>{
            alert("Movie server problem");
        })
    },[]);
 
    return(
    <>
    <div className='heading' id='ho'> Recommended Movies</div>
    
    <div className='home' >{data.map(ncard)}
    </div>
    <div className='heading' id='ho'>Upcoming Movies</div>
      <div className='home' >{updata.map(ncard)}
    </div>
    </>
    );
}
export default Home;