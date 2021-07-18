import React from "react";
import Dropdown from "./Dropdown";
import { render, fireEvent } from "@testing-library/react";

describe("Dropdown", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<Dropdown />);
    expect(container).toMatchSnapshot();
  });

  it("should run the setOddsFilter function when each option is selected", () => {
    const filterFunction = jest.fn();
    const { getByTestId } = render(
      <Dropdown setOddsFilter={filterFunction} />
    );
    fireEvent.click(getByTestId(/option-less-all/i))
        
        // (selectInput, { target: { value: "decimalOddsLessThanTwo" } }))
    
    // (getByTestId(/option-less-than-2/i));
    expect(filterFunction).toBeCalledWith('all');
  });
});