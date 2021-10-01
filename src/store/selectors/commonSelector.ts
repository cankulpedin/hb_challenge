import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../RootReducer";
import { SideBarState } from "../slices/commonSlice";

export const getSideBarOptions = createSelector(
  (state: RootState) => state.common.sideBar,
  (sideBar: SideBarState) => {
    const sideBarOptions: SideBarState = sideBar;

    return sideBarOptions;
  }
);
