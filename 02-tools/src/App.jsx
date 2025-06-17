import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => (
  <div>
    <h1>Padre Gino's - Order Now</h1>
    <Order />
    <PizzaOfTheDay />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
