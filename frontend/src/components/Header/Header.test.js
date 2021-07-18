import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});