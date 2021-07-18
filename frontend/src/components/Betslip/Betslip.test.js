import React from "react";
import Betslip from "./Betslip";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Betslip", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<Betslip />);
    expect(container).toMatchSnapshot();
  });

  it("the header component should be rendered on initial load", () => {
    const { getByText } = render(<Betslip />);
    expect(getByText(/betslip/i)).not.toBe(null)
  });

  it("the Loading component should be rendered on initial load", () => {
    const { getByText } = render(<Betslip />);
    expect(getByText(/loading.../i)).not.toBe(null)
  });

  it("should display the bets component after successful api call", async () => {
    const { getByTestId } = render(<Betslip />);
    const betsList = await waitFor(() => getByTestId(/bets-list/i))
    expect(betsList).toBeInTheDocument()
  });
});

// add tests for the filter (loop through the bets list and check values)