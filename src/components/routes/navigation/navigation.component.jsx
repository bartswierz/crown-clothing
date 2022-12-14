import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutStart } from "../../../store/user/user.action";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";
import { signOut } from "firebase/auth";

// NAVIGATION BAR
const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        {/* to='/' takes us to DEFAULT PAGE */}
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        {/* Contains all links */}
        <NavLinks>
          {/* Navigates to Shop page */}
          <NavLink to="/shop">SHOP</NavLink>
          {/* Navigate to Sign In Page */}
          {/* IF currentUser EXISTS, then DISPLAY "SIGNOUT", 
          IF DOES NOT EXIST, then display "Sign In" */}
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGNOUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

/* BEFORE STYLED COMPONENTS
return (
    <Fragment>
      <div className="navigation">
        {/* to='/' takes us to DEFAULT PAGE */
// <Link className="logo-container" to="/">
//   <CrwnLogo className="logo" />
// </Link>
// {/* Contains all links */}
// <div className="nav-links-container">
//   {/* Navigates to Shop page */}
//   <Link className="nav-link" to="/shop">
//     SHOP
//   </Link>
{
  /* Navigate to Sign In Page */
}
{
  /* IF currentUser EXISTS, then DISPLAY "SIGNOUT", 
          IF DOES NOT EXIST, then display "Sign In" */
}
{
  /* {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGNOUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}; */
}
