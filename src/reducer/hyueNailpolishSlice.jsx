import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
        products:[],
        status:"idle",
        error:null
}
export const fetchHyueNailpolish= createAsyncThunk("data/HyueNailpolish",async()=>
{
    try{
            const response= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=nail_polish");
            if(!response.ok)
                {
                    throw new Error("failed to fetch data");
                }
            return response.json();
        }
    catch(error)
    {
        throw error;
    }
})

const HyueNailpolishSlice=createSlice(
    {
    name:"HyueNailpolish",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchHyueNailpolish.pending,(state)=>
            {
                    state.status="loading";
            })
            .addCase(fetchHyueNailpolish.fulfilled,(state,action)=>
            {
                state.status="succeeded";
                state.products=action.payload;
                console.log(state.products);
            })
            .addCase(fetchHyueNailpolish.rejected,(state,action)=>
                {
                    state.status="failed";
                    state.error=action.error.message;
                })
    }})

    export default HyueNailpolishSlice.reducer;