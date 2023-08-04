import { Text, View } from "react-native";
import Title from "../components/UI/Title";
import GeneralSetting from "../components/settings-screen/GeneralSetting";

export default () => {
  return (
    <View>
      <Title>
        Settings
      </Title>
      <GeneralSetting/>
    </View>
  );
};
