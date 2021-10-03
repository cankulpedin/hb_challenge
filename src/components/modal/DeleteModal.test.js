import React from "react";
import { DeleteModal } from "./DeleteModal";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("DeleteModal", () => {
  const mockStore = configureStore();
  const store = mockStore({ connection: {} });

  const component = shallow(
    <Provider store={store}>
      <DeleteModal />
    </Provider>
  );

  it("should render the DeleteModal component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
