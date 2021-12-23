import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonLabel,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import { auth } from "../config/config";
import "./LogIn.css";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        props.history.push("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <IonPage>
        <IonHeader className="nav-bar">
          <IonTitle className="signin-title">LOG IN</IonTitle>
        </IonHeader>
        <IonContent className="main-content">
          <form
            autoComplete="off"
            className="login-group"
            onSubmit={handleLogin}
          >
            {/* Product Price */}

            <div className="ion-item">
              <IonLabel>Email</IonLabel>
              <input
                className="ion-input"
                type="email"
                placeholder="ex. user@mail.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              ></input>
            </div>

            {/* User Password */}

            <div className="ion-item">
              <IonLabel>Password</IonLabel>
              <input
                className="ion-input"
                type="password"
                placeholder="*********"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              ></input>
            </div>

            {/* Submit button */}
            <IonButton
              type="submit"
              className="add-button"
              color="primary"
              strong
            >
              LOG IN
            </IonButton>
            <IonText className="no-account">
              You don't have an account? <a href="/signin">Sign In</a>
            </IonText>
            {error && <span className="error-msg">{error}</span>}
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default LogIn;
