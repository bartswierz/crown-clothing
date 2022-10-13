// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  // Destructuring off what we need from passed 'product'
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
