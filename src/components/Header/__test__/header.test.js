import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import Header from "../Header";
const wrapper = <BrowserRouter><Provider store={store}><Header /></Provider></BrowserRouter>

test("Header Links Checker",()=>{
  render(wrapper);
  const component = screen.getAllByTestId("link");
  expect(component).toHaveLength(2);
})