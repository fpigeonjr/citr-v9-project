import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => (
    <div>
      <h1>Padre Gino's  - Order Now</h1>
      <Pizza name="Pepperoni Pizza" description="A classic pizza with pepperoni slices and cheese." />
      <Pizza name="Margherita Pizza" description="A simple pizza with fresh tomatoes, mozzarella, and basil." />
      <Pizza name="BBQ Chicken Pizza" description="A delicious pizza topped with BBQ chicken, red onions, and cilantro." />
      <Pizza name="Veggie Supreme Pizza" description="A healthy pizza loaded with bell peppers, onions, mushrooms, and olives." />
      <Pizza name="Hawaiian Pizza" description="A controversial pizza with ham, pineapple, and cheese." />
      <Pizza name="Meat Lovers Pizza" description="A hearty pizza" />
    </div>
  )

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
