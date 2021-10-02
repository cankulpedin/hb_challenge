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
  connections: [
    {
      name: "reddit",
      url: "https://www.reddit.com",
      voteCount: 0,
    },
    {
      name: "amazon",
      url: "https://www.amazon.com",
      voteCount: 0,
    },
  ],
};

const connectionSlice = createSlice({
  name: "connection",
  initialState: INITIAL_STATE,
  reducers: {
    addConnection(state, action: PayloadAction<connection>) {
      const conn = state.connections.find(
        (connection) => connection.name === action.payload.name
      );

      conn.voteCount = action.payload.voteCount;
    },
  },
});

const { actions, reducer } = connectionSlice;

export const { addConnection } = actions;

export default reducer;
