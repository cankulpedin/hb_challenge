import React from "react";
import { ListItem } from "./ListItem";
import { shallow } from "enzyme";

describe("ListItem", () => {
  const component = shallow(
    <ListItem
      point={3}
      header="test"
      url="test"
      onClickUp={() => {
        return;
      }}
      onClickDown={() => {
        return;
      }}
      onClickDelete={() => {
        return;
      }}
    />
  );
  it("should render the ListItem component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
