import { createContext, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../components/utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// {
//   currentUser: null || googleAuthObj,
//   firstName: '',
//   lastName: ''
// }

// KEEPS TRACK OF OUR DATA/USE CASE CHANGES
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

/*
case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload
      }
  This says ...state -> "Give me all of the PREVIOUS OBJECT", and 
  currentUser: payload "Everything else we will OVERWRITE"
*/

const INITIAL_STATE = {
  currentUser: null,
};

// Allows any of the children to access
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log("currentUser: ", currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  // const { currentUser } = state;

  const value = { currentUser, setCurrentUser };

  // When UserProvider MOUNTS, we just want to SIGN OUT NO MATTER WHAT
  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

<UserProvider>
  <app />
</UserProvider>;
