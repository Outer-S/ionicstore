import { useContext, useEffect } from "react";
import { CartContext } from "../global/CartContext";
import { ProductsContext } from "../global/ProductContext";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import { auth } from "../config/config";
import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import "./Cart.css";

const Cart = ({ user }) => {
  const { shoppingCart, totalPrice, totalQty } = useContext(CartContext);

  // if user not logged in it redirect him to login page
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      !user ? history.push("/login") : console.log(user);
    });
  });

  useEffect(() => {
    console.log(shoppingCart);
  });

  return (
    <IonPage>
      <IonHeader className="nav-bar">
        <NavBar user={user} />
      </IonHeader>
      <IonContent className="cart-container">
        {shoppingCart.length === 0 && (
          <div className="no-items">
            <div>No items in your cart.</div>
            <div>
              <IonButton routerLink="/">Return to Home page</IonButton>
            </div>
          </div>
        )}

        {shoppingCart &&
          shoppingCart.map((cart) => (
            <div className="cart-card" key={cart.ProductID}>
              <div className="cart-img">
                <img src={cart.ProductImg} alt="not found" />
              </div>

              <div className="cart-name">{cart.ProductName}</div>
              <div className="cart-price-orignal">
                {cart.ProductPrice}.00 MAD
              </div>

              <div className="quantity-container">
                <IonButton className="dec">-</IonButton>
                <div className="quantity">{cart.qty}</div>
                <IonButton className="inc">+</IonButton>
              </div>

              <div className="cart-price">{cart.TotalProductPrice}.00 MAD</div>
              <IonButton className="remove" color="danger">
                Remove
              </IonButton>
            </div>
          ))}

        {shoppingCart.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-heading">CHECKOUT</div>
            <div className="cart-summary-price">
              <span>Total Price</span>
              <span>{totalPrice}</span>
            </div>
            <div className="cart-summary-price">
              <span>Total Quantity</span>
              <span>{totalQty}</span>
            </div>
            <IonButton className="btn btn-success btn-md" routerLink="/">
              Cash on delivery
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Cart;
