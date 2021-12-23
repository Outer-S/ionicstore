import { IonTitle, IonButton, IonText, IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { auth } from "../config/config";
import { useHistory } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ user }) => {
  const history = useHistory();
  const handleLogOut = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <>
      <IonTitle className="logo">ION</IonTitle>

      {user ? (
        <div className="user-auth-container render-element">
          <IonText className="user-name">{user}</IonText>
          <a href="/cart">
            <IonIcon
              routerLink="/cart"
              icon={cartOutline}
              className="shopping-cart"
            ></IonIcon>
          </a>
          <IonButton onClick={handleLogOut} size="small" color="danger">
            LOG OUT
          </IonButton>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default NavBar;
