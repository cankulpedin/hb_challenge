import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Container, ListGroup, Col, Row } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

const StyletListItem = styled(ListGroup.Item)`
  padding: 0;
  border: none;
  max-height: 160px;
  width: 560px;
  max-width: 560px;
  margin-top: 16px;
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

interface IListItem {
  point: string;
  header: string;
  url: string;
  onClickUp: () => void;
  onClickDown: () => void;
}

export const ListItem: FC<IListItem> = ({
  point,
  header,
  url,
  onClickUp,
  onClickDown,
}: IListItem) => {
  const { t } = useTranslation();

  return (
    <StyletListItem>
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
                  {t("up_vote")}
                </StyledIconDiv>
              </StyledListColumnInfoVoteRow>
            </StyledListColumnInfoContainer>
          </StyledListColumnInfo>
        </Row>
      </StyledListContainer>
    </StyletListItem>
  );
};
