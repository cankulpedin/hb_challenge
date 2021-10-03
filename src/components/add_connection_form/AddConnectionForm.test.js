import React from "react";
import { AddConnectionForm } from "./AddConnectionForm";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("AddConnectionForm", () => {
  const mockStore = configureStore();
  const store = mockStore({ connection: {} });

  const component = shallow(
    <Provider store={store}>
      <AddConnectionForm />
    </Provider>
  );

  afterEach(() => {
    store.clearActions();
  });

  it("should render the AddConnectionForm component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
