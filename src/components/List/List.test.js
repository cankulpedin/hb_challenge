import React from "react";
import { List } from "./List";
import { shallow } from "enzyme";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import moment from "moment";
import { v4 as uuid } from "uuid";
import i18n from "../../common/i18n/i18n.ts";

const mockStore = configureStore();
const store = mockStore({
  connection: {
    connections: [
      {
        name: "reddit",
        url: "https://www.reddit.com",
        voteCount: 0,
        lastUpdate: moment().toString(),
        id: uuid(),
      },
      {
        name: "amazon",
        url: "https://www.amazon.com",
        voteCount: 0,
        lastUpdate: moment().toString(),
        id: uuid(),
      },
    ],
  },
});

afterEach(() => {
  store.clearActions();
});

describe("List=", () => {
  const component = shallow(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <List />
      </Provider>
    </I18nextProvider>
  );
  it("should render the List component", () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
