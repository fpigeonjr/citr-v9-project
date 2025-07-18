import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} image={src} description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image is none is provided", async () => {
  const screen = render(
    <Pizza name="something else" description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
