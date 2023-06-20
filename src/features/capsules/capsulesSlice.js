import { createSlice } from '@reduxjs/toolkit';

const capsulesSlice = createSlice({
  name: 'filters',
  initialState: {
    status: '',
    type: '',
    launchingDate: null,
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.type = action.payload;
    },
    setLaunchingDateFilter: (state, action) => {
      state.launchingDate = action.payload;
    },
    clearFilters: (state) => {
      state.status = '';
      state.type = '';
      state.launchingDate = null;
    },
  },
});

export const {
  setStatusFilter,
  setTypeFilter,
  setLaunchingDateFilter,
  clearFilters,
} = capsulesSlice.actions;

export default capsulesSlice.reducer;
