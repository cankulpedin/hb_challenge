import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../RootReducer";
import { connection } from "../slices/connectionSlice";

export const getConnectionOptions = createSelector(
  (state: RootState) => state.connection.connections,
  (connections: connection[]) => {
    const connectionsObject: connection[] = connections;

    return connectionsObject;
  }
);
