import { configureStore } from '@reduxjs/toolkit'
import banksaldoReducer from './banksaldo'

export const store = configureStore({
  reducer: {
    banksaldo: banksaldoReducer
  }
})
