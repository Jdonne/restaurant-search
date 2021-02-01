import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Display from "../Display";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Display", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Display />
      </Provider>
    );
  });
  it("Component rendered successfully", () => {
    const comp = wrapper.find(<Display />);
    wrapper.update();
    expect(comp).toMatchSnapshot();
  });
});
