import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import App from "./App";

import { afterEach, describe, expect, test } from "vitest";
import characters from "./testing/mock/characters";
import characters2 from "./testing/mock/characters-2";

describe("<App />", () => {
  describe("loading character", () => {
    afterEach(() => {
      cleanup();
    });
    test('renders the title "Characters"', async () => {
      const { getByText } = render(<App />);
      expect(getByText("Characters")).toBeInTheDocument();
    });
    test("renders a list of 10 characters", async () => {
      const { findAllByTestId } = render(<App />);
      expect(await findAllByTestId("character")).toHaveLength(10);
    });
  });
  describe("loading more characters", () => {
    afterEach(() => {
      cleanup();
    });
    test('has a "Load More Characters" button', async () => {
      const { getByText } = render(<App />);
      expect(getByText("Load More Characters")).toBeInTheDocument();
    });
    test("clicking load more gets 10 more characters", async () => {
      const { getByText, findAllByTestId } = render(<App />);
      fireEvent.click(getByText("Load More Characters"));
      expect(await findAllByTestId("character")).toHaveLength(10);
    });
    test("clicking load more increases the page number", async () => {
      const { getByText } = render(<App />);
      fireEvent.click(getByText("Load More Characters"));
      expect(getByText("Next Page: 2")).toBeInTheDocument();
    });
  });
});
