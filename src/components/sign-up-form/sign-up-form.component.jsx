// To track our inputs in our form component
import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // Giving defaultFormFields gives initializes 'formFields' with the default empty strings that we will then update after. Passing in the default field values
  const [formFields, setFormFields] = useState(defaultFormFields);
  // console.log(formFields);

  // Destructuring off the four values from formFields
  const { displayName, email, password, confirmPassword } = formFields;

  // const val = useContext(UserContext);
  // console.log("hit");

  // Resets input textboxes on page back to default
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    // Prevent Default behavior of the FORM. We will handle events
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth.email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
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
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

        {/* <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        /> */}

        <FormInput label="email" type="email" required onChange={handleChange} name="email" value={email} />

        <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password} />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

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
