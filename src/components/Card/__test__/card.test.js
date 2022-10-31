/* eslint-disable testing-library/await-async-query */
import { render, screen } from "@testing-library/react"
import { wait } from "@testing-library/user-event/dist/utils";
import Card from "../Card"

test("loader of Card",()=>{
  render(<Card />);
  expect(screen.findAllByTestId("loader")).toBeTruthy();
})

test("Is Items Rendered Checks",async()=>{
   render(<Card />);
   await wait(()=>expect(screen.findAllByTestId("items")).toBeGreaterThan(60));
})
