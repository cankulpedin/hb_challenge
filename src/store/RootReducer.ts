import { configureStore } from "@reduxjs/toolkit";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import connectionSlice from "./slices/connectionSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, connectionSlice);

const reduxStore = configureStore({
  reducer: {
    connection: persistedReducer,
  },
  middleware: (getDefaultMiddleware: CallableFunction) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
