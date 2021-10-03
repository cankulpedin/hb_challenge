import React, { FC } from "react";
import styled from "styled-components";

import { Navbar } from "react-bootstrap";

const StyledNavBar = styled(Navbar)`
  width: 100% !important;
  max-width: 100% !important;
  border-bottom: 1px black solid;
  display: flex;
  justify-content: space-between;
`;

export const NavigationBar: FC = () => (
  <StyledNavBar>
    <Navbar.Brand>Hepsiburada.com</Navbar.Brand>
    <Navbar.Text>LinkVOTE Challenge</Navbar.Text>
  </StyledNavBar>
);
