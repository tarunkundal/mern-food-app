import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import MealProvider from "./store/meals/MealProvider";
import CartProvider from "./store/CartProvider";
import Theme from "./theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <MealProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MealProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
