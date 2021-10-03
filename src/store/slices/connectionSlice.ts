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
      name: "reddit1",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon2",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit3",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon4",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit5",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon6",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit7",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon8",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit9",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon10",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit11",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon12",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit13",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon14",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit15",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon16",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "reddit17",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
    },
    {
      name: "amazon18",
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
