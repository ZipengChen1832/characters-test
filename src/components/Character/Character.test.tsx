import { afterEach, describe, expect, test } from "vitest";
import Character from "./Character";
import { CharacterType } from "../../types/characterType";
import { render, cleanup } from "@testing-library/react";

describe("<Character />", () => {
  afterEach(() => {
    cleanup();
  });
  test('shows fields for "name" and "culture"', async () => {
    const character = {
      name: "Jon",
      culture: "Northmen",
      books: ["https://www.anapioficeandfire.com/api/books/5"],
    } as CharacterType;
    const { getByText } = render(<Character character={character} />);
    expect(getByText("name")).toBeInTheDocument();
  });
  test("shows culture if it is present", async () => {
    const character = {
      name: "Jon",
      culture: "Northmen",
      books: ["https://www.anapioficeandfire.com/api/books/5"],
    } as CharacterType;
    const { getByText } = render(<Character character={character} />);
    expect(getByText("culture")).toBeInTheDocument();
    expect(getByText("Northmen")).toBeInTheDocument();
  });
  test("shows alias if no name is present", async () => {
    const character = {
      aliases: ["Jon Snow"],
      culture: "Northmen",
      books: ["https://www.anapioficeandfire.com/api/books/5"],
    } as CharacterType;
    const { getByText } = render(<Character character={character} />);
    expect(getByText("name")).toBeInTheDocument();
    expect(getByText("Jon Snow")).toBeInTheDocument();
  });
  test("shows how many books this characters made an appearance in", async () => {
    const character = {
      name: "Jon",
      culture: "Northmen",
      books: [
        "https://www.anapioficeandfire.com/api/books/5",
        "https://www.anapioficeandfire.com/api/books/8",
      ],
    } as CharacterType;
    const { getByText } = render(<Character character={character} />);
    expect(getByText("Number of Books:")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});
