import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

export enum sortOptions {
  MOST_VOTED = "MOST VOTED",
  LESS_VOTED = "LESS VOTED",
}

export interface connection {
  name: string;
  url: string;
  lastUpdate: string;
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
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
  ],
};

const connectionSlice = createSlice({
  name: "connection",
  initialState: INITIAL_STATE,
  reducers: {
    setVoteCount(state, action: PayloadAction<connection>) {
      const conn = state.connections.find(
        (connection) => connection.name === action.payload.name
      );

      conn.voteCount = action.payload.voteCount;
      conn.lastUpdate = action.payload.lastUpdate;
    },
    addConnection(state, action: PayloadAction<connection>) {
      state.connections.push(action.payload);
    },
    setSortOption(state, action: PayloadAction<sortOptions | null>) {
      state.sort = action.payload;
    },
  },
});

const { actions, reducer } = connectionSlice;

export const { setVoteCount, setSortOption, addConnection } = actions;

export default reducer;
