import { useState } from 'react';
import './css/booking.css'
import { ReactComponent as IMG } from './utils/movie-night-animate.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const Book=()=>{

    const[seats,setSeats]=useState(1);
    const[amount,setAmount]=useState(100);
    const[type,setType]=useState('');
    const[xamount,setXamount]=useState(0);
    const[t,setT]=useState('')
    const[selectDate,setSelectedDate]=useState(null)
    const select=(e)=>{
        console.log('working')
        setType(e.target.innerHTML);
        set(type);
   
        }
        const time=(e)=>{
          setT(e.target.innerHTML);
        }
        const set=(type)=>{
           
             if(type==='3D')
             {setAmount(amount+25)
            setXamount(25)}
            else if(type==='IMAX2D'){
                
            setAmount(amount+50)
            setXamount(50)}
            else if(type==='IMAX3D'){
            setAmount(amount+75)
            setXamount(75);
        }

        }
    const minus=()=>{
        if(seats === 1)
        return;
        else
        setSeats(seats-1);
        setAmount(amount-100-xamount);
    }
    const plus=()=>{
       setSeats(seats+1);
        setAmount(amount+100+xamount);
        
    }
    
    return(<>

    <div className='outer'>
    <IMG/>
     <div className="container">
     <h2>Ticket booking portal</h2>
     
      <span className='date'>
      <h3 className='bookh3'>Date:</h3>
      
      <DatePicker
        selected={selectDate}
        onChange={date=>setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
          
        />
      </span>
      
      <input placeholder="Enter name of Cinema" size={40} className='input'></input>
      <h3 className='bookh3'>Choose timings:{t}</h3>
     <span> 
     <button className='btnbook' onClick={time}>11:20AM</button>
      <button className='btnbook' onClick={time}>4:00PM</button> 
      <button className='btnbook' onClick={time}>7:30PM</button></span>
      <h3 className='bookh3'> Select Format:{type}</h3>
      <span> 
      <button className='btnbook' >2D</button>
      <button className='btnbook' onClick={select} >3D</button> 
      <button className='btnbook' onClick={select}>IMAX2D</button> 
      <button className='btnbook' onClick={select}>IMAX3D</button> 
      </span>
      <h3 className='bookh3'>No. of seats:</h3>
      <span >
        <div className='available'>Seats available:{150-seats}</div>
        <button className='btnbook' onClick={minus}><i class="uil uil-minus"></i></button>
        <div className='taken'>{seats}</div>
        <button className='btnbook' onClick={plus}><i class="uil uil-plus"></i></button>
      </span>
      <div className='screen'>Amount : Rs{amount}</div>

      <span><a href='/'> <button className='btnbook'>Cancel</button></a><a href='/payment' target='blank'><button className='btnbook'>Payment</button></a></span>
 
     
     </div>
     </div>
    </>);
}
export default Book;