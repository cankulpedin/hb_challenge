import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import { Routes } from "./routes/Routes";

import { NavigationBar } from "./components/navigation-bar/NavigationBar";

const MainContainer = styled.div`
  height: 100%;
  padding: 0 44px;
`;

export const App = (): JSX.Element => {
  return (
    <MainContainer>
      <Router>
        <NavigationBar />

        <Routes />
      </Router>
    </MainContainer>
  );
};
