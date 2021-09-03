import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Feedback from "./components/Feedback";
import CartContext from "./CartContext";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      <React.Fragment>
        <NavBar cartCount={cartCount} />
        <main className="container">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    </CartContext.Provider>
  );
}

export default App;
