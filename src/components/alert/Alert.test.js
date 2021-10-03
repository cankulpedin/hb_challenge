import React from "react";
import { Alert } from "./Alert";
import { shallow } from "enzyme";

describe("Alert", () => {
  const component = shallow(<Alert />);
  it("should render the Alert component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
