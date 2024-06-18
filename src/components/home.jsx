import React from "react";
import "../styles/Home.css"
import lipstickad from "../images/lipstickad.jpg";
import lipstick from "../images/lipstick.jpg";
import nailpolish from "../images/nailpolish.jpg";
import hyuebeauty from "../images/hyuebeauty.jpg";
import nailpolishhome from "../images/nailpolishhome.jpg";
import ImageSlider from "./ImageSlider";
import Header from "./header";
import { Link } from "react-router-dom";
function Home() {
    const image1=lipstickad;
    const image2=lipstick;
    const image3=nailpolish;
    const images=[image1,image2,image3];
        return (
            <div className="main">
                 <Header/>
                 <div>
                    <ImageSlider images={images}/> 
                 </div>
                 <div>
                    <Link to="/hyue-nailpolish"><button className="shop homeshop" type="submit">SHOP NOW</button></Link><br/><br/><br/>
                 </div>
                 <div className="benefits">
                    <div>
                        <p className="beauty">SKIN FIRST BEAUTY</p>
                        <p className="description">With toxin-free, clean ingredients and hydrating <br/>
                            formulations, we prioritise  your skin first.
                        </p>
                    </div>
                    <div>
                        <p className="beauty">INTERNATIONAL FORMULATIONS</p>
                        <p className="description">Get ready to glow with our range of  skin-safe<br/>
                             and internationally formulated skincare products.</p>
                    </div>
                    <div>
                        <p className="beauty">UNIVERSALLY FLATERING SHADES</p>
                        <p className="description">Experience the power of  universally flatering<br/>
                             shades that suit every skin tone. Enhance your <br/>
                             beauty effortlessly.</p>
                    </div>
                 </div><br/><br/>
                 <div>
                    <img src={hyuebeauty} style={{cursor:"default",width:"100%",height:"500px"}} alt="image not found"/>
                 </div>
                 <div className="hydramatte">
                    <p className="hydra_heading">HYDRAMATTE™ LIQUID LIPSTICK</p>
                    <p className="hydra_paragraph">Intense Hydration<br/>
                        Long Lasting Matte Finish<br/>
                        One Stroke Application</p>
                    <Link to="/hyue-lipsticks"><button className="shop" style={{position:"relative",top:"-10px"}}>SHOP NOW</button></Link>
                 </div><br/><br/>
                 <div className="hyue_nailpolish"> 
                    <div className="nailpolish_left">
                        <img src={nailpolishhome} style={{width:"100%",height:"560px",cursor:"default"}} alt="image not found"/>
                    </div>
                    <div className="nailpolish_right">
                        <p className="nail_heading">HYUE GEL FX NAIL <br/>PAINT</p>
                        <p className="nail_paragraph">Discover a stunning range of high-quality, long-lasting nail paints
                        for the perfect salon-like manicure.</p><br/>
                        <button className="shop">SHOP NOW</button>
                    </div>
                </div><br/><br/>
                <div>

                </div>
        </div>
        )
}

export default Home;
