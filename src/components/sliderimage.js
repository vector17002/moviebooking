import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import {API_CLIENT} from './apiclient.js';
const Slider=()=>{
    const[images,setImages]=useState([]);
    useEffect(()=>{
      const promise = API_CLIENT.get(process.env.REACT_APP_API_IMAGES);
      promise.then(result=>{
          setImages(result.data.images);
      }).catch(err=>{
          alert("Slider server problem");
      })
  },[]);
      return(<SimpleImageSlider
      width={'95%'}
      height={'55vh'}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      startIndex={2}
      useGPURender={true}
    />);
}
export default Slider;