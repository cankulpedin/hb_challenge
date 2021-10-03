import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import moment from "moment";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

import { addConnection } from "../../store/slices/connectionSlice";
import { useHistory } from "react-router-dom";

declare type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

const StyledFormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 16px 25%;
`;

const StyledLink = styled.div`
  width: 30%;
  align-self: flex-start;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

const StyledFormTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  width: 30%;
  align-self: flex-end;
`;

const StyledArrow = styled(ArrowLeft)`
  margin-right: 8px;
`;

export const AddConnectionForm: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();

  const [linkName, setLinkName] = useState<string>("");
  const [linkUrl, setLinkUrl] = useState<string>("");

  const addNewConnection = () => {
    dispatch(
      addConnection({
        name: linkName,
        url: linkUrl,
        voteCount: 0,
        lastUpdate: moment().toString(),
      })
    );
  };

  const goBack = () => {
    history.push("/");
  };

  return (
    <Container>
      <StyledFormContainer>
        <StyledLink onClick={goBack}>
          <StyledArrow />
          {t("return_to_list")}
        </StyledLink>
        <StyledFormTitle>{t("add_new_link")}</StyledFormTitle>
        <Form.Label htmlFor="basic-url">{t("link_name")}</Form.Label>
        <InputGroup className="mb-3">
          <FormControl
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e: React.ChangeEvent<FormControlElement>) => {
              setLinkName(e.target.value);
            }}
          />
        </InputGroup>
        <Form.Label htmlFor="basic-url">{t("link_url")}</Form.Label>
        <InputGroup className="mb-3">
          <FormControl
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e: React.ChangeEvent<FormControlElement>) => {
              setLinkUrl(e.target.value);
            }}
          />
        </InputGroup>
        <StyledButton onClick={addNewConnection}>{t("add")}</StyledButton>
      </StyledFormContainer>
    </Container>
  );
};
