import React ,{useEffect}from "react";
import Header from "./header";
import "../styles/hyueLipsticks.css";
import { useSelector,useDispatch } from "react-redux";
import { fetchHyueLipsticks } from "../reducer/hyueLipstickSlice";
import Task from "./task";

function HyueLipsticks() {
   const lipSticks =useSelector(state=>state.hyueLipstick.products);
   console.log(useSelector(state=>state.hyueLipstick.products));
   const status=useSelector(state=>state.hyueLipstick.status);
   const error=useSelector(state=>state.hyueLipstick.error);
   const dispatch=useDispatch();
   useEffect(()=>
    {
        dispatch(fetchHyueLipsticks());
    },[dispatch])
   if(status === "loading")
    {
      return  <div>loading...</div>;
    }
    if(status === "failed")
      {
        return <div>Error: {error}</div>;
      }
  
  return (
    <div>
        <Header/>
        <p className="heading">HYUE HydraMatte™ Liquid Lipstick</p>
        <Task/>
        <div>
                {lipSticks.map((item,index)=>
                      (
                             <div className="lipSticks" key="index">
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

export default HyueLipsticks;
