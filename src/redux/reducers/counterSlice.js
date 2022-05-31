import {createSlice} from '@reduxjs/toolkit'

const init = {
    value:0,
}

export const conunterSlice = createSlice({
    name:'counter',
    init,
    reducers:{
        increment:state=>{
            state.value+=1
        },
    }
})

export const {increment} = conunterSlice.actions;

export default conunterSlice.reducer;