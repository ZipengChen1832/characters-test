// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import characters from "../mock/characters";
import characters2 from "../mock/characters-2";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(
    "https://www.anapioficeandfire.com/api/characters?page=$1&pageSize=10",
    () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json(characters);
    }
  ),
];
