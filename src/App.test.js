import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("Component rendered successfully", () => {
    const comp = wrapper.find(<App />);
    wrapper.update();
    expect(comp).toMatchSnapshot();
  });
  it("Title semantics used correctly", () => {
    const span = wrapper.find("div h1#title");

    expect(span.length).toBe(0);
  });
});
