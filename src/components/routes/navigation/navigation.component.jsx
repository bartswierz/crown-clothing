import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
// NAVIGATION BAR
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        {/* to='/' takes us to DEFAULT PAGE */}
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        {/* Contains all links */}
        <div className="nav-links-container">
          {/* Navigates to Shop page */}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* Navigate to Sign In Page */}
          {/* IF currentUser EXISTS, then DISPLAY "SIGNOUT", 
          IF DOES NOT EXIST, then display "Sign In" */}
          {currentUser ? (
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
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
