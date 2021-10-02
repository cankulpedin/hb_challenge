import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";

const StyledFormContainer = styled(Container)`
  padding: 16px 25%;
`;

export const AddConnectionForm: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <StyledFormContainer>
        <Form.Label htmlFor="basic-url">{t("link_name")}</Form.Label>
        <InputGroup className="mb-3">
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        <Form.Label htmlFor="basic-url">{t("link_url")}</Form.Label>
        <InputGroup className="mb-3">
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
      </StyledFormContainer>
    </Container>
  );
};
