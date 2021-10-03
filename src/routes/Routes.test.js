import React from "react";
import { Routes } from "./Routes";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Routes", () => {
  const mockStore = configureStore();
  const store = mockStore({ connection: {} });

  const component = shallow(
    <Provider store={store}>
      <Routes />
    </Provider>
  );

  it("should render the Routes component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
