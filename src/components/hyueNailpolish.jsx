import React ,{useEffect}from "react";
import Header from "./header";
import "../styles/hyueNailpolish.css";
import { useSelector,useDispatch } from "react-redux";
import { fetchHyueNailpolish } from "../reducer/hyueNailpolishSlice";
import Task from "./task";

function HyueNailpolish()
{
   const nailPolish =useSelector(state=>state.hyueNailpolish.products);
   console.log(useSelector(state=>state.hyueNailpolish.products));
   const status=useSelector(state=>state.hyueNailpolish.status);
   const error=useSelector(state=>state.hyueNailpolish.error);
   const dispatch=useDispatch();
   useEffect(()=>
    {
        dispatch(fetchHyueNailpolish());
    },[dispatch])
   if(status === "loading")
    {
      return  <div>loading...</div>;
    }
    if(status === "failed")
      {
        return <div>Error: {error}</div>;
      }
    return(
       <div>
            <Header/>
            <div className="treat"><p>Treat Yourself! B2G1 Offer -- Shop Now! --&gt;</p></div>
            <p className="productsHeading">Products</p>
            <Task/>
            <div>
              {nailPolish.map((item,index)=>
                        (
                              <div className="nailpolish" key="index">
                                    <img src={item.image_link} alt="image not found" width="260px" height="180px"/>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                              </div>
                        )
                  )}
            </div>
      </div>
    )
}

export default HyueNailpolish;