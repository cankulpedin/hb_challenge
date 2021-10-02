import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum sortOptions {
  MOST_VOTED = "MOST VOTED",
  LESS_VOTED = "LESS VOTED",
}

export interface connection {
  name: string;
  url: string;
  voteCount: number;
}

export interface connectionsState {
  connections: connection[];
  sort?: sortOptions;
}

const INITIAL_STATE: connectionsState = {
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
    setSortOption(state, action: PayloadAction<sortOptions>) {
      state.sort = action.payload;
    },
  },
});

const { actions, reducer } = connectionSlice;

export const { addConnection, setSortOption } = actions;

export default reducer;
