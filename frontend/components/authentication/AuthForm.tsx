import { useContext, useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";

import Form from "./SignUpForm";
import LoginForm from "./LoginForm";

import { User } from "../../types/user";
import {
  checkIsEmail,
  checkIsNotEmpty,
  checkPassword,
} from "../../utills/validation";
import axios from "axios";
import { AuthContext } from "../../store/auth/AuthContext";

import { Colors, Fonts } from "../../constants/constants";
import ErrorModal from "../UI/ErrorModal";
import Spinner from "../UI/Spinner";
import useHttpRequest from "../../hooks/http-hook";

export default ({
  mode,
  onChangeMode,
}: {
  mode: "login" | "signup";
  onChangeMode: () => void;
}) => {
  const { error, loading, sendHttp, onClearError } = useHttpRequest();
  const initialItem = {
    value: "",
    isValid: true,
  };
  const [user, setUser] = useState<User>({
    name: initialItem,
    email: initialItem,
    password: initialItem,
  });

  const { login } = useContext(AuthContext);
  const isLogin = mode === "login";

  const onChangeHandler = (option: keyof User, value: string) => {
    setUser((user) => ({ ...user, [option]: { isValid: true, value } }));
  };

  const onSubmitHandler = async () => {
    const { email, password, name } = user;
    const nameIsValid = mode === "login" || checkIsNotEmpty(name?.value);
    const emailIsValid = checkIsEmail(email.value);
    const passwordIsValid = checkPassword(password.value);

    setUser((user) => ({
      ...user,
      email: {
        ...user.email,
        isValid: emailIsValid,
      },
      password: {
        ...user.password,
        isValid: passwordIsValid,
      },
      name: {
        ...user.name,
        isValid: nameIsValid,
      },
    }));
    if (!emailIsValid || !passwordIsValid || !nameIsValid) return;
    try {
      const response = await sendHttp(
        `http://192.168.1.81:5000/api/users/${mode}/`,
        "POST",
        {
          login: email.value,
          password: password.value,
          name: mode === "signup" && name.value,
        }
      );

      login && login(response.user);
    } catch (err: any) {
      console.log(err)
    } finally {
    }
  };
  if (loading) {
    return (
      <View style={[StyleSheet.absoluteFill, styles.modal]}>
        <Spinner size="large" color={Colors.plum_300} />
      </View>
    );
  }
  return (
    <>
      <View>
        {mode === "login" ? (
          <LoginForm
            onChangeHandler={onChangeHandler}
            loginHandler={onSubmitHandler}
            user={user}
          />
        ) : (
          <Form
            onChangeHandler={onChangeHandler}
            createUser={onSubmitHandler}
            user={user}
          />
        )}
        <View style={styles.changeMethodWrapper}>
          <Text>
            {isLogin ? "Don`t have an account?" : "Already have an account?s"}
          </Text>
          <Pressable onPress={onChangeMode}>
            <Text style={styles.changeMethodButton}>
              {isLogin ? "Sign up" : "Sign in"}
            </Text>
          </Pressable>
        </View>
        {error && <ErrorModal error={error} onClearError={onClearError} />}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  changeMethodWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
  },
  changeMethodButton: {
    color: Colors.plum_300,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.plum_100,
    height: "100%",
    flex: 1,
  },
});
