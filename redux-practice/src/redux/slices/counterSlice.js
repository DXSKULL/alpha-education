import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.num += 1
        },

        decrement: (state) => {
            state.num -= 1
        },

        incrementByAmount: (state, action) => {
            state.num += action.payload
        },

        decrementByAmount: (state, action) => {
            state.num -= action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions
export default counterSlice.reducer