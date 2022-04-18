import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
  }
  
  export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
      setUserData: (state, {payload}) => {
        state.data = payload;
      },
    },
  })
  
  export const { setUserData } = userDataSlice.actions
  
  export default userDataSlice.reducer