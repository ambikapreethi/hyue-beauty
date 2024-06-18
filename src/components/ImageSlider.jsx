import { current } from "@reduxjs/toolkit";
import React,{useState} from "react";
import { Link } from "react-router-dom";

function ImageSlider({images}) {
        const[currentImageIndex,setcurrentImageIndex]=useState(0);
        const handleRadioChange=(index)=>
            {
                setcurrentImageIndex(index);
            }
        const goToPreviousPage=()=>
            {
                if(currentImageIndex>0)
                    {
                        setcurrentImageIndex(currentImageIndex-1);
                    }
            }
        const goToNextPage=()=>
            {
                if(currentImageIndex<images.length-1)
                    {
                        setcurrentImageIndex(currentImageIndex+1);
                    }
            }
  return (
    <div>
          <div class="image-container">
            <Link to="/hyue-lipsticks"><img className="hyueImage" src={images[currentImageIndex]} alt="image not found"/></Link><br/>
            <button type="button" onClick={goToPreviousPage} disabled={currentImageIndex===0}> &lt;</button>
                {images.map((image,index)=>
                (
                        <input type="radio"
                                key="index"
                                name="images"
                                className="radioBtn"
                                value={index}
                                checked={currentImageIndex===index}
                                onChange={()=>handleRadioChange(index)}/>
            
                ))}
                <button type="button" onClick={goToNextPage} disabled={currentImageIndex===(images.length-1)}> &gt;</button>
            </div>
             {currentImageIndex === 0 &&
                         (<div><p className="hyue1" >HYUE</p>
                             <div className="inner_image">
                                <p>INTERNATIONAL FORMULATIONS
                                <span><input type="radio" className="radio"/></span>
                                <span className="inside_image">SKIN FIRST BEAUTY</span>
                                <span><input type="radio" className="radio"/></span>
                                <span className="inside_image" > UNIVERSALLY FLATTERING SHADES</span></p>
                                </div>
                         </div>)}
             {currentImageIndex === 1 && (<div p className="hyue2" >
                        <p style={{color:"white",fontSize:"350%"}}>HYUE <br/>FOR <br/><span style={{fontStyle:"italic"}}> 
                            you</span></p>
                        {/* <p style={{fontSize:"30px",marginTop:"100px"}}>EXPLORE NOW</p>
                        <p style={{color:"black",fontSize:"20px",letterSpacing:"1px"}}>HYDRAMATTE<sup>TM </sup>LIQUID LIPSTICK</p> */}
                    </div>)}
            {currentImageIndex === 2 && (<div className="hyue3">
                    <p>10% OFF <br/><span class="site">SITEWIDE</span></p>
                    <button type="button" style={{position:"relative",top:"-460px",left:"-300px",backgroundColor:"#ccc",
                        color:"white",width:"180px",fontSize:"20px"}}>SHOP NOW</button>
                            <p style={{position:"relative",color:"white",top:"-450px",left:"-300px"}}>COUPON CODE: HYUEFORYOU</p>
                    </div>)}  
           
        </div>
        )
}

export default ImageSlider;
