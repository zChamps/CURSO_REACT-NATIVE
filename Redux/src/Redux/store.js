import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Counter/CounterSlice'



// Aqui é onde ficará armazenado os estados pelo redux
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})