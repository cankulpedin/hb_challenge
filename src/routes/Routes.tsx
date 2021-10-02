import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import ROUTE_NAMES from "./routeNames";

import { List } from "../components/List/List";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_NAMES.ROOT}>
        <Container>
          <List />
        </Container>
      </Route>
      <Route exact path={ROUTE_NAMES.ADD_CONNECTION}>
        ADD_CONNECTION
      </Route>
    </Switch>
  );
};
