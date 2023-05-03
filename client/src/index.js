import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import MealProvider from "./store/meals/MealProvider";
import CartProvider from "./store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <MealProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MealProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
