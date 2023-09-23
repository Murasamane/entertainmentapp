/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: "",
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "signup":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    default:
      throw new Error("Unknown Action Type");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext being used in outside of the provider");

  return context;
}

export { AuthProvider, useAuth };
