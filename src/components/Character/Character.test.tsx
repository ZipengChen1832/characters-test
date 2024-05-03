import { describe, expect, test } from "vitest";
import Character from "./Character";
import { CharacterType } from "../../types/characterType";
import { render } from "@testing-library/react";

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    const character = {
      name: "Jon",
      culture: "Northmen",
      books: ["https://www.anapioficeandfire.com/api/books/5"],
    } as CharacterType;
    const { getByText, debug } = render(<Character character={character} />);
    expect(getByText("name")).toBeInTheDocument();
    debug();
  });
  test("shows culture if it is present", async () => {});
  test("shows alias if no name is present", async () => {});
  test("shows how many books this characters made an appearance in", async () => {});
});
