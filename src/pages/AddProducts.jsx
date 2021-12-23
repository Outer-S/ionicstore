import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonText,
  IonLabel,
} from "@ionic/react";

import { useState } from "react";
import { db, storage } from "../config/config";

import "./AddProducts.css";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleProductImage = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage && types.includes(selectedImage.type)) {
      setProductImg(selectedImage);
      setError("");
    } else {
      setProductImg("");
      setError("Please select png or jpeg files only.");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log(productName, productPrice, productImg);

    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                productName: productName,
                productPrice: Number(productPrice),
                productImg: url,
              })
              .then(() => {
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };
  return (
    <>
      <IonPage>
        <IonHeader className="nav-bar">
          <IonTitle className="addProduct-title">ADD PRODUCTS</IonTitle>
        </IonHeader>
        <IonContent className="main-content">
          <form autoComplete="off" className="form-group" onSubmit={addProduct}>
            {/* Product Name */}

            <div className="ion-item">
              <IonLabel>Product Name</IonLabel>
              <input
                className="ion-input"
                type="text"
                placeholder="Product Name"
                required
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              ></input>
            </div>

            {/* Product Price */}

            <div className="ion-item">
              <IonLabel>Product Price</IonLabel>
              <input
                className="ion-input"
                type="number"
                placeholder="Product Price"
                required
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              ></input>
            </div>

            {/* Uploading the image for our products */}

            <div className="ion-item">
              <IonLabel>Product Image</IonLabel>
              <input type="file" onChange={handleProductImage} />
            </div>

            {error && <IonText className="error-color">{error}</IonText>}

            {/* Submit button */}
            <IonButton
              type="submit"
              className="add-button"
              color="primary"
              strong
            >
              ADD PRODUCT
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default AddProducts;
