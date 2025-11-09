import { configureStore } from "@reduxjs/toolkit";
import channelNameSlice from "./features/channelNameSlice"

export const store=configureStore({

    reducer:{
        channelName: channelNameSlice
    }

})