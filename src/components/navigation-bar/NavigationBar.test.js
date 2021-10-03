import React from "react";
import { NavigationBar } from "./NavigationBar";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("NavigationBar", () => {
  const mockStore = configureStore();
  const store = mockStore({ connection: {} });

  const component = shallow(
    <Provider store={store}>
      <NavigationBar />
    </Provider>
  );

  it("should render the NavigationBar component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
