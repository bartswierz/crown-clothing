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

// Like a GLOBAL VARIABLE, can use this anywhere else(that is wrapped in the <CartProvider />)
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //useEffect runs whenever our DEPENDENCIES array CHANGES(whenever there is a change to 'cartItems' we will run the useEffect). In this case REDUCE, runs cartItems.length times so 8 items means it will run 8 times and return 8 as our new cartItem total
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

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
