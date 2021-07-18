import React from "react";
import BetFooter from "./BetFooter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BetFooter", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<BetFooter />);
    expect(container).toMatchSnapshot();
  });

  it("the BET NOW button is disabled when passed betButtonDisabled is true", () => {
    const { getByText } = render(<BetFooter betButtonDisabled={true} />);
    expect(getByText(/bet now/i)).toBeDisabled();
  });

  it("the BET NOW button is disabled when passed betButtonDisabled is false", () => {
    const { getByText } = render(<BetFooter betButtonDisabled={false} />);
    expect(getByText(/bet now/i)).not.toBeDisabled();
  });

  it("BET NOW button on click calls setBetPlaced with an argument of true", () => {
    const testFunction = jest.fn();
    const { getByText } = render(
      <BetFooter betButtonDisabled={false} setBetPlaced={testFunction} />
    );
    fireEvent.click(getByText(/bet now/i));
    expect(testFunction).toBeCalledWith(true);
  });
});
