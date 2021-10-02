import { RootState } from "../RootReducer";
import { connection, sortOptions } from "../slices/connectionSlice";

export const selectConnections = (state: RootState): connection[] =>
  state.connection.connections;

export const selectSortOption = (state: RootState): sortOptions =>
  state.connection.sort;
