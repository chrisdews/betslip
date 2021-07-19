import React from "react";
import Betslip from "./Betslip";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockData from "../../_tests_/mockData.json";
import fetchMock from "jest-fetch-mock";

describe("Betslip renders after api call", () => {
  beforeEach(() => {
    fetchMock.mockIf(/^http?:\/\/localhost:4000.*$/, (req) => {
      if (req.url.endsWith("/all")) {
        return mockData.all;
      } else if (req.url.endsWith("/decimalOddsMoreThanTwo")) {
        return mockData.moreThanTwo;
      } else {
        return mockData.lessThanTwo;
      }
    });
  });

  it("should display the available bets after a successful api call - snapshot", async () => {
    const { findByText, container } = render(<Betslip />);
    await findByText("Sara Errani");
    expect(container).toMatchSnapshot();
  });
});


