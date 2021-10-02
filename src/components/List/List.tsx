import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "react-bootstrap";

import { ListItem } from "./ListItem";
import { Dropdown } from "../dropdown/Dropdown";
import {
  selectConnections,
  selectSortOption,
} from "../../store/selectors/connectionSelector";
import { connection, sortOptions } from "../../store/slices/connectionSlice";
import { addConnection } from "../../store/slices/connectionSlice";

const StyledListContainer = styled(Container)`
  padding: 16px 25%;
`;

export const List: FC = () => {
  const dispatch = useDispatch();
  const connections: connection[] = useSelector(selectConnections);
  const sortType: sortOptions = useSelector(selectSortOption);
  const [sortedConnections, setSortedConnections] = useState<connection[]>(
    connections
  );

  useEffect(() => {
    const sortedConnections: connection[] = [...(connections || [])].sort(
      (connection1: connection, connection2: connection) => {
        switch (sortType) {
          case sortOptions.LESS_VOTED:
            return connection1.voteCount - connection2.voteCount;
          case sortOptions.MOST_VOTED:
            return connection2.voteCount - connection1.voteCount;

          default:
            break;
        }
      }
    );

    setSortedConnections(sortedConnections);
  }, [sortType, connections]);

  const incrementByOne = ({ name, url, voteCount }: connection) => {
    dispatch(
      addConnection({
        name: name,
        url: url,
        voteCount: voteCount + 1,
      })
    );
  };

  const decrementByOne = ({ name, url, voteCount }: connection) => {
    if (voteCount !== 0) {
      dispatch(
        addConnection({
          name: name,
          url: url,
          voteCount: voteCount - 1,
        })
      );
    }
  };

  return (
    <Container>
      <StyledListContainer>
        <Dropdown />
        {sortedConnections?.map((connection: connection, index: number) => (
          <ListItem
            key={index}
            point={`${connection.voteCount}`}
            header={connection.name}
            url={connection.url}
            onClickUp={() =>
              incrementByOne({
                name: connection.name,
                url: connection.url,
                voteCount: connection.voteCount,
              })
            }
            onClickDown={() =>
              decrementByOne({
                name: connection.name,
                url: connection.url,
                voteCount: connection.voteCount,
              })
            }
          />
        ))}
      </StyledListContainer>
    </Container>
  );
};
