import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/Context";
import { FilterContextProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const client = import.meta.env.VITE_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={client}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <BrowserRouter>
        <FilterContextProvider>
          <CartProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </CartProvider>
        </FilterContextProvider>
      </BrowserRouter>
    </AppProvider>
  </Auth0Provider>
);
