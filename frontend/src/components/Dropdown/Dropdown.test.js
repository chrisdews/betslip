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
     
      fireEvent.change(getByTestId("dropdown-select"), {
        target: { value: "decimalOddsLessThanTwo" },
      });
      expect(filterFunction).toBeCalledWith("decimalOddsLessThanTwo");

      fireEvent.change(getByTestId("dropdown-select"), {
        target: { value: "decimalOddsMoreThanTwo" },
      });
      expect(filterFunction).toBeCalledWith("decimalOddsMoreThanTwo");

      fireEvent.change(getByTestId("dropdown-select"), {
        target: { value: "all" },
      });
      expect(filterFunction).toBeCalledWith("all");
    });
  });