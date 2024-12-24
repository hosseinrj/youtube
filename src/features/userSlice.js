import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    selecUser: (state) => state.user,
  },
});

export const { setUser, selecUser } = userSlice.actions;

export default userSlice.reducer;
