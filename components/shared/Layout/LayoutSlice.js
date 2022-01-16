import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        webbrowserSetup(state,action) {
            state.browser = action.payload
        }
    }
});


export default layoutSlice.reducer;

export const { 
    webbrowserSetup
} = layoutSlice.actions