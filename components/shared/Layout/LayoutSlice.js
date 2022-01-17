import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const layoutAdapter = createEntityAdapter()


const initialState = layoutAdapter.getInitialState({
    browser: null
});

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