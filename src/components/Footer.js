import {
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoYoutube,
} from "ionicons/icons";
import { IonIcon, IonButton } from "@ionic/react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <section className="footer">
        <div className="about-us">
          <h1>ION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            natus quo id a repudiandae nihil temporibus! Minima labore veniam
            architecto at, consectetur ipsum? Nobis debitis earum consectetur
            ex, ut quaerat?
          </p>
          <div className="social-media">
            <IonIcon className="ion-icon" icon={logoFacebook}></IonIcon>
            <IonIcon className="ion-icon" icon={logoTwitter}></IonIcon>
            <IonIcon className="ion-icon" icon={logoInstagram}></IonIcon>
            <IonIcon className="ion-icon" icon={logoYoutube}></IonIcon>
          </div>
        </div>
        <div className="quick-links">
          <h1>QUICK LINKS</h1>
          <ul>
            <li>
              <a href="/">Log in</a>
            </li>
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="news-letter">
          <h1>JOIN OUR NEWSLETTER</h1>
          <div className="email-join">
            <input type="email" placeholder="ex. name@email.com" />
            <IonButton>JOIN</IonButton>
          </div>
        </div>
      </section>
      <section className="copyright">
        <p>
          Copyright <span className="name-link">ION</span> | All rights
          reserved. Designed by
          <span className="name-link">
            <a href="https://aptus.ma/"> APTUS</a>
          </span>
        </p>
      </section>
    </section>
  );
};

export default Footer;
