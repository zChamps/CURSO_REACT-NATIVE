import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Counter/CounterSlice'



// Aqui é onde ficará armazenado os estados pelo redux
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
})