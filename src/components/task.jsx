import React from "react";
import { useSelector } from "react-redux";

function Task()
{
    const countOfProducts=useSelector(state=>state.hyueLipstick.products.length);
    return(
    <div className="task">
            <p>Filter</p>
            <p>Sort by:</p>
            <select name="sortProducts">
                  <option value="Featured" >Featured</option>
                  <option value="BestSelling" >Best Selling</option>
                  <option value="ascending" >Alphabetically,A-Z</option>
                  <option value="descending" >Alphabetically,Z-A</option>
                  <option value="lowToHigh" >Price,low to high</option>
                  <option value="highToLow" >Price,high to low</option>
                  <option value="oldToNew" >Date,old to new</option>
                  <option value="newToOld" >Date,new to old</option>
            </select>
            <p>{countOfProducts}  products</p>
        </div>
    )
}

export default Task;