import React from "react";
import BetsContainer from "./BetsContainer";
import { render } from "@testing-library/react";

describe("BetInfo", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<BetsContainer />);
    expect(container).toMatchSnapshot();
  });
});