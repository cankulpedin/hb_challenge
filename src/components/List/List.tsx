import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Container } from "react-bootstrap";

import { ListItem } from "./ListItem";
import { Dropdown } from "../dropdown/Dropdown";
import {
  selectConnections,
  selectSortOption,
} from "../../store/selectors/connectionSelector";
import {
  connection,
  setSortOption,
  sortOptions,
} from "../../store/slices/connectionSlice";
import { setVoteCount } from "../../store/slices/connectionSlice";

const StyledListContainer = styled(Container)`
  padding: 16px 25%;
`;

interface VoteInterface {
  name: string;
  url: string;
  voteCount: number;
}

export const List: FC = () => {
  const dispatch = useDispatch();
  const connections: connection[] = useSelector(selectConnections);
  const sortType: sortOptions = useSelector(selectSortOption);

  const [sortedConnections, setSortedConnections] = useState<connection[]>(
    connections
  );

  useEffect(() => {
    dispatch(setSortOption(null));
  }, []);

  useEffect(() => {
    let sortedConnections: connection[];

    if (sortType) {
      sortedConnections = [...(connections || [])].sort(
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
    } else {
      sortedConnections = [...(connections || [])].sort(
        (connection1: connection, connection2: connection) => {
          if (moment(connection1.lastUpdate).isAfter(connection2.lastUpdate)) {
            return -1;
          } else return 1;
        }
      );
    }

    setSortedConnections(sortedConnections);
  }, [sortType, connections]);

  const incrementByOne = ({ name, url, voteCount }: VoteInterface) => {
    if (!sortType) {
      dispatch(setSortOption(sortOptions.MOST_VOTED));
    }

    dispatch(
      setVoteCount({
        name: name,
        url: url,
        voteCount: voteCount + 1,
        lastUpdate: moment().toString(),
      })
    );
  };

  const decrementByOne = ({ name, url, voteCount }: VoteInterface) => {
    if (!sortType) {
      dispatch(setSortOption(sortOptions.MOST_VOTED));
    }

    if (voteCount !== 0) {
      dispatch(
        setVoteCount({
          name: name,
          url: url,
          voteCount: voteCount - 1,
          lastUpdate: moment().toString(),
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
