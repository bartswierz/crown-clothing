import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import "./navigation.styles.scss";
// NAVIGATION BAR
const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
