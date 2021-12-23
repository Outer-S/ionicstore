import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AddProducts from "./pages/AddProducts";
import { ProductsContextProvider } from "./global/ProductContext";
import { CartContextProvider } from "./global/CartContext";
import { auth, db } from "./config/config";
import Cart from "./pages/Cart";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

export class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            this.setState({
              user: snapshot.data().Name,
            });
          });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  render() {
    return (
      <IonApp>
        <ProductsContextProvider>
          <CartContextProvider>
            <IonReactRouter>
              <Route exact path="/">
                <Home user={this.state.user} />
              </Route>
              <Route path="/login" component={LogIn} />
              <Route path="/signin" component={SignUp} />
              <Route path="/add-products" component={AddProducts} />
              <Route path="/cart">
                <Cart user={this.state.user} />
              </Route>
            </IonReactRouter>
          </CartContextProvider>
        </ProductsContextProvider>
      </IonApp>
    );
  }
}

export default App;
