import React, { createContext, useEffect, useReducer } from "react";

import { ActionTypes, IAuthContext, IUser } from "./types";
import AuthReducer from "./AuthReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthContextProvider {
  children: React.ReactNode;
}
export const AuthContext = createContext<IAuthContext>({
  isLogin: false,
});

const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [{ isLogin, user }, dispatch] = useReducer(AuthReducer, {
    isLogin: false,
  });

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        login(JSON.parse(user));
      }
    })();
  }, []);
  const login = async (user: IUser) => {
    dispatch({
      type: ActionTypes.LOGIN,
      payload: { user },
    });
    await AsyncStorage.setItem("user", JSON.stringify(user));
  };
  const logout = async () => {
    dispatch({
      type: ActionTypes.LOGOUT,
      payload: {},
    });
    await AsyncStorage.removeItem("user");
  };
  const value = {
    login,
    logout,
    isLogin,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
