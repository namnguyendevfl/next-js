import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { layoutSlice } from '../components/shared/Layout'

const store = configureStore({
    reducer: {
        layout: layoutSlice
    }
})

export default store
