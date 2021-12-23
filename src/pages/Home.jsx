import { IonContent, IonHeader, IonPage } from "@ionic/react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { auth } from "../config/config";

import "./Home.css";

const Home = ({ user }) => {
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      !user ? history.push("/login") : console.log(user);
    });
  });

  return (
    <IonPage>
      <IonHeader className="nav-bar">
        <NavBar user={user} />
      </IonHeader>
      <IonContent className="main-content" fullscreen>
        <HeroSection />
        <Products />
        <Discover />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
