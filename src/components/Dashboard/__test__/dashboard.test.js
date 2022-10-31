/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-find-by */
import { render, screen } from "@testing-library/react"
import { wait } from "@testing-library/user-event/dist/utils";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Dashboard from "../Dashboard"

const dashboard = (
     <Provider store={store}>
       <Dashboard />
     </Provider>
  )

test("loader of Dashboard",()=>{
  render(dashboard);
  expect(screen.findAllByTestId("loader")).toBeTruthy();
})
test("Loaded and After Card Comoponent render",async()=>{
  render(dashboard);
  await wait(()=>expect(screen.findAllByTestId('card')).toBeInTheDocument());
})