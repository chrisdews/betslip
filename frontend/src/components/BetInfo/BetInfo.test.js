import React from "react";
import BetInfo from "./BetInfo";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BetInfo", () => {
  it("renders correctly - snapshot", () => {
    const { container } = render(<BetInfo betName={'dewsy'} bestOdds={3.14}/>);
    expect(container).toMatchSnapshot();
  });
});