import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => (
  <div style={{ maxWidth: "900px", padding: "10px" }}>
    <h1>Padre Gino's - Order Now</h1>
    <Order />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
