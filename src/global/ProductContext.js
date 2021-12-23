import React, { createContext } from "react";
import { db } from "../config/config";

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const prevProducts = this.state.products;
    db.collection("Products").onSnapshot((s) => {
      let changes = s.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevProducts.push({
            ProductID: change.doc.id,
            ProductName: change.doc.data().productName,
            ProductPrice: change.doc.data().productPrice,
            ProductImg: change.doc.data().productImg,
          });
        }
        this.setState({
          products: prevProducts,
        });
      });
    });
  }
  render() {
    return (
      <ProductsContext.Provider value={{ products: [...this.state.products] }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
