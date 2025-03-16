import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    text: "Love"
}

export const secondSlice = createSlice({
    name: "second",
    initialState: initialValue,
    reducers: {
        addLetterS: (state) => {
            state.text +="s"
        },

        reset: (state) => {
            state.text = ""
        },
        insert: (state, action) => {
            state.text = action.payload
        }
    }
})

export const {addLetterS, reset, insert} = secondSlice.actions
export default secondSlice.reducer