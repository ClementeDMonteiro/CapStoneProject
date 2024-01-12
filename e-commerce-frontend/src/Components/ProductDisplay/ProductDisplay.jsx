import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Welcome to MyPet Store, your one-stop destination for all your pet needs in Australia. We offer a wide range of high-quality products at competitive prices, ensuring that you get the best value for your money. Our team is dedicated to providing excellent customer service, making every purchase a pleasant experience. Whether you're looking for food, toys, accessories, or anything else for your furry friend, you'll find it all here at MyPet Store. Trust us to take care of your pet's needs and ensure their happiness.
        </div>
        
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Delivery :</span> Free Delivery only in Australia</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
