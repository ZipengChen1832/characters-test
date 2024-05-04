import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Character from "./Character";

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    const character = {
      name: "Arya Stark",
      culture: "Northmen",
      aliases: [],
      books: [],
    };
    const { getByText } = render(<Character character={character} />);
    expect(getByText("name")).toBeInTheDocument();
    expect(getByText("culture")).toBeInTheDocument();
  });
  test("shows culture if it is present", async () => {
    const character = {
      name: "Arya Stark",
      culture: "Northmen",
      aliases: [],
      books: [],
    };
    const { getByText } = render(<Character character={character} />);
    expect(getByText("Northmen")).toBeInTheDocument();
  });
  test("shows alias if no name is present", async () => {
    const character = {
      name: "",
      culture: "Northmen",
      aliases: ["Arya Stark"],
      books: [],
    };
    const { getByText } = render(<Character character={character} />);
    expect(getByText("Arya Stark")).toBeInTheDocument();
  });
  test("shows how many books this characters made an appearance in", async () => {
    const character = {
      name: "Arya Stark",
      culture: "Northmen",
      aliases: [],
      books: [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
      ],
    };
    const { getByText } = render(<Character character={character} />);
    expect(getByText("Number of Books: 2")).toBeInTheDocument();
  });
});
