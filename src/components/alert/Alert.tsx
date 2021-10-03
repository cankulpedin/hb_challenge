import React, { FC } from "react";
import styled from "styled-components";
import { Alert as AlertBootstrap } from "react-bootstrap";

const StyledAlert = styled(AlertBootstrap)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
`;

interface AlertProps {
  alertMessage: string;
  show: boolean;
}

export const Alert: FC<AlertProps> = ({ alertMessage, show }: AlertProps) => {
  return (
    <StyledAlert variant="success" show={show}>
      {alertMessage}
    </StyledAlert>
  );
};
