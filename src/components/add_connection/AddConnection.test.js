import React from "react";
import { AddConnection } from "./AddConnection";
import { shallow } from "enzyme";

describe("AddConnection", () => {
  const component = shallow(<AddConnection />);
  it("should render the AddConnection component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
