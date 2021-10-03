import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { v4 as uuid } from "uuid";

export enum sortOptions {
  MOST_VOTED = "MOST VOTED",
  LESS_VOTED = "LESS VOTED",
}

export interface connection {
  name: string;
  url: string;
  lastUpdate: string;
  voteCount: number;
  id?: string;
}

export interface connectionsState {
  connections: connection[];
  sort?: sortOptions;
  idToDelete?: string;
}

const INITIAL_STATE: connectionsState = {
  connections: [
    {
      name: "reddit",
      url: "https://www.reddit.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
      id: uuid(),
    },
    {
      name: "amazon",
      url: "https://www.amazon.com",
      voteCount: 0,
      lastUpdate: moment().toString(),
      id: uuid(),
    },
  ],
};

const connectionSlice = createSlice({
  name: "connection",
  initialState: INITIAL_STATE,
  reducers: {
    setVoteCount(state, action: PayloadAction<connection>) {
      const conn = state.connections.find(
        (connection) => connection.id === action.payload.id
      );

      conn.voteCount = action.payload.voteCount;
      conn.lastUpdate = action.payload.lastUpdate;
    },
    addConnection(state, action: PayloadAction<connection>) {
      const id: string = uuid();
      state.connections.push({ ...action.payload, id });
    },
    setSortOption(state, action: PayloadAction<sortOptions | null>) {
      state.sort = action.payload;
    },
    setIdToDelete(state, action: PayloadAction<string>) {
      state.idToDelete = action.payload;
    },
    deleteConnection(state, action: PayloadAction<string>) {
      state.connections = state.connections.filter(
        (connection) => connection.id !== action.payload
      );
    },
  },
});

const { actions, reducer } = connectionSlice;

export const {
  setVoteCount,
  setSortOption,
  addConnection,
  setIdToDelete,
  deleteConnection,
} = actions;

export default reducer;
