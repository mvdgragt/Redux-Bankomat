import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  saldo: 1000
}

export const banksaldoSlice = createSlice({
  name: 'banksaldo',
  initialState,
  reducers: {
    decrementByAmount: (state, action) => {
      state.saldo += action.payload
    },
    changeByAmount: (state, action) => {
      state.saldo += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeByAmount } = banksaldoSlice.actions

export default banksaldoSlice.reducer
