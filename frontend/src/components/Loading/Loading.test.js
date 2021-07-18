import React from "react";
import Loading from "./Loading";
import { render } from "@testing-library/react";

describe("Loading", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});