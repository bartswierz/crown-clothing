import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  //Were just mapping through our cartItems, if the id MATCHES then give us a NEW OBJECT, with the SAME cartItem properties EXCEPT DECREASE the QUANTITY BY 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
  }
};

// Helper function receive the cartItems because as we know we need to utilize this cartItem to give us BACK a NEW CART. And passing in the CARTITEM to REMOVE
const clearCartItem = (cartItems, cartItemToClear) => {
  // If cartItem does NOT equal the cartItem we are trying to REMOVE, then add it to our new cartItem
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// Like a GLOBAL VARIABLE, can use this anywhere else(that is wrapped in the <CartProvider />). We initalize it with default values BUT as we run our application, the user's actions will add those values into here for us to be able to access.
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  /*  Creating useState hooks, we have const [VALUE, FUNCTION] = useState(Initialize our VALUE with this value)
  ex. const [isCartOpen, setIsCartOpen] = useState(false); => isCartOpen is set to FALSE, so it will be CLOSED when we START our application.
  */
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  /*useEffect runs whenever our DEPENDENCIES array CHANGES(whenever there is a change to 'cartItems' we will run the useEffect). In this case REDUCE, runs cartItems.length times so 8 items means it will run 8 times and return 8 as our new cartItem total
   */
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/*
product
{
  id,
  name,
  price,
  imageUrl
}

We want our Cart Item to ALSO have 'quantity'
Cart Item
{
  id,
  name,
  price,
  imageUrl,
  quantity
}
*/
