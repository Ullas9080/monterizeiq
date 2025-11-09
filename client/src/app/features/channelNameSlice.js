import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChannelName = createAsyncThunk(
  "youTube/FetchchannelName",
  async (channelName) => {
    const res = await axios.get(
      `http://192.168.1.5:3000/YoutubeV3API/channelList/${channelName}`
    );

    return res.data;
  }
);

const channelNameSlice = createSlice({
  name: "channelName",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelName.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChannelName.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChannelName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default channelNameSlice.reducer;