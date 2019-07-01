import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import NavigationBar from "./components/navbar/navbar";
import ShoppingList from "./components/shoppingList/ShoppingList";
import { Container } from "reactstrap";
import { loadUser } from "./action/authAction";
function App({isAuth}) {
  useEffect(() => {
    store.dispatch(loadUser());
    console.log("99")
  });
  return (
    <Provider store={store}>
      <div className="App">
        <NavigationBar />
        <Container>
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
