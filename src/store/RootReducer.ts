import { configureStore } from "@reduxjs/toolkit";
import connectionSlice from "./slices/connectionSlice";

const reduxStore = configureStore({
  reducer: {
    connection: connectionSlice,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
