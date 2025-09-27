import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const counterSlice = createSlice({
    name:"counter",
    // ilkin baslangic deyeri
    initialState,
    // functionlari saxlayan bolme
    reducers:{
        increment : (state) =>{
            state.value += 1
        },
        decrement : (state) =>{
            if(state.value == 1) return 
            state.value -= 1
        },
        specailIncrement : (state,action) =>{
            state.value += action.payload
        }

    }
})

export const {increment,decrement, specailIncrement} = counterSlice.actions

export default counterSlice.reducer