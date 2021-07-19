import React from "react";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<Button>TEST BUTTON</Button>);
    expect(container).toMatchSnapshot();
  });

  it("button on click calls function when enabled", () => {
    const testFunction = jest.fn();
    const { getByText } = render(
      <Button clickHandler={testFunction} buttonDisabled={false}>TEST BUTTON</Button>
    );
    fireEvent.click(getByText(/test button/i));
    expect(testFunction).toBeCalled();
  });

  it("button on click does nothing when disabled", () => {
    const testFunction = jest.fn();
    const { getByText } = render(
      <Button clickHandler={testFunction} buttonDisabled={true}>TEST BUTTON</Button>
    );
    fireEvent.click(getByText(/test button/i));
    expect(testFunction).not.toBeCalled();
  });
});