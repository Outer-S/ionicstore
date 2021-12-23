import { useContext } from "react";
import { ProductsContext } from "../global/ProductContext";
import { CartContext } from "../global/CartContext";

import "./Products.css";

const Products = () => {
  const { products } = useContext(ProductsContext);
  // console.log(products);

  // const data = useContext(CartContext);
  // console.log(data);

  const { dispatch } = useContext(CartContext);

  return (
    <section id="products-container">
      <h1 className="product-title">PRODUCTS</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.ProductID}>
            <div className="product-img">
              <img className="image" src={product.ProductImg} alt="not found" />
            </div>
            <div className="product-name">{product.ProductName}</div>
            <div className="product-price">
              {product.ProductPrice}.00 <span className="dirham">MAD</span>
            </div>
            <button
              className="addcart-btn"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  id: product.ProductID,
                  product,
                });
              }}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
