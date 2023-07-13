import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketURL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rokets/fetchRokets',
  async () => {
    try {
      const response = await axios.get(rocketURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);
const initialState = {
  rockets: {},
  isLoading: false,
  error: undefined,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
        console.log('Fullfilled with rockets: ', state.rockets);
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    reserveRockets: (state) => {
      console.log('Rocket State: ', state.rockets);
    },
  },

});
export const { reserveRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
