import { fireEvent, render, screen } from "@testing-library/react"
import { wait } from "@testing-library/user-event/dist/utils";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import UserPosts from "../UserPosts"
const userPost  = (<Provider store={store}>
  <UserPosts />
</Provider>)

test("Button Check",()=>{
  render(userPost);
  const wrapper = screen.getAllByRole("button");
  expect(wrapper).toHaveLength(1);
})

test("Button Click Event",()=>{
  render(userPost);
  fireEvent.click(screen.getByRole('button'));
  // Check For Form is opened
  expect(screen.getAllByTestId("sentinelEnd")).toBeTruthy();
});

test("user post enabled check",async()=>{
  render(userPost);
  await wait(()=>expect(screen.getAllByTestId("card")).toHaveLength(1));
})