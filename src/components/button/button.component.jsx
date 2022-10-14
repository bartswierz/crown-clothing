/*
default

inverted

google sign in
*/

import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.styles";

// Object - This will let us switch between different button types
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// buttonType is either equal to 'google' or 'inverted'
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;

/* {isLoading ? <ButtonSpinner /> : children}
If isLoading is TRUE then DISPLAY ButtonSpinner, ELSE DISPLAY CHILDREN
*/

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
