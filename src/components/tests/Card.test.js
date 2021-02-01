import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Card from "../Card";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Card />
      </Provider>
    );
  });
  it("Image rendered successfully", () => {
    const span = wrapper.find("img");
    wrapper.update();
    expect(span.length).toBe(1);
  });
  it("Descriptions rendered successfully", () => {
    const button = wrapper.find("div.address");
    expect(button.length).toBe(3);
  });
  it("Name of Restaurants rendered correctly", () => {
    const button = wrapper.find(".name");
    expect(button.text()).toBe("Restaurant: ");
  });
});
