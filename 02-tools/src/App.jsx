import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => (
  <div>
    <h1>Padre Gino's - Order Now</h1>
    <Pizza
      name="Pepperoni Pizza"
      description="A classic pizza with pepperoni slices and cheese."
      image="/public/pizzas/pepperoni.webp"
    />
    <Pizza
      name="Hawaiian Pizza"
      description="A controversial pizza with ham, pineapple, and cheese."
      image="/public/pizzas/hawaiian.webp"
    />
    <Pizza
      name="Meat Lovers Pizza"
      description="A hearty pizza"
      image="/public/pizzas/big_meat.webp"
    />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
