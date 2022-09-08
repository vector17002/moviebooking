import '../css/card.css';

const Flap =(props)=>{
return (
  <div className="card">
    <img src={props.imgsrc} alt="default" className="card_img"/>
    <div className="card_info">
        <span className="card_category">Rating:{props.rating}</span>
        <h3 className="card_title">{props.sname}</h3>
        <h3 className='c'></h3>
        <div className='card_discription'>{props.location}</div>
    </div>
 </div>)
}
export default Flap;