import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Modal, Button } from "react-bootstrap";
import {
  selectConnections,
  selectIdToDelete,
} from "../../store/selectors/connectionSelector";
import {
  connection,
  deleteConnection,
} from "../../store/slices/connectionSlice";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

const StyledModalButton = styled(Button)``;

const StyledModalBody = styled(Modal.Body)`
  text-align: center;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-around;

  > button {
    min-width: 80px;
    border-radius: 16px;
  }
`;

const StyledTextDiv = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const DeleteModal: FC<ModalProps> = ({
  showModal,
  onClose,
}: ModalProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const id: string = useSelector(selectIdToDelete);
  const connections: connection[] = useSelector(selectConnections);

  const [show, setShow] = useState(false);
  const [connectionName, setConnectionName] = useState<string>("");

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  useEffect(() => {
    setConnectionName(
      connections.find((connection: connection) => connection.id === id)?.name
    );
  }, [id]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleDelete = () => {
    dispatch(deleteConnection(id));
    setShow(false);
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("remove_link")}</Modal.Title>
      </Modal.Header>
      <StyledModalBody>
        {t("do_you_want_to_remove")}
        <StyledTextDiv>{connectionName}</StyledTextDiv>
      </StyledModalBody>
      <StyledButtonDiv>
        <StyledModalButton variant="primary" onClick={handleDelete}>
          {t("ok")}
        </StyledModalButton>
        <StyledModalButton variant="secondary" onClick={handleClose}>
          {t("cancel")}
        </StyledModalButton>
      </StyledButtonDiv>
    </Modal>
  );
};
