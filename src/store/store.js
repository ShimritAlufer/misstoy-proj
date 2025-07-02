import { toyReducer } from './toy.reducer.module'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    toyModule: toyReducer,
  },
})
