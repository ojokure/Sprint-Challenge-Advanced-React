import React from "react";
import * as Players from "./Players";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Players players={this.state.api} />);
});

describe("Players component", () => {
  it("can debug the output", () => {
    tools.debug();
  });

  it("shows the correct player", () => {
    const elementWithText = tools.queryByText(//i);
    expect(elementWithText).toBeInTheDocument();
  });


});
