import React, { FC } from "react";
import styled from "styled-components";

import { Container, ListGroup, Col, Row } from "react-bootstrap";

import { ListItem } from "./ListItem";

const StyledListContainer = styled(Container)`
  padding: 16px 25%;
`;

export const List: FC = () => {
  return (
    <StyledListContainer>
      <ListItem
        point="3"
        header="deneme"
        url="url"
        upVoteCount={3}
        downVoteCount={3}
      />
      <ListItem
        point="3"
        header="deneme"
        url="url"
        upVoteCount={3}
        downVoteCount={3}
      />
      <ListItem
        point="3"
        header="deneme"
        url="url"
        upVoteCount={3}
        downVoteCount={3}
      />
    </StyledListContainer>
  );
};
