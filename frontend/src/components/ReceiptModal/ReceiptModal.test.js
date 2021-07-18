import React from "react";
import ReceiptModal from "./ReceiptModal";
import { render } from "@testing-library/react";

describe("ReceiptModal", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<ReceiptModal />);
    expect(container).toMatchSnapshot();
  });

  it("the BET NOW button is disabled when passed betButtonDisabled is true", () => {
    const { getByText } = render(<ReceiptModal stakes={[1,2,3,4]} />);
    expect(getByText(/10/i)).not.toBeNull();
  });

});