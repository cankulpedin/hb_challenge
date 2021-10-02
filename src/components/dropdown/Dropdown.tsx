import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Dropdown as DropdownBootstrap } from "react-bootstrap";

import { sortOptions, setSortOption } from "../../store/slices/connectionSlice";

const StyledDropdown = styled(DropdownBootstrap)`
  margin-bottom: 16px;
`;

const StyledDropdownToggle = styled(DropdownBootstrap.Toggle)`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dropdown: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSelect = (selectedValue: sortOptions) => {
    dispatch(setSortOption(selectedValue));
  };

  return (
    <StyledDropdown onSelect={handleSelect}>
      <StyledDropdownToggle id="dropdown-basic">
        {t("order_by")}
      </StyledDropdownToggle>
      <DropdownBootstrap.Menu>
        <DropdownBootstrap.Item eventKey={sortOptions.MOST_VOTED}>
          {t("most_voted")}
        </DropdownBootstrap.Item>
        <DropdownBootstrap.Item eventKey={sortOptions.LESS_VOTED}>
          {t("less_voted")}
        </DropdownBootstrap.Item>
      </DropdownBootstrap.Menu>
    </StyledDropdown>
  );
};
