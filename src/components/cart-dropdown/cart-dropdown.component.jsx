import { useSelector } from "react-redux";
// On button click we go to the checkout page with react method
import { useNavigate } from "react-router-dom";

// import { useContext, React } from "react";

// import { CartContext } from "../../contexts/cart.context";
// import { CategoriesContext } from "../../contexts/categories.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  // const { cartItems } = useContext(CartContext);
  // const { categoriesMap } = useContext(CategoriesContext);
  // console.log(categoriesMap);
  const navigate = useNavigate();

  // Navigates to our checkoutpage WHEN user clicks checkout
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
