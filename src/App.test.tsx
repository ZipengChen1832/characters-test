import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { describe, expect, test, it, vi, beforeAll } from "vitest";
import { server } from "./testing/msw/node";

beforeAll(() => server.listen());

// Mock the getCharacters function
// vi.mock("./api/get-characters", () => {
//   return {
//     getCharacters: vi.fn(() =>
//       Promise.resolve(
//         Array.from({ length: 10 }, (_, i) => ({
//           id: i + 1,
//           name: `Character ${i + 1}`,
//           url: `http://example.com/char${i + 1}`,
//         }))
//       )
//     ),
//   };
// });

describe("<App />", () => {
  describe("loading character", () => {
    test('renders the title "Characters"', async () => {
      render(<App />);
      expect(screen.getByText("Characters")).toBeInTheDocument();
    });
    test("renders a list of 10 characters", async () => {
      render(<App />);
      const characters = await screen.findAllByTestId("character");
      expect(characters).toHaveLength(10);
    });
  });
  describe("loading more characters", () => {
    test('has a "Load More Characters" button', async () => {
      render(<App />);
      expect(screen.getByText("Load More Characters")).toBeInTheDocument();
    });
    test("clicking load more gets 10 more characters", async () => {
      render(<App />);
      fireEvent.click(screen.getByText("Load More Characters"));
      const characters = await screen.findAllByTestId("character");
      expect(characters).toHaveLength(10);
    });
    test("clicking load more increases the page number", async () => {
      render(<App />);
      fireEvent.click(screen.getByText("Load More Characters"));
      expect(screen.getByText("Next Page: 2")).toBeInTheDocument();
    });
  });
});
