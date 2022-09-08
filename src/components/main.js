import Slider from './sliderimage';
import Home from './home';
import Navbar from './nav';
import Theatres from './theatres';
const Main=()=>{
    return(
        <>
        <Navbar/>
        <div className='slider' id='slider'>
         <Slider/>
        </div>
        <Home/>
        <Theatres/>
        </>
    );

}
export default Main;