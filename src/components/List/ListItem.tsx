import React, { FC, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Container, ListGroup, Col, Row } from "react-bootstrap";
import { ArrowUp, ArrowDown, DashCircleFill } from "react-bootstrap-icons";

const StyletListItem = styled(ListGroup.Item)`
  position: relative;
  padding: 4px;
  border: none;
  max-height: 160px;
  width: 560px;
  max-width: 560px;
  margin-top: 16px;
  background-color: ${(props) => (props.highlight ? "lightgrey" : "none")};
  border-radius: 8px;
`;

const StyledListContainer = styled(Container)``;

const StyledListColumnPoints = styled(Col)`
  border: 1px solid;
  border-radius: 8px;
  max-width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledPointContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPointContainerRow = styled(Row)`
  font-weight: bold;
  font-size: 40px;
`;

const StyledListColumnInfo = styled(Col)``;

const StyledListColumnInfoContainer = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledListColumnInfoHeaderRow = styled(Row)`
  font-weight: bold;
  font-size: 24px;
`;

const StyledListColumnInfoUrlRow = styled(Row)`
  color: grey;
`;

const StyledListColumnInfoVoteRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledDiv = styled.div``;

const StyledArrowUp = styled(ArrowUp)`
  color: grey;
  margin-right: 4px;
`;

const StyledArrowDown = styled(ArrowDown)`
  color: grey;
  margin-right: 4px;
`;

const StyledIconDiv = styled.div`
  cursor: pointer;
`;

const StyledDashCircleFill = styled(DashCircleFill)`
  position: absolute;
  top: -8px;
  right: -8px;
  color: red;
  height: 32px;
  width: 32px;
  cursor: pointer;
  z-index: 999;
`;

interface IListItem {
  point: string;
  header: string;
  url: string;
  onClickUp: () => void;
  onClickDown: () => void;
  onClickDelete: () => void;
}

export const ListItem: FC<IListItem> = ({
  point,
  header,
  url,
  onClickUp,
  onClickDown,
  onClickDelete,
}: IListItem) => {
  const { t } = useTranslation();
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);
  const [highlight, setHighlight] = useState<boolean>(false);

  return (
    <StyletListItem
      onMouseEnter={() => {
        setShowDeleteButton(true);
        setHighlight(true);
      }}
      onMouseLeave={() => {
        setShowDeleteButton(false);
        setHighlight(false);
      }}
      highlight={highlight}
    >
      {showDeleteButton && (
        <StyledDashCircleFill onClick={() => onClickDelete()} />
      )}
      <StyledListContainer>
        <Row>
          <StyledListColumnPoints>
            <StyledPointContainer>
              <StyledPointContainerRow>{point}</StyledPointContainerRow>
              <Row>{t("points")}</Row>
            </StyledPointContainer>
          </StyledListColumnPoints>
          <StyledListColumnInfo>
            <StyledListColumnInfoContainer>
              <StyledDiv>
                <StyledListColumnInfoHeaderRow>
                  {header}
                </StyledListColumnInfoHeaderRow>
                <StyledListColumnInfoUrlRow>({url})</StyledListColumnInfoUrlRow>
              </StyledDiv>
              <StyledListColumnInfoVoteRow>
                <StyledIconDiv onClick={() => onClickUp()}>
                  <StyledArrowUp />
                  {t("up_vote")}
                </StyledIconDiv>
                <StyledIconDiv onClick={() => onClickDown()}>
                  <StyledArrowDown />
                  {t("down_vote")}
                </StyledIconDiv>
              </StyledListColumnInfoVoteRow>
            </StyledListColumnInfoContainer>
          </StyledListColumnInfo>
        </Row>
      </StyledListContainer>
    </StyletListItem>
  );
};
