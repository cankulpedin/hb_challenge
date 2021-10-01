import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface connection {
  name: string;
  url: string;
  voteCount: number;
}

export interface connectionsState {
  connections: connection[];
}

const INITIAL_STATE = {
  connections: [],
};

const connectionSlice = createSlice({
  name: "connection",
  initialState: INITIAL_STATE,
  reducers: {
    addUser(state, action: PayloadAction<connection>) {
      state.connections = [...state.connections, action.payload];
    },
  },
});

const { actions, reducer } = connectionSlice;

export const {} = actions;

export default reducer;
