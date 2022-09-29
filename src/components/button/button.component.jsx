/*
default

inverted

google sign in
*/

import "./button.styles.scss";

// Object - This will let us switch between different button types
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

// buttonType is either equal to 'google' or 'inverted'
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} `} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

// We use {...otherProps} to grab the type="submit"
//  <button type="submit">Sign Up</button>

/* 
We use this string interprolation to choose WHICH TYPE of BUTTON to render
<button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} `} 
This creates:
<button className="button-container google"
or
<button className="button-container inverted"
*/
