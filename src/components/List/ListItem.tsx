import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Container, ListGroup, Col, Row } from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

const StyletListItem = styled(ListGroup.Item)`
  padding: 8px 12px;
  border: none;
`;

const StyledListContainer = styled(Container)``;

const StyledListRow = styled(Row)``;

const StyledListColumnPoints = styled(Col)`
  border: 1px solid;
  border-radius: 8px;
  max-width: 160px;
  height: 160px;
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

interface IListItem {
  point: string;
  header: string;
  url: string;
  upVoteCount: number;
  downVoteCount: number;
}

export const ListItem: FC<IListItem> = ({
  point,
  header,
  url,
  upVoteCount,
  downVoteCount,
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
                <div>
                  <StyledArrowUp />
                  {t("up_vote")}
                </div>
                <div>
                  <StyledArrowDown />
                  {t("up_vote")}
                </div>
              </StyledListColumnInfoVoteRow>
            </StyledListColumnInfoContainer>
          </StyledListColumnInfo>
        </Row>
      </StyledListContainer>
    </StyletListItem>
  );
};
