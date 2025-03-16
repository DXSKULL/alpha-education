import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import secondReducer  from "./slices/secondSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        second: secondReducer
    }
})