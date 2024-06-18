import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
        products:[],
        status:"idle",
        error:null
}
export const fetchHyueLipsticks= createAsyncThunk("data/HyueLipstick",async()=>
{
    try{
            const response= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick");
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

const HyueLipstickSlice=createSlice(
    {
    name:"HyueLipstick",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchHyueLipsticks.pending,(state)=>
            {
                    state.status="loading";
            })
            .addCase(fetchHyueLipsticks.fulfilled,(state,action)=>
            {
                state.status="succeeded";
                state.products=action.payload;
            })
            .addCase(fetchHyueLipsticks.rejected,(state,action)=>
                {
                    state.status="failed";
                    state.error=action.error.message;
                })
    }})

    export default HyueLipstickSlice.reducer;