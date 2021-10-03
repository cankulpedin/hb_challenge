import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Container, Pagination } from "react-bootstrap";

import { ListItem } from "./ListItem";
import { Dropdown } from "../dropdown/Dropdown";
import {
  selectConnections,
  selectSortOption,
} from "../../store/selectors/connectionSelector";
import {
  connection,
  setIdToDelete,
  setSortOption,
  sortOptions,
} from "../../store/slices/connectionSlice";
import { setVoteCount } from "../../store/slices/connectionSlice";
import { PAGINATION_COUNT } from "../../common/constants";
import { DeleteModal } from "../modal/DeleteModal";

interface VoteInterface {
  name: string;
  url: string;
  voteCount: number;
  id: string;
}

const StyledListContainer = styled(Container)`
  padding: 16px 25%;
`;

const StyledPagination = styled(Pagination)`
  margin-top: 40px;
`;

const getSortAccordingToTime = (
  time1: moment.Moment,
  time2: moment.Moment
): number => {
  if (moment(time1).isAfter(time2)) {
    return -1;
  } else {
    return 1;
  }
};

export const List: FC = () => {
  const dispatch = useDispatch();
  const connections: connection[] = useSelector(selectConnections);
  const sortType: sortOptions = useSelector(selectSortOption);

  const [sortedConnections, setSortedConnections] = useState<connection[]>(
    connections
  );
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [indexToShow, setIndexToShow] = useState<number[]>([
    0,
    PAGINATION_COUNT,
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setSortOption(null));
    dispatch(setIdToDelete(undefined));
  }, []);

  useEffect(() => {
    let sortedConnections: connection[];

    if (sortType) {
      sortedConnections = [...(connections || [])].sort(
        (connection1: connection, connection2: connection) => {
          switch (sortType) {
            case sortOptions.LESS_VOTED:
              if (connection1.voteCount !== connection2.voteCount) {
                return connection1.voteCount - connection2.voteCount;
              } else {
                return getSortAccordingToTime(
                  moment(connection1.lastUpdate),
                  moment(connection2.lastUpdate)
                );
              }
            case sortOptions.MOST_VOTED:
              if (connection1.voteCount !== connection2.voteCount) {
                return connection2.voteCount - connection1.voteCount;
              } else {
                return getSortAccordingToTime(
                  moment(connection1.lastUpdate),
                  moment(connection2.lastUpdate)
                );
              }
            default:
              break;
          }
        }
      );
    } else {
      sortedConnections = [...(connections || [])].sort(
        (connection1: connection, connection2: connection) => {
          return getSortAccordingToTime(
            moment(connection1.lastUpdate),
            moment(connection2.lastUpdate)
          );
        }
      );
    }

    setSortedConnections(sortedConnections);
  }, [sortType, connections]);

  const incrementByOne = ({ name, url, voteCount, id }: VoteInterface) => {
    /* if (!sortType) {
      dispatch(setSortOption(sortOptions.MOST_VOTED));
    } */

    dispatch(
      setVoteCount({
        name,
        url,
        voteCount: voteCount + 1,
        lastUpdate: moment().toString(),
        id,
      })
    );
  };

  const decrementByOne = ({ name, url, voteCount, id }: VoteInterface) => {
    /* if (!sortType) {
      dispatch(setSortOption(sortOptions.MOST_VOTED));
    } */

    if (voteCount !== 0) {
      dispatch(
        setVoteCount({
          name,
          url,
          voteCount: voteCount - 1,
          lastUpdate: moment().toString(),
          id,
        })
      );
    }
  };

  const changeActiveIndex = (clickedIndex: number) => {
    setActiveIndex(clickedIndex);
    setIndexToShow([
      (clickedIndex - 1) * PAGINATION_COUNT,
      clickedIndex * PAGINATION_COUNT,
    ]);
  };

  const getPagination = () => {
    const paginationArray: JSX.Element[] = [];
    const linkCount: number = connections.length;

    for (
      let index = 1;
      index <= Math.ceil(linkCount / PAGINATION_COUNT);
      index++
    ) {
      paginationArray.push(
        <Pagination.Item
          key={index}
          active={index === activeIndex}
          onClick={() => changeActiveIndex(index)}
        >
          {index}
        </Pagination.Item>
      );
    }

    return <StyledPagination>{paginationArray}</StyledPagination>;
  };

  const showDeleteModal = (id: string) => {
    dispatch(setIdToDelete(id));
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <DeleteModal showModal={showModal} onClose={handleClose} />
      <StyledListContainer>
        <Dropdown />
        {sortedConnections
          ?.map((connection: connection, index: number) => (
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
                  id: connection.id,
                })
              }
              onClickDown={() =>
                decrementByOne({
                  name: connection.name,
                  url: connection.url,
                  voteCount: connection.voteCount,
                  id: connection.id,
                })
              }
              onClickDelete={() => {
                showDeleteModal(connection.id);
              }}
            />
          ))
          .slice(indexToShow[0], indexToShow[1])}
        {connections.length > PAGINATION_COUNT && getPagination()}
      </StyledListContainer>
    </Container>
  );
};
