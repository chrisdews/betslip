import React from "react";
import ReceiptModal from "./ReceiptModal";
import { render } from "@testing-library/react";

describe("ReceiptModal", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(
      <ReceiptModal stakes={{ a: 1, b: 2, c: 3, d: 4 }} />
    );
    expect(container).toMatchSnapshot();
  });
});
