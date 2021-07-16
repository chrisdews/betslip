import React from "react";
import renderer from "react-test-renderer";
import Betslip from "./Betslip";
import Footer from "../Footer"
import Button from "../Button"
import { fireEvent, render, screen } from "@testing-library/react";

describe("Betslip", () => {
  const setup = () => {
    const betslipRender = render(<Betslip><Footer><Button>Bet Now</Button></Footer></Betslip>);
    const betButton = betslipRender.getByRole("button", { name: "Bet Now" });
    return {betButton, ...betslipRender}
  };
  test("Bet Now button disabled if stake not added", () => {
    const { betButton, betslipRender } = setup();
    console.log(betslipRender);
    expect(betslipRender.getByText(/Bet Now/i).getAttribute("disabled")).toBe(
      null
    );
  });
});
