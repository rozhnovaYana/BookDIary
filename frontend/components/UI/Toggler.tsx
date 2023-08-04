import { Switch, SwitchPropsIOS, View } from "react-native";
import { Colors } from "../../constants/constants";

interface SwitchProps extends SwitchPropsIOS {
    value: boolean
}

export default ({ value, ...switcherProps }: SwitchProps) => {
  return (
    <View>
      <Switch
        trackColor={{
          false: "rgba(231, 224, 236, 0.12);",
          true: Colors.plum_500,
        }}
        thumbColor={value ? "#fff" : "rgba(28, 27, 31, 0.38)"}
        {...switcherProps}
      />
    </View>
  );
};
