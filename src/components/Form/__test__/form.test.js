/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/await-async-query */
import {  render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Form from "../Form"

const form = <Provider store={store}>
  <Form open={true} setOpen={()=>{}} style={{}} />
</Provider>

test("Title Match for Form",()=>{
  render(form);
  expect(screen.findByDisplayValue("Add New Post")).toBeTruthy();
})

test("When Nothing Entered",()=>{
  render(form);
  userEvent.click(screen.getByTestId("post"));
  expect(screen.findAllByTestId("error")).toBeTruthy();
})

test("When Title Entered",async()=>{
  render(form);
  const expectedText = "React Js in Action";
  const title = screen.getByPlaceholderText("Title");
  userEvent.type(title,expectedText);
  expect(title.value).toBe(expectedText);
})

test("Error Triggered for Body",()=>{
  render(form);
  const expectedText = "React Js in Action";
  const title = screen.getByPlaceholderText("Title");
  userEvent.type(title,expectedText);
  userEvent.click(screen.getByRole("button"));
  expect(screen.findAllByTestId("error")).toBeTruthy();
  
});

test("Filled Fields",()=>{
  render(form);
  const [expectedTitleText,expectedBodyText] = ["This is Title","This is Body"];
  const title = screen.getByPlaceholderText("Title");
  const body = screen.getByPlaceholderText("Body");
  userEvent.type(title,expectedTitleText);
  userEvent.type(body,expectedBodyText);
  expect(title.value).toBe(expectedTitleText);
  expect(body.value).toBe(expectedBodyText);
});

test("Filled Fields for Success",async()=>{
  render(form);
  const [expectedTitleText,expectedBodyText] = ["This is Title","This is Body"];
  const title = screen.getByPlaceholderText("Title");
  const body = screen.getByPlaceholderText("Body");
  userEvent.type(title,expectedTitleText);
  userEvent.type(body,expectedBodyText);
  userEvent.click(screen.getByTestId("post"));
  await wait(()=>expect(screen.getAllByDisplayValue("Successfully Saved")).toBeTruthy());
});
