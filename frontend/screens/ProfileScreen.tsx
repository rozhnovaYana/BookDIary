import { Text, View } from "react-native";
import Title from "../components/UI/Title";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { AuthContext } from "../store/auth/AuthContext";

export default () => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Title>Profile</Title>
      <Button onPress={() => logout && logout()}>LogOut</Button>
    </View>
  );
};
