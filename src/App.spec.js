import { mount } from "@vue/test-utils";
import App from "./App.vue";

it("App renders", async () => {
  const wrapper = mount(App);
  expect(wrapper.exists()).toBe(true);
});
