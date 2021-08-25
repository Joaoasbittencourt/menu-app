import { Route, Switch } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <Switch>
      <Route path="/:id">
        <ProductPage />
      </Route>
      <Route path="/">
        <ProductsPage />
      </Route>
    </Switch>
  );
}

export default App;
