import React, { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import ROUTE_NAMES from "../../routes/routeNames";

const StyledAddConnectionContainer = styled(Container)`
  margin-top: 16px;
  height: 160px;
  width: 560px;
  max-width: 560px;
  border: 1px solid black;
  border-radius: 8px;
`;

const StyledMainRow = styled(Row)`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledIconColumn = styled(Col)`
  width: 30%;
`;

const StyledIconContainer = styled(Container)`
  border: 1px solid;
  border-radius: 8px;
  max-width: 120px;
  height: 120px;
`;

const StyledTextColumn = styled(Col)`
  display: flex;
  text-align: center;
  min-width: 70%;
  font-weight: bold;
  font-size: 24px;
`;

const StyledPlus = styled(Plus)`
  height: 100%;
  width: 100%;
`;

export const AddConnection: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSubmitLink = () => {
    history.push(ROUTE_NAMES.ADD_CONNECTION);
  };

  return (
    <StyledAddConnectionContainer>
      <StyledMainRow onClick={handleSubmitLink}>
        <StyledIconColumn>
          <StyledIconContainer>
            <StyledPlus />
          </StyledIconContainer>
        </StyledIconColumn>
        <StyledTextColumn>{t("submit_a_link")}</StyledTextColumn>
      </StyledMainRow>
    </StyledAddConnectionContainer>
  );
};
