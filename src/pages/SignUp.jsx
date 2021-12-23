import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonLabel,
  IonText,
} from "@ionic/react";
import { auth, db } from "../config/config";
import { useState } from "react";
import "./SignUp.css";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            props.history.push("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <IonPage>
        <IonHeader className="nav-bar">
          <IonTitle className="signin-title">SIGN UP</IonTitle>
        </IonHeader>
        <IonContent className="main-content">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleSignUp}
          >
            {/* Product Name */}

            <div className="ion-item">
              <IonLabel>Name</IonLabel>
              <input
                className="ion-input"
                type="text"
                placeholder="ex. Amine"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              ></input>
            </div>

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
              SIGN IN
            </IonButton>

            {error && <span className="error-msg">{error}</span>}

            <IonText className="no-account">
              Already have an account? <a href="/login">Log In</a>
            </IonText>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default SignUp;
