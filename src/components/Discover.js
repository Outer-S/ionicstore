import { IonButton } from "@ionic/react";
import discoverImg from "../assets/discover-img.jpg";
import "./Discover.css";

function Discover() {
  return (
    <div className="discover-section">
      <div className="image-section"></div>
      <div className="content-section">
        <h1>ITS ABOUT THE LIFESTYLE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum quod
          minima perspiciatis eos tempora placeat ab aut similique vero illum
          quia assumenda itaque iste laudantium quos, mollitia amet suscipit
          dolorem. Dolorem blanditiis illum nobis, impedit, facere ducimus quasi
          incidunt necessitatibus magni illo dignissimos esse doloribus, ab id
          ut iste?
        </p>
        <IonButton className="btn-joinus" routerLink="/signin">
          JOIN US
        </IonButton>
      </div>
    </div>
  );
}

export default Discover;
