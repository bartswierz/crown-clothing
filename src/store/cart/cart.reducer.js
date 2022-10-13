import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
    // throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

//cartItems: payload, -> payload will be our CART ITEMS
//isCartOpen: payload, -> payload will pass as a BOOLEAN(false if cart window is not open, true if cart is currently open)
