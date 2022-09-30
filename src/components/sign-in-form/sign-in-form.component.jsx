// To track our inputs in our form component
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  // Giving defaultFormFields gives initializes 'formFields' with the default empty strings that we will then update after. Passing in the default field values
  const [formFields, setFormFields] = useState(defaultFormFields);

  // Destructuring off the four values from formFields
  const { email, password } = formFields;

  // console.log(formFields);

  // Resets input textboxes on page back to default
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    // Prevent Default behavior of the FORM. We will handle events
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      console.log(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    //tells WHICH of the fields to UPDATE. We are descrturing off the event and we are taking: name of the field, value from user input
    const { name, value } = event.target;

    // spreads values for others and UPDATES the specific value input from user into our formFields object
    setFormFields({ ...formFields, [name]: value });
    // OUTPUT: {displayName: 'te', email: 'test', password: '', confirmPassword: ''}
    // After 1 letter: {displayName: 'tes', email: 'test', password: '', confirmPassword: ''}
    // Updates EVERYTIME we enter one letter in any of the four fields
  };

  //  value={displayName} -> this says, "Hey I want the value of input to BE THE VALUE IM PASSING YOU"

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="email" type="email" required onChange={handleChange} name="email" value={email} />

        <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

/* type="button" - Placing type='buttons' PREVENTS the DEFAULT FORM SUBMISSION when we click the google button. 
<Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
*/

/*
When we CLICK this button, it triggers the signInWithGoogle function that will go and create a popup that will show google sign in options
<Button onClick={signInWithGoogle}>Google sign in</Button>

Will trigger this function to get google sign in options:
const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
*/

//React has this onSubmit callback ONLY runs when ALL VALIDATIONS of the four fields are filled in/passing
{
  /* <form onSubmit={() => {}} > */
}

/* REPLACED THIS WITH 'FormInput' component. FormInput uses a spread operator
return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />
        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password} />
        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
*/
