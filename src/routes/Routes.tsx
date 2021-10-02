import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import ROUTE_NAMES from "./routeNames";

import { List } from "../components/List/List";
import { AddConnection } from "../components/add_connection/AddConnection";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_NAMES.ROOT}>
        <AddConnection />
        <List />
      </Route>
      <Route exact path={ROUTE_NAMES.ADD_CONNECTION}>
        ADD_CONNECTION
      </Route>
    </Switch>
  );
};
