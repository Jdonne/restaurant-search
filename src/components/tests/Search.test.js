import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Search from "../Search";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Search", () => {
  let wrapper;
  const mock = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Search onClick={mock} />
      </Provider>
    );
  });
  it("Two input spans rendered correctly", () => {
    const span = wrapper.find("span");
    wrapper.update();
    expect(span.length).toBe(2);
  });
  it("Button rendered correctly", () => {
    const button = wrapper.find("button#btn1");
    expect(button.text()).toBe("Search");
  });
  it("City Button successfully clicked and called", () => {
    wrapper.find("button#btn1").simulate("click");
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it("Refine Button successfully clicked and called", () => {
    wrapper.find("button#btn2").simulate("click");
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
